import type { LasoSyncRecord } from '../types';

export function renderRecordCard(record: LasoSyncRecord): string {
  const date = new Date(record.created_at).toLocaleString('vi-VN');
  const info = record.laso_data.info;
  
  return `
    <div class="card" onclick="window.location.hash = '#detail/${record.id}'">
      <div class="card-header">
        <div>
          <div class="card-title">${info.name || 'N/A'}</div>
          <div class="card-subtitle">${record.phone_number}</div>
        </div>
        <div class="card-subtitle" style="text-align: right">
          ${date}
        </div>
      </div>
      <div class="card-info">
        <div class="info-item">Giới tính: <b>${info.gender}</b></div>
        <div class="info-item">Ngày sinh: <b>${info.solarDate}</b></div>
        <div class="info-item">IP: <b>${record.ip_address}</b></div>
        <div class="info-item">Mệnh: <b>${info.menhTai}</b></div>
      </div>
    </div>
  `;
}
