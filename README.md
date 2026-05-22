# HTHFood - Wireframe Viewer 🎨

Chào mừng đến với repository Wireframe của dự án **HTHFood** (HowToHeal & Chill Food - F&B Online Ordering System).

> **Lưu ý quan trọng:** Repository này **chỉ chứa mã nguồn tĩnh (React/Vite) để xem trước bản thiết kế giao diện (Wireframe)**. Đây là một phần trong giai đoạn thiết kế của kỳ thực tập IOC, không bao gồm logic nghiệp vụ (Backend/Database).

---

## 👥 Đội ngũ phát triển (Team HTHFood)

Dự án được thực hiện bởi nhóm 3 thành viên:

- **Hào**
- **Triều**
- **Hiếu**

---

## 🍔 Về dự án HTHFood

HTHFood là hệ thống đặt đồ ăn & bánh trực tuyến tích hợp AI. Wireframe này mô phỏng 3 phân hệ giao diện chính của hệ thống:

1. **Web Customer:** Giao diện cho khách hàng (đặt món, xem đơn, Custom Cake Builder, AI Chatbot).
2. **Web Admin:** Giao diện quản trị hệ thống, nhân sự (HRM), kho hàng, khuyến mãi.
3. **Web KDS (Kitchen Display System):** Màn hình hiển thị và xử lý đơn hàng realtime tại bếp.

---

## 🚀 Hướng dẫn chạy Wireframe trên máy cá nhân

Dự án này được khởi tạo bằng **Vite + React**. Để xem wireframe, bạn cần cài đặt [Node.js](https://nodejs.org/) trên máy, sau đó làm theo các bước sau:

**Bước 1:** Clone repository này về máy và dùng Terminal di chuyển vào thư mục dự án:

```bash
cd hth-wireframe
```

**Bước 2:** Cài đặt các thư viện cần thiết:

```bash
npm install
```

> Nếu terminal báo lỗi thiếu thư viện icon, hãy chạy thêm: `npm install lucide-react`

**Bước 3:** Khởi động server phát triển:

```bash
npm run dev
```

**Bước 4:** Mở trình duyệt và truy cập vào đường link hiển thị trong terminal (thường là `http://localhost:5173/`).

---

## 📂 Danh sách màn hình chi tiết

Toàn bộ các file giao diện nằm trong thư mục `src/`. Bạn có thể thay đổi màn hình hiển thị bằng cách sửa phần `import` và gọi `<Tên_Component />` tương ứng bên trong file `src/App.jsx`.

---

### 🛍️ `a01-a03.jsx` — Giao diện Khách hàng (Trang chủ, Thực đơn, Chi tiết SP)

#### A-01: Trang chủ (`A01_Homepage`)
- **Hero section** (520px): Slogan "Ăn ngọt cho ngày bớt đắng", 2 nút CTA (Xem thực đơn / Thiết kế bánh), badge đánh giá 4.9★.
- **Marquee** chạy ngang: thông tin freeship, đánh giá TikTok.
- **Danh mục** 6 ô (Bánh kem, Bánh mì, Thức uống, Combo, Bánh theo yêu cầu, Xem tất cả) — hiệu ứng tilt xen kẽ.
- **Hot Products** 4 card: tên, giá, giá gốc gạch, badge (HOT/MỚI/BÁN CHẠY), sao đánh giá, nút "Thêm vào giỏ" — disabled nếu hết hàng.
- **Ưu đãi đang chạy**: banner freeship + 2 voucher (HELLO50, BIRTHDAY20) với nút "Lưu mã".
- **Cake Builder Teaser**: giới thiệu 7 bước, preview ảnh bánh, nút "Bắt đầu thiết kế" (yêu cầu đăng nhập).
- **Đánh giá khách hàng**: 3 card review với ảnh, tên, ngày, nội dung — hiệu ứng tilt.
- Có `CustomerHeader`, `CustomerFooter`, `ChatbotFab`.

#### A-02: Thực đơn (`A02_Menu`)
- **Sidebar trái** (260px, sticky): ô tìm kiếm, cây danh mục 2 cấp (Bánh kem ▼ Sinh nhật/Cưới; Thức uống ▼ Trà sữa/Cà phê; Bánh mì; Combo), bộ lọc giá (range slider), lọc theo tags (checkbox), nút Áp dụng.
- **Khu vực chính**: breadcrumb, tổng số SP + dropdown sắp xếp, lưới 3 cột gồm 9 card sản phẩm (hiển thị badge, giá, sao, nút giỏ — disabled nếu hết hàng hoặc "Ngừng KD").
- **Phân trang** dạng số, trang hiện tại highlight.

#### A-03: Chi tiết sản phẩm (`A03_Product`)
- **Ảnh sản phẩm**: ảnh chính lớn (540×400) + mũi tên trái/phải + 4 thumbnail chọn được.
- **Thông tin sản phẩm**: tag trạng thái (BÁN CHẠY, CÒN 8 CÁI), tên, số sao + số lượt đánh giá, giá (kèm giá gốc gạch chân).
- **Tùy chọn**: chọn kích cỡ (4/6/8/10 inch, ghi rõ số người), chọn hương vị kem (5 loại).
- **Ghi chú** (max 200 ký tự), **bộ đếm số lượng** (−/+, debounce 300ms).
- Nút "Thêm vào giỏ" + "Yêu thích"; ghi chú vận chuyển (giao 2-4h / nhận tại quầy).
- **Khung đánh giá**: điểm tổng (4.2/5), biểu đồ thanh % từng sao, danh sách 2 review (có ảnh), tabs lọc (Tất cả / 5★ / 4★ / Có ảnh).
- **Sản phẩm tương tự**: lưới 4 card.

---

### 🛒 `a04-a08.jsx` — Giỏ hàng, Thanh toán, Kết quả, Theo dõi, Lịch sử

#### A-04: Giỏ hàng (`A04_Cart`)
- **Danh sách sản phẩm**: checkbox chọn từng/tất cả, nút "Xóa đã chọn"; mỗi item gồm ảnh, tên, tùy chọn, ghi chú, giá, bộ đếm ±, nút xóa. Sản phẩm hết hàng → mờ + tag "Hết hàng".
- Ghi chú kỹ thuật: Guest dùng localStorage, sau đăng nhập merge với DB, duplicate tự cộng qty.
- **Tóm tắt đơn** (sticky, 380px): tạm tính, ô nhập mã giảm giá, hiển thị giảm (HELLO50), phí giao hàng (chờ địa chỉ), tổng tiền, điểm tích lũy sẽ nhận, nút "Tiến hành thanh toán".
- **Empty state**: mascot + text "Giỏ hàng trống rỗng 😢" + nút Khám phá thực đơn.

#### A-05: Thanh toán (`A05_Checkout`)
- **Bước 1 — Loại đơn**: 3 lựa chọn (Dine-in / Takeaway / Delivery) — Dine-in hiện thêm ô "Số bàn", Delivery hiện section địa chỉ.
- **Bước 2 — Địa chỉ giao hàng** (chỉ khi Delivery): danh sách địa chỉ đã lưu (max 5), radio chọn, nút "+ Thêm địa chỉ mới".
- **Bước 3 — Thanh toán**: COD / Ví MoMo (ghi chú giữ tồn kho 10 phút).
- **Bước 4 — Điểm loyalty** (chỉ Member): hiển thị điểm hiện có, checkbox dùng toàn bộ.
- **Bước 5 — Ghi chú đơn hàng**: textarea tự do.
- **Sidebar tóm tắt** (sticky): danh sách món, tạm tính, giảm giá, phí ship, điểm dùng, **tổng thanh toán**, nút "Đặt hàng ngay" (min 50k).

#### A-06: Kết quả thanh toán (`A06_PaymentResult`) — 3 trạng thái
- **SUCCESS**: icon ✅, mã đơn hàng (HTH-YYYYMMDD-XXXXX), tóm tắt (món, địa chỉ, hình thức), nút "Theo dõi đơn" + "Về trang chủ".
- **FAILED** (MoMo): icon ❌, lý do thất bại, nút "Thử lại" + "Đặt hàng với COD".
- **PROCESSING**: spinner tròn, text "Đang xác nhận...", cảnh báo không đóng trang.

#### A-07: Theo dõi đơn hàng (`A07_OrderTracking`)
- **Header đơn**: mã đơn, ngày, loại (Delivery/Takeaway/Dine-in).
- **Stepper trạng thái** (realtime WebSocket): 5 bước — NEW → PREPARING → READY → DELIVERING → COMPLETED; bước hiện tại có hiệu ứng pulse.
- **Bản đồ giao hàng** (chỉ khi DELIVERING): placeholder map 600×300, tên shipper, dự kiến thời gian.
- **Chi tiết đơn**: danh sách món, địa chỉ, trạng thái thanh toán. Nút "Hủy đơn" chỉ hiện khi status=NEW; nút "Liên hệ hỗ trợ".
- **Cảnh báo Dead Order** (dành cho Branch Manager): nổi bật đỏ nếu đơn READY > 15 phút.

#### A-08: Lịch sử đơn hàng (`A08_OrderHistory`)
- **Tabs lọc**: Tất cả / Đang xử lý / Hoàn thành / Đã hủy + bộ lọc từ ngày–đến ngày.
- **Danh sách 4 đơn**: mã, ngày, tag trạng thái màu sắc, thumbnail, tên món, tổng tiền, loại đơn, hình thức thanh toán. Đơn COMPLETED có thêm nút "Đặt lại" và "Đánh giá" (nếu chưa review).
- **Phân trang** 10 items/trang.
- **Empty state**: mascot + "Bạn chưa có đơn hàng nào".

---

### 👤 `a09-a13.jsx` — Profile, Đăng nhập, Quên mật khẩu, Chatbot

#### A-09: Profile (`A09_Profile`) — 4 tab hiển thị chồng nhau
- **Tab 1 — Thông tin cá nhân**: avatar (thay ảnh, JPG/PNG max 5MB), tên hiển thị (min 2/max 100 ký tự), email (readonly nếu Google OAuth), số điện thoại (10 số VN), nút "Lưu thay đổi".
- **Tab 2 — Địa chỉ giao hàng**: danh sách tối đa 5 địa chỉ (tên, SĐT, địa chỉ đầy đủ, icon loại), nút Sửa/Xóa/Đặt mặc định, nút "+ Thêm địa chỉ mới".
- **Tab 3 — Điểm tích lũy**: tổng điểm (1,240 = 12,400đ), thanh tiến trình lên hạng Gold, bảng lịch sử +/− điểm (ngày, mã đơn, số điểm, lý do).
- **Tab 4 — Đổi mật khẩu**: mật khẩu hiện tại, mật khẩu mới (min 8 ký tự), xác nhận; disable nếu tài khoản Google OAuth.

#### A-10: Đăng nhập / Đăng ký (`A10_Auth`) — 3 trạng thái
- **LOGIN**: nút "Tiếp tục với Google", form Email + Mật khẩu (ẩn/hiện), checkbox "Nhớ tôi", link "Quên mật khẩu", hiển thị 2 error state (sai thông tin / quá nhiều lần thử → khóa 15 phút).
- **REGISTER**: form Tên + Email + Mật khẩu + Xác nhận, note "email xác minh gửi trong 30 giây".
- **EMAIL VERIFY**: icon 📧, hướng dẫn kiểm tra hộp thư, nút "Gửi lại email" + "Đổi email" (link hiệu lực 24 giờ).

#### A-11: Quên mật khẩu (`A11_Forgot`) — 3 bước
- **Bước 1**: nhập email → nút "Gửi OTP" (OTP gửi trong 60 giây).
- **Bước 2**: 6 ô nhập OTP riêng lẻ, đồng hồ đếm ngược hết hạn, error state (sai mã, còn X lần thử; sau 5 lần sai → khóa 30 phút), nút "Gửi lại" disabled khi countdown > 0.
- **Bước 3**: nhập mật khẩu mới + xác nhận (min 8 ký tự) → thành công redirect về login.

#### A-13: AI Chatbot Widget (`A13_Chatbot`) — 2 trạng thái
- **CLOSED**: nút FAB tròn 56px góc phải dưới, badge "MỚI" + hiệu ứng glow.
- **OPEN** (panel 360×520px): header (logo + tên "HTHFood Assistant 🎂" + nút thu/đóng), vùng tin nhắn (bot bubble + suggestion chips, user bubble, typing indicator "●●●", fallback error + nút "Liên hệ nhân viên"), ô nhập + nút gửi. Guest → session only; Member → lưu 30 ngày.

---

### 🎂 `a12.jsx` — Cake Builder (7 bước)

> Toàn bộ 7 bước hiển thị chồng nhau trên một trang để dễ xem wireframe. State lưu localStorage (không mất khi F5).

| Bước | Nội dung |
|------|----------|
| **1 — Template** | Tabs lọc theo dịp (Sinh nhật/Cưới/Kỷ niệm/Khác) + tìm kiếm, lưới 8 template card (ảnh + tên + dịp), template đang chọn có dấu ✓ viền đậm |
| **2 — Kích cỡ & Tầng** | 4 lựa chọn size (4/6/8/10 inch, ghi rõ số người + giá), 3 lựa chọn số tầng (1/2/3, tầng thêm +150k/+300k), thanh tóm tắt giá realtime |
| **3 — Hương vị** | Chọn hương vị bánh (6 loại: Vanilla/Chocolate/Red Velvet/Matcha/Lemon/Carrot) + hương vị kem riêng (6 loại: Vanilla/Chocolate/Matcha/Strawberry/Caramel/Cream Cheese) |
| **4 — Màu & Trang trí** | 5 màu chủ đạo (vòng tròn màu + tên + custom #HEX), trang trí multi-select (6 loại: Hoa tươi/Hoa đường/Macaron/Figurine/Đèn sparkler/Trái cây tươi, mỗi loại +giá) |
| **5 — Chữ & Ghi chú** | Nhập chữ trên bánh (max 50 ký tự), chọn font (Classic/Script/Bold/Fun), chọn màu chữ (6 màu), ghi chú đặc biệt (max 500 ký tự), upload ảnh tham khảo (max 5 file, JPG/PNG ≤5MB) |
| **6 — AI Preview** | Tóm tắt config (readonly), nút "✨ Xem trước bằng AI" (loading 5-15 giây, chỉ 1 lần), ảnh AI 400×400 kèm disclaimer, nút "Bỏ qua" |
| **7 — Xác nhận** | Ảnh AI 200×200 + bảng tóm tắt đầy đủ thiết kế + giá tạm tính (giá chính thức sau khi Admin xác nhận), nút "Thêm vào giỏ" (lưu type=CUSTOM_CAKE + JSON options) |

---

### ⚙️ `b01-b04.jsx` — Admin (Dashboard, Đơn hàng, Sản phẩm, Danh mục)

#### B-01: Dashboard (`B01_Dashboard`)
- **4 thẻ KPI**: Doanh thu hôm nay, Tổng đơn, Đơn mới cần xử lý (badge đỏ!), Khách mới — đều có % so sánh hôm qua.
- **2 alert banner**: Dead Orders chưa xử lý (đỏ) + sản phẩm sắp hết hàng (vàng).
- **Biểu đồ**: cột doanh thu 7 ngày (T2–CN) + biểu đồ tròn đơn theo trạng thái (COMPLETED/PREPARING/READY/CANCELLED).
- **2 bảng**: Top 5 sản phẩm bán chạy (tên, số bán, doanh thu) + Đơn hàng gần nhất (mã, khách, trạng thái, tiền).
- Bộ lọc theo tuần/tháng.

#### B-02: Quản lý đơn hàng (`B02_Orders`)
- **Bộ lọc**: tìm mã đơn, lọc chi nhánh/trạng thái/loại đơn, chọn khoảng ngày.
- **Bảng đơn hàng**: checkbox chọn, mã, khách, chi nhánh, loại (Delivery/Takeaway/Dine-in), số món, tổng tiền, TT thanh toán, tag trạng thái màu, thời gian. **Dead Order** highlight đỏ + icon ⚠. Các nút hành động: 👁 Xem / ✏ Sửa / 🚫 Hủy.
- **Modal chi tiết đơn** (preview): danh sách món, thông tin khách + địa chỉ + thanh toán, các nút điều hướng trạng thái (Nhận đơn / Xác nhận giao / Hoàn thành / Hủy) — hiển thị tùy theo role.

#### B-03: Quản lý sản phẩm (`B03_Products`)
- **Bảng sản phẩm**: ảnh nhỏ, tên, danh mục, giá gốc, giá KM, tồn kho (đỏ nếu dưới ngưỡng), tag trạng thái (ACTIVE/HIDDEN/DISCONTINUED). Nút: ✏ Sửa / 👁 Ẩn/Hiện / 🔘 Toggle / 🗑 Xóa.
- **Modal Thêm/Sửa sản phẩm**: tên, slug (auto-gen), danh mục (multi-select), tồn kho, giá gốc, giá KM (phải < giá gốc), mô tả, upload ảnh (max 10 ảnh/10MB), Option Groups (nhóm tùy chọn như Kích cỡ), tags (Nổi bật/Bán chạy/Được yêu thích), trạng thái ACTIVE/HIDDEN/DISCONTINUED.

#### B-04: Quản lý danh mục (`B04_Categories`)
- **Cây danh mục** (2 cấp, kéo thả ≡ để sắp xếp): danh mục gốc in đậm có icon emoji, danh mục con thụt vào 32px. Nút Sửa/Xóa mỗi item. Nút "+ Thêm danh mục gốc".
- **Form sửa** (panel phải 380px): tên, slug, chọn danh mục cha, upload ảnh, thứ tự hiển thị, toggle "Hiển thị trên website".

---

### ⚙️ `b05-c01.jsx` — Admin (Users, Khuyến mãi, Cake Admin, AI KB, HRM) + KDS

#### B-05: Quản lý người dùng (`B05_Users`)
- **Bảng người dùng**: ảnh, tên, email, tag Role (ADMIN/BRANCH_MANAGER/MEMBER/KITCHEN_STAFF/HR_MANAGER), chi nhánh, tag trạng thái (ACTIVE màu xanh / LOCKED màu đỏ), ngày tạo.
- Nút hành động: Chi tiết / Sửa role / Khóa-Mở / Reset mật khẩu.
- Bộ lọc theo tên/email, Role, Trạng thái.

#### B-06: Khuyến mãi & Voucher (`B06_Promos`)
- **Bảng voucher**: mã (mono), loại (% / Cố định VNĐ), giá trị giảm, đơn tối thiểu, HSD, lượt đã dùng / giới hạn, tag trạng thái (ACTIVE/EXPIRED). Nút: ✏ Sửa / 📋 Nhân bản / 🗑 Xóa.
- **Modal tạo voucher**: mã (tự nhập hoặc auto random), loại, giá trị, đơn tối thiểu, giới hạn lượt dùng, áp dụng cho (Tất cả / danh mục / SP cụ thể), ngày bắt đầu + kết thúc.

#### B-07: Cake Builder Admin (`B07_CakeAdmin`)
- **4 tab quản lý**: Templates / Hương vị / Màu sắc / Trang trí.
- **Tab Templates** (hiển thị mặc định): lưới 8 template card (ảnh, tên, loại dịp), mỗi card có nút ✏/🗑 và toggle bật/tắt hiển thị. Nút "+ Upload template mới".
- Các tab còn lại: danh sách đơn giản + thêm/sửa/xóa (ghi chú trong wireframe).

#### B-08: AI Knowledge Base (`B08_AIKB`)
- **Upload khu vực**: drag & drop PDF/DOCX/TXT (max 50MB), nút Browse.
- **Bảng file**: tên, loại, kích thước, ngày upload, tag trạng thái indexing (Hoàn thành ✓ / Đang xử lý ⋯ / Lỗi ✗). Nút Xem/Xóa.
- **Bảng logs hội thoại**: session ID ẩn danh, thời gian, số tin nhắn, nút "Xem log".

#### B-09: HRM (`B09_HRM`)
- **4 tab**: Nhân viên / Hợp đồng / Chấm công / Lương.
- **Banner cảnh báo** vàng: X hợp đồng sắp hết hạn trong 30 ngày.
- **Bảng nhân viên**: ảnh, tên, mã NV, vị trí, chi nhánh, SĐT, tag trạng thái (ACTIVE/ON_LEAVE). Nút Xem/Sửa. Nút "+ Thêm nhân viên".
- **Bảng hợp đồng**: nhân viên, loại HĐ, ngày ký, ngày hết hạn, lương, trạng thái. **Hợp đồng sắp hết hạn ≤ 30 ngày → row highlight vàng** + tag "SẮP HẾT".

#### C-01: KDS — Kitchen Display System (`C01_KDS`)
- **Giao diện tối** (dark mode), font tối thiểu 24px toàn màn hình.
- **Topbar**: logo, tên chi nhánh, đồng hồ realtime, tên Kitchen Staff đang đăng nhập.
- **Toast thông báo**: banner vàng nổi "🔔 ĐƠN MỚI #HTH-XXX" (5 giây + âm thanh beep).
- **3 cột Kanban**:
  - **CHỜ LÀM** (đỏ): hiển thị đơn mới nhận — card có mã đơn, giờ đặt, đồng hồ đếm tăng dần (timer đỏ nếu > 10 phút), loại đơn, danh sách món, ghi chú màu vàng, nút **"NHẬN ĐƠN"** vàng. Card mới nhất có glow animation 5 giây.
  - **ĐANG LÀM** (cam): đơn đang bếp xử lý — tương tự, nút **"HOÀN THÀNH"** xanh.
  - **CHỜ GIAO** (xanh): đơn đã xong, chờ shipper — không có nút (Branch Manager xử lý tiếp từ Web Admin).
- Mỗi card hiển thị: mã đơn (lớn, mono), giờ, timer, loại đơn (tag), danh sách món (font lớn 20px), ghi chú khách hàng (vàng).

---

### 🧩 Thành phần dùng chung

| File | Nội dung |
|------|----------|
| `wf-primitives.jsx` | `Btn`, `Inp`, `Tag`, `Stars`, `Img`, `FR` (functional requirement ref), `Note`, `Bracket`, `CustomerHeader`, `CustomerFooter`, `ChatbotFab`, `AdminSidebar` |
| `wireframe.css` | Các class CSS tạo style "bản vẽ tay" (sketchy/low-fi) tone xám: `.wf`, `.pcard`, `.box`, `.tbl`, `.stepper`, `.kcol`, `.kcard`, `.kcard-new`, `.kcard-late`, `.wf-dark`... |

---

*HTHFood - Kỳ thực tập IOC (Tháng 05/2026)*