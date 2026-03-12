import { supabase } from '../supabase';
import type { LasoSyncRecord } from '../types';

export async function setupDetailPage(container: HTMLElement, id: string) {
  container.innerHTML = `
    <div class="loading-container">
      <div class="spinner"></div>
    </div>
  `;

  async function fetchRecord() {
    try {
      const { data, error } = await supabase
        .from('laso_sync')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      renderDetail(data);
    } catch (err) {
      console.error('Fetch detail error:', err);
      container.innerHTML = `<button class="back-btn" onclick="window.location.hash = ''">Quay lại</button>
                             <div style="color: var(--error-color)">Không tìm thấy bản ghi.</div>`;
    }
  }

  function renderDetail(record: LasoSyncRecord) {
    const info = record.laso_data.info;
    const device = record.device_info;

    container.innerHTML = `
      <div class="detail-view">
        <button class="back-btn" id="back-btn">← Quay lại danh sách</button>
        
        <div class="detail-section">
          <h2>Thông tin cá nhân</h2>
          <div class="info-grid">
            <div class="info-box"><span class="info-label">Họ tên</span><span class="info-value">${info.name}</span></div>
            <div class="info-box"><span class="info-label">Giới tính</span><span class="info-value">${info.gender}</span></div>
            <div class="info-box"><span class="info-label">Ngày dương</span><span class="info-value">${info.solarDate}</span></div>
            <div class="info-box"><span class="info-label">Giờ sinh</span><span class="info-value">${info.time}</span></div>
            <div class="info-box"><span class="info-label">Ngày âm</span><span class="info-value">${info.lunarDate}</span></div>
            <div class="info-box"><span class="info-label">Can Chi</span><span class="info-value">${info.canChi}</span></div>
            <div class="info-box"><span class="info-label">Cục</span><span class="info-value">${info.cuc}</span></div>
            <div class="info-box"><span class="info-label">Mệnh</span><span class="info-value">${info.menhTai}</span></div>
            <div class="info-box"><span class="info-label">SĐT</span><span class="info-value">${record.phone_number}</span></div>
            <div class="info-box"><span class="info-label">IP</span><span class="info-value">${record.ip_address}</span></div>
          </div>
        </div>

        <div class="detail-section">
          <h2>Thiết bị & Hệ thống</h2>
          <div class="info-grid" style="grid-template-columns: 1fr;">
            <div class="info-box"><span class="info-label">Trình duyệt</span><span class="info-value">${device.userAgent}</span></div>
            <div class="info-box"><span class="info-label">Nền tảng</span><span class="info-value">${device.platform}</span></div>
            <div class="info-box"><span class="info-label">Màn hình</span><span class="info-value">${device.screen}</span></div>
            <div class="info-box"><span class="info-label">Ngôn ngữ</span><span class="info-value">${device.language}</span></div>
          </div>
        </div>

        <div class="detail-section">
          <h2>Dữ liệu Lá số (JSON)</h2>
          <pre>${JSON.stringify(record.laso_data, null, 2)}</pre>
        </div>
      </div>
    `;

    document.getElementById('back-btn')?.addEventListener('click', () => {
      window.location.hash = '';
    });
  }

  fetchRecord();
}
