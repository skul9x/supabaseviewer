# 📱 Supabase Viewer Dashboard

Giao diện quản trị (Admin Dashboard) tối ưu cho di động để theo dõi dữ liệu đồng bộ từ ứng dụng **TuViWeb**. Được xây dựng với phong cách thiết kế hiện đại, cao cấp.

## ✨ Tính năng nổi bật
- **Giao diện Premium**: Chế độ nền tối (Dark mode) với điểm nhấn vàng gold sang trọng, phong cách Glassmorphism.
- **Tối ưu Mobile-first**: Hiển thị dạng Card thông minh, dễ dàng thao tác trên màn hình nhỏ.
- **Tìm kiếm & Bộ lọc**: Tra cứu nhanh chóng bản ghi theo Họ tên hoặc Số điện thoại.
- **Xem chi tiết chuyên sâu**:
  - Toàn bộ thông tin cá nhân của lá số.
  - Thông tin thiết bị người dùng (UA, Screen, IP).
  - Dữ liệu gốc JSON được định dạng dễ đọc.
- **Đồng bộ thời gian thực**: Kết nối trực tiếp với Supabase database.

## 🛠️ Stack công nghệ
- **Frontend**: [Vite](https://vitejs.dev/) + TypeScript.
- **Styling**: Vanilla CSS (Custom Design System).
- **Backend-as-a-Service**: [Supabase](https://supabase.com/).
- **Deployment**: Sẵn sàng cho [Vercel](https://vercel.com/).

## 📦 Hướng dẫn cài đặt

### 1. Clone repository
```bash
git clone https://github.com/skul9x/supabaseviewer.git
cd supabaseviewer
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Khởi chạy môi trường Phát triển
```bash
npm run dev
```

### 4. Xây dựng bản Production
```bash
npm run build
```

## 🧪 Kiểm tra kết nối
Dự án có sẵn script để kiểm tra nhanh kết nối tới Supabase:
```bash
npx tsx test-connection.ts
```

## 📂 Cấu trúc thư mục nền tảng
- `src/pages/`: Chứa các màn hình chính (Danh sách, Chi tiết).
- `src/components/`: Các thành phần giao diện dùng chung (Record Card).
- `src/supabase.ts`: Cấu hình kết nối cơ sở dữ liệu.
- `src/style.css`: Toàn bộ logic thiết kế và giao diện.
- `.brain/`: Lưu trữ bối cảnh và kiến thức của AI về dự án (AWF System).

---
*Phát triển và duy trì bởi Administrator & Antigravity AI.*
