import { supabase } from './src/supabase.ts';

async function quickTest() {
  console.log('🧪 Starting Quick Connectivity Test...');
  
  try {
    // 1. Test connection and count
    console.log('📡 Testing Supabase connection...');
    const { count, error: countError } = await supabase
      .from('laso_sync')
      .select('*', { count: 'exact', head: true });
      
    if (countError) throw countError;
    console.log(`✅ Connection successful! Found ${count} records in 'laso_sync'.`);

    // 2. Fetch latest record for structure verification
    console.log('🔍 Verifying data structure of the latest record...');
    const { data, error: fetchError } = await supabase
      .from('laso_sync')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1);

    if (fetchError) throw fetchError;
    
    if (data && data.length > 0) {
      const record = data[0];
      const hasPhone = !!record.phone_number;
      const hasLasoData = !!record.laso_data && !!record.laso_data.info;
      const hasDeviceInfo = !!record.device_info;

      if (hasPhone && hasLasoData && hasDeviceInfo) {
        console.log('✅ Data structure is VALID.');
        console.log(`   - Last User: ${record.laso_data.info.name}`);
        console.log(`   - Last Sync: ${new Date(record.created_at).toLocaleString('vi-VN')}`);
      } else {
        console.warn('⚠️ Data structure seems incomplete:', { hasPhone, hasLasoData, hasDeviceInfo });
      }
    } else {
      console.log('ℹ️ No data records found to verify structure.');
    }

    console.log('\n✨ QUICK TEST PASSED!');
  } catch (err) {
    console.error('\n❌ QUICK TEST FAILED!');
    console.error(err);
    process.exit(1);
  }
}

quickTest();
