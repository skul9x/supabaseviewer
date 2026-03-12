import { supabase } from '../supabase';
import type { LasoSyncRecord } from '../types';
import { renderRecordCard } from '../components/record-card';

export async function setupListPage(container: HTMLElement) {
  container.innerHTML = `
    <div class="search-container">
      <input type="text" id="search-input" class="search-input" placeholder="Tìm kiếm theo tên hoặc số điện thoại...">
    </div>
    <div id="list-content" class="container">
      <div class="loading-container">
        <div class="spinner"></div>
      </div>
    </div>
  `;

  const listContent = document.getElementById('list-content')!;
  const searchInput = document.getElementById('search-input') as HTMLInputElement;

  let allRecords: LasoSyncRecord[] = [];

  async function fetchRecords() {
    try {
      const { data, error } = await supabase
        .from('laso_sync')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      allRecords = data || [];
      renderRecords(allRecords);
    } catch (err) {
      console.error('Fetch error:', err);
      listContent.innerHTML = `<div style="color: var(--error-color)">Lỗi tải dữ liệu. Cần kiểm tra kết nối Supabase.</div>`;
    }
  }

  function renderRecords(records: LasoSyncRecord[]) {
    if (records.length === 0) {
      listContent.innerHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 2rem;">Không tìm thấy kết quả nào.</div>`;
      return;
    }
    listContent.innerHTML = records.map(renderRecordCard).join('');
  }

  searchInput.addEventListener('input', (e) => {
    const query = (e.target as HTMLInputElement).value.toLowerCase();
    const filtered = allRecords.filter(r => 
      r.laso_data.info.name?.toLowerCase().includes(query) || 
      r.phone_number.includes(query)
    );
    renderRecords(filtered);
  });

  fetchRecords();
}
