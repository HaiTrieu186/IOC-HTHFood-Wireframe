// B-05..B-09 Admin screens + C-01 KDS
/* eslint-disable */
import React from 'react';
import { Img, FR, Note, Bracket, Stars, Tag, Btn, Inp, CustomerHeader, CustomerFooter, ChatbotFab, AdminSidebar } from './wf-primitives';

// ──────────── B-05 USERS ────────────
const B05_Users = () => (
  <div className="wf" style={{ display: "flex", minHeight: 800 }}>
    <AdminSidebar active="Người dùng" />
    <div style={{ flex: 1, padding: 32 }}>
      <h1 className="h1" style={{ fontSize: 28 }}>Quản lý người dùng</h1>
      <div className="box" style={{ padding: 16, marginTop: 16 }}>
        <div className="row">
          <Inp placeholder="🔍 Search tên/email" w={260} />
          <Inp value="Role: Tất cả ▼" w={180} />
          <Inp value="Trạng thái: Tất cả ▼" w={180} />
        </div>
      </div>
      <div className="box" style={{ marginTop: 16, padding: 0 }}>
        <table className="tbl">
          <thead><tr><th>Ảnh</th><th>Tên</th><th>Email</th><th>Role</th><th>Chi nhánh</th><th>Trạng thái</th><th>Ngày tạo</th><th>Hành động</th></tr></thead>
          <tbody>
            {[
              { n: "Nguyễn Admin", e: "admin@hth.com", r: "ADMIN", b: "—", s: "ACTIVE" },
              { n: "Trần Quản lý Q1", e: "q1@hth.com", r: "BRANCH_MANAGER", b: "Q.1", s: "ACTIVE" },
              { n: "Lê Khách A", e: "user1@gmail.com", r: "MEMBER", b: "—", s: "ACTIVE" },
              { n: "Phạm Bếp", e: "kitchen.q1@hth.com", r: "KITCHEN_STAFF", b: "Q.1", s: "ACTIVE" },
              { n: "Hoàng HR", e: "hr@hth.com", r: "HR_MANAGER", b: "—", s: "ACTIVE" },
              { n: "Đặng Khách B", e: "user2@gmail.com", r: "MEMBER", b: "—", s: "LOCKED" },
            ].map((u, i) => (
              <tr key={i}>
                <td><Img w={36} h={36} label="40" /></td>
                <td style={{ fontWeight: 600 }}>{u.n}</td>
                <td className="tiny">{u.e}</td>
                <td><Tag kind={u.r === "ADMIN" ? "solid" : u.r === "BRANCH_MANAGER" ? "warn" : u.r === "MEMBER" ? "" : "info"}>{u.r}</Tag></td>
                <td>{u.b}</td>
                <td><Tag kind={u.s === "ACTIVE" ? "ok" : "danger"}>{u.s} <FR id="BR-USER-008" /></Tag></td>
                <td className="tiny muted">12/03/2026</td>
                <td>
                  <div className="row" style={{ gap: 4 }}>
                    <Btn size="sm">Chi tiết</Btn>
                    <Btn size="sm">Sửa role</Btn>
                    <Btn size="sm">{u.s === "LOCKED" ? "Mở" : "Khóa"}</Btn>
                    <Btn size="sm">Reset MK</Btn>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// ──────────── B-06 PROMOTIONS ────────────
const B06_Promos = () => (
  <div className="wf" style={{ display: "flex", minHeight: 1000 }}>
    <AdminSidebar active="Khuyến mãi" />
    <div style={{ flex: 1, padding: 32 }}>
      <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
        <h1 className="h1" style={{ fontSize: 28 }}>Khuyến mãi & Voucher</h1>
        <Btn kind="primary">+ Tạo voucher</Btn>
      </div>

      <div className="box" style={{ marginTop: 16, padding: 0 }}>
        <table className="tbl">
          <thead><tr><th>Mã</th><th>Loại</th><th>Giảm</th><th>Đơn tối thiểu</th><th>HSD</th><th>Đã dùng / Giới hạn</th><th>Trạng thái</th><th>Actions</th></tr></thead>
          <tbody>
            {[
              { c: "HELLO50", t: "Cố định", g: "50.000đ", m: "200k", e: "31/12/2026", u: "120/500", s: "ACTIVE" },
              { c: "BIRTHDAY20", t: "%", g: "20%", m: "150k", e: "30/06/2026", u: "45/200", s: "ACTIVE" },
              { c: "FREESHIP", t: "Cố định", g: "30.000đ ship", m: "200k", e: "—", u: "—", s: "ACTIVE" },
              { c: "TET2026", t: "%", g: "30%", m: "300k", e: "10/02/2026", u: "500/500", s: "EXPIRED" },
            ].map((v, i) => (
              <tr key={i}>
                <td className="mono" style={{ fontWeight: 700 }}>{v.c}</td>
                <td>{v.t}</td>
                <td style={{ fontWeight: 700 }}>{v.g}</td>
                <td>{v.m}</td>
                <td className="tiny">{v.e}</td>
                <td>{v.u}</td>
                <td><Tag kind={v.s === "ACTIVE" ? "ok" : ""}>{v.s}</Tag></td>
                <td><div className="row" style={{ gap: 4 }}><Btn size="sm">✏</Btn><Btn size="sm">📋</Btn><Btn size="sm">🗑</Btn></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="box" style={{ marginTop: 24, padding: 16, background: "var(--w-bg-2)" }}>
        <div className="hand">[Modal Tạo voucher — preview]</div>
        <div className="box" style={{ padding: 24, marginTop: 8, background: "var(--w-bg)" }}>
          <div className="h2">Tạo voucher mới</div>
          <div className="grid-2" style={{ gap: 16, marginTop: 16 }}>
            <div><div className="tiny" style={{ fontWeight: 600 }}>Mã voucher *</div><Inp placeholder="ví dụ HELLO50" suffix="🎲 auto" /></div>
            <div>
              <div className="tiny" style={{ fontWeight: 600 }}>Loại *</div>
              <div className="row" style={{ marginTop: 4 }}>
                <Tag kind="solid">% Phần trăm</Tag>
                <Tag>Cố định VNĐ</Tag>
              </div>
            </div>
            <div><div className="tiny" style={{ fontWeight: 600 }}>Giá trị giảm *</div><Inp placeholder="20" suffix="%" /></div>
            <div><div className="tiny" style={{ fontWeight: 600 }}>Đơn hàng tối thiểu</div><Inp placeholder="150.000đ" /></div>
            <div><div className="tiny" style={{ fontWeight: 600 }}>Giới hạn lượt dùng</div><Inp placeholder="500" /></div>
            <div>
              <div className="tiny" style={{ fontWeight: 600 }}>Áp dụng cho</div>
              <Inp value="Tất cả ▼" />
            </div>
            <div><div className="tiny" style={{ fontWeight: 600 }}>Ngày bắt đầu *</div><Inp value="01/06/2026" /></div>
            <div><div className="tiny" style={{ fontWeight: 600 }}>Ngày kết thúc *</div><Inp value="30/06/2026" /></div>
          </div>
          <div className="row" style={{ marginTop: 16, justifyContent: "flex-end" }}>
            <Btn ghost>Hủy</Btn>
            <Btn kind="primary">Lưu voucher</Btn>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ──────────── B-07 CAKE ADMIN ────────────
const B07_CakeAdmin = () => (
  <div className="wf" style={{ display: "flex", minHeight: 800 }}>
    <AdminSidebar active="Cake Builder" />
    <div style={{ flex: 1, padding: 32 }}>
      <h1 className="h1" style={{ fontSize: 28 }}>Cake Builder Admin <FR id="FR-CAKE-008" /></h1>
      <div className="row" style={{ marginTop: 16 }}>
        {["Templates", "Hương vị", "Màu sắc", "Trang trí"].map((t, i) => (
          <Tag key={t} kind={i === 0 ? "solid" : ""}>{t}</Tag>
        ))}
      </div>

      <div className="box" style={{ padding: 16, marginTop: 16 }}>
        <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
          <div className="h3">Templates</div>
          <Btn kind="primary">+ Upload template mới</Btn>
        </div>
        <div className="grid-4" style={{ gap: 16, marginTop: 16 }}>
          {[
            ["Hồng pastel sinh nhật", "Sinh nhật", true],
            ["Chibi mascot", "Sinh nhật", true],
            ["Đám cưới 2 tầng", "Đám cưới", true],
            ["Kỷ niệm vintage", "Kỷ niệm", true],
            ["Bánh con vật", "Sinh nhật", false],
            ["Cake trái cây", "Khác", true],
            ["Bánh chữ thư pháp", "Khác", true],
            ["Wedding gold", "Đám cưới", false],
          ].map(([n, o, on], i) => (
            <div key={i} className="box" style={{ padding: 8 }}>
              <Img w={"100%"} h={140} label="160×160" />
              <div style={{ fontWeight: 700, fontSize: 13, marginTop: 6 }}>{n}</div>
              <div className="tiny muted">{o}</div>
              <div className="row" style={{ marginTop: 8, justifyContent: "space-between", alignItems: "center" }}>
                <div className="row" style={{ gap: 4 }}>
                  <Btn size="sm">✏</Btn>
                  <Btn size="sm">🗑</Btn>
                </div>
                <div style={{ width: 36, height: 20, borderRadius: 999, background: on ? "var(--w-text)" : "var(--w-bg-3)", border: "1.5px solid var(--w-text)", position: "relative" }}>
                  <div style={{ position: "absolute", top: 1, [on ? "right" : "left"]: 1, width: 14, height: 14, borderRadius: 999, background: "white" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hand tiny" style={{ marginTop: 12 }}>các tab khác (Hương vị, Màu, Trang trí): simple list + add/edit/delete</div>
    </div>
  </div>
);

// ──────────── B-08 AI KNOWLEDGE BASE ────────────
const B08_AIKB = () => (
  <div className="wf" style={{ display: "flex", minHeight: 900 }}>
    <AdminSidebar active="AI Knowledge" />
    <div style={{ flex: 1, padding: 32 }}>
      <h1 className="h1" style={{ fontSize: 28 }}>AI Knowledge Base <FR id="FR-CHAT-002" /></h1>

      <div className="box box-soft" style={{ padding: 32, marginTop: 16, textAlign: "center", borderStyle: "dashed" }}>
        <div style={{ fontSize: 36 }}>📂</div>
        <div className="h3" style={{ marginTop: 8 }}>Kéo thả file PDF, DOCX, TXT (max 50MB)</div>
        <Btn kind="primary" style={{ marginTop: 12 }}>Browse files</Btn>
      </div>

      <div className="box" style={{ marginTop: 16, padding: 0 }}>
        <table className="tbl">
          <thead><tr><th>Tên file</th><th>Loại</th><th>Kích thước</th><th>Ngày upload</th><th>Trạng thái indexing</th><th>Actions</th></tr></thead>
          <tbody>
            {[
              ["menu-2026.pdf", "PDF", "2.4 MB", "20/05/2026", "ok", "Hoàn thành ✓"],
              ["chinh-sach-giao-hang.docx", "DOCX", "180 KB", "18/05/2026", "ok", "Hoàn thành ✓"],
              ["faq-khach-hang.txt", "TXT", "32 KB", "22/05/2026", "warn", "Đang xử lý ⋯"],
              ["thong-tin-loi.pdf", "PDF", "1.1 MB", "21/05/2026", "danger", "Lỗi ✗"],
            ].map((r, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 600 }}>{r[0]}</td>
                <td>{r[1]}</td>
                <td>{r[2]}</td>
                <td>{r[3]}</td>
                <td><Tag kind={r[4]}>{r[5]} <FR id="FR-CHAT-002" /></Tag></td>
                <td><div className="row" style={{ gap: 4 }}><Btn size="sm">Xem</Btn><Btn size="sm">Xóa</Btn></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="h2" style={{ marginTop: 32 }}>Logs hội thoại <FR id="FR-CHAT-007" /></div>
      <div className="hand tiny">Guest sessions ẩn danh</div>
      <div className="box" style={{ marginTop: 12, padding: 0 }}>
        <table className="tbl">
          <thead><tr><th>Session</th><th>Thời gian</th><th>Số tin nhắn</th><th>Action</th></tr></thead>
          <tbody>
            {[
              ["sess_8f3a...", "22/05/2026 09:42", 12],
              ["sess_x12k...", "22/05/2026 09:31", 4],
              ["sess_p9...", "22/05/2026 09:15", 18],
              ["sess_2qq...", "21/05/2026 22:08", 6],
            ].map((r, i) => (
              <tr key={i}><td className="mono tiny">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td><Btn size="sm">Xem log</Btn></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// ──────────── B-09 HRM ────────────
const B09_HRM = () => (
  <div className="wf" style={{ display: "flex", minHeight: 900 }}>
    <AdminSidebar active="HRM" />
    <div style={{ flex: 1, padding: 32 }}>
      <h1 className="h1" style={{ fontSize: 28 }}>HRM <FR id="LLD-12_HRM" /></h1>

      <div className="row" style={{ marginTop: 16 }}>
        {["Nhân viên", "Hợp đồng", "Chấm công", "Lương"].map((t, i) => (
          <Tag key={t} kind={i === 0 ? "solid" : ""}>{t}</Tag>
        ))}
      </div>

      <div className="box" style={{ padding: 12, marginTop: 16, background: "#FEF3C7", borderColor: "var(--w-warn)" }}>
        <div style={{ fontWeight: 700, color: "var(--w-warn)" }}>⚠ 2 hợp đồng sắp hết hạn trong 30 ngày</div>
      </div>

      <div className="row" style={{ justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
        <div className="h2">Nhân viên</div>
        <Btn kind="primary">+ Thêm nhân viên</Btn>
      </div>

      <div className="box" style={{ marginTop: 12, padding: 0 }}>
        <table className="tbl">
          <thead><tr><th>Ảnh</th><th>Tên</th><th>Mã NV</th><th>Vị trí</th><th>Chi nhánh</th><th>SĐT</th><th>Trạng thái</th><th>Actions</th></tr></thead>
          <tbody>
            {[
              ["Trần Văn Bếp", "NV001", "Bếp chính", "Q.1", "0901xxx", "ACTIVE"],
              ["Lê Thị Phục vụ", "NV002", "Phục vụ", "Q.1", "0902xxx", "ACTIVE"],
              ["Phạm Quản lý", "NV003", "Quản lý CN", "Q.3", "0903xxx", "ACTIVE"],
              ["Nguyễn Shipper", "NV004", "Giao hàng", "Q.1", "0904xxx", "ON_LEAVE"],
            ].map((r, i) => (
              <tr key={i}>
                <td><Img w={36} h={36} label="40" /></td>
                <td style={{ fontWeight: 600 }}>{r[0]}</td>
                <td className="mono tiny">{r[1]}</td>
                <td>{r[2]}</td>
                <td>{r[3]}</td>
                <td className="tiny">{r[4]}</td>
                <td><Tag kind={r[5] === "ACTIVE" ? "ok" : "warn"}>{r[5]}</Tag></td>
                <td><div className="row" style={{ gap: 4 }}><Btn size="sm">👁</Btn><Btn size="sm">✏</Btn></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="h2" style={{ marginTop: 32 }}>Hợp đồng</div>
      <div className="box" style={{ marginTop: 12, padding: 0 }}>
        <table className="tbl">
          <thead><tr><th>Nhân viên</th><th>Loại HĐ</th><th>Ngày ký</th><th>Ngày hết hạn</th><th>Lương</th><th>Trạng thái</th></tr></thead>
          <tbody>
            <tr><td>Trần Văn Bếp</td><td>Không xác định thời hạn</td><td>01/01/2024</td><td>—</td><td>15.000.000đ</td><td><Tag kind="ok">ACTIVE</Tag></td></tr>
            <tr className="row-warn"><td>Lê Thị Phục vụ</td><td>1 năm</td><td>15/06/2025</td><td><strong>15/06/2026</strong> ⚠</td><td>8.000.000đ</td><td><Tag kind="warn">SẮP HẾT</Tag></td></tr>
            <tr className="row-warn"><td>Phạm Quản lý</td><td>2 năm</td><td>01/07/2024</td><td><strong>01/07/2026</strong> ⚠</td><td>20.000.000đ</td><td><Tag kind="warn">SẮP HẾT</Tag></td></tr>
            <tr><td>Nguyễn Shipper</td><td>1 năm</td><td>10/03/2026</td><td>10/03/2027</td><td>7.000.000đ</td><td><Tag kind="ok">ACTIVE</Tag></td></tr>
          </tbody>
        </table>
      </div>
      <Note>Hết hạn trong 30 ngày → row highlight vàng (SRS 3.7)</Note>
    </div>
  </div>
);

// ──────────── C-01 KDS ────────────
const C01_KDS = () => (
  <div className="wf wf-dark" style={{ minHeight: 900 }}>
    {/* Top bar */}
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 32px", borderBottom: "1.5px solid #444", background: "#0F0F0F" }}>
      <div className="row" style={{ alignItems: "center", gap: 12 }}>
        <Img w={36} h={36} label="L" />
        <div className="h2" style={{ color: "#F5F5F5", fontSize: 20 }}>HTHFood KDS</div>
      </div>
      <div className="row" style={{ alignItems: "center", gap: 24, color: "#E5E5E5" }}>
        <div><strong>Chi nhánh Quận 1</strong></div>
        <div className="mono" style={{ fontWeight: 700, fontSize: 18 }}>09:47 SA</div>
        <div className="hand tiny" style={{ color: "#999" }}>realtime clock</div>
      </div>
      <div className="row" style={{ alignItems: "center", gap: 12 }}>
        <div style={{ color: "#E5E5E5" }}>Kitchen Staff: <strong>Trần B</strong></div>
        <span style={{ padding: "6px 12px", border: "1.5px solid #555", borderRadius: 4, color: "#E5E5E5", fontSize: 12 }}>Đăng xuất</span>
      </div>
    </div>

    {/* Notification toast */}
    <div style={{ position: "relative", padding: 24 }}>
      <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", background: "#FBBF24", color: "#1A1A1A", padding: "10px 20px", borderRadius: 6, fontWeight: 800, boxShadow: "0 4px 16px rgba(0,0,0,0.4)", zIndex: 5 }}>
        🔔 ĐƠN MỚI #HTH-043 <span className="hand tiny" style={{ color: "#1A1A1A", marginLeft: 8 }}>(5 giây · âm thanh beep) <FR id="FR-KDS-005" /></span>
      </div>

      {/* 3 columns kanban */}
      <div className="grid-3" style={{ gap: 16, marginTop: 56 }}>
        {/* CHỜ LÀM */}
        <div className="kcol">
          <div className="row" style={{ justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontWeight: 800, fontSize: 24, color: "#F5F5F5" }}>CHỜ LÀM</div>
            <div style={{ background: "#EF4444", color: "white", padding: "4px 12px", borderRadius: 999, fontWeight: 800 }}>3</div>
          </div>
          <FR id="FR-KDS-001" />

          {/* NEW card */}
          <div className="kcard kcard-new" style={{ marginTop: 8 }}>
            <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
              <div className="mono" style={{ fontWeight: 800, fontSize: 22 }}>#HTH-043</div>
              <div style={{ background: "#FBBF24", color: "#1A1A1A", padding: "2px 8px", borderRadius: 4, fontWeight: 800, fontSize: 12 }}>MỚI!</div>
            </div>
            <div className="row" style={{ marginTop: 8, alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: 16 }}>09:46 SA</div>
              <Tag kind="info">GIAO HÀNG</Tag>
            </div>
            <div className="mono" style={{ fontSize: 24, fontWeight: 800, marginTop: 8, color: "#FBBF24" }}>00:01:12</div>
            <hr style={{ border: 0, borderTop: "1px solid #555", margin: "12px 0" }} />
            <div style={{ fontSize: 20, lineHeight: 1.4 }}>
              <div>• Bánh kem dâu 6 inch × 1</div>
              <div>• Croissant hạnh nhân × 2</div>
            </div>
            <div style={{ background: "#FFC107", color: "#1A1A1A", padding: "8px 14px", borderRadius: 999, fontWeight: 800, marginTop: 16, textAlign: "center", fontSize: 18 }}>NHẬN ĐƠN</div>
            <div className="hand tiny" style={{ color: "#999", marginTop: 4 }}>glow animation 5s <FR id="FR-KDS-005" /></div>
          </div>

          {/* Card normal */}
          <div className="kcard">
            <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
              <div className="mono" style={{ fontWeight: 800, fontSize: 22 }}>#HTH-042</div>
              <Tag kind="info">DI-IN Bàn 5</Tag>
            </div>
            <div style={{ fontSize: 16, marginTop: 4 }}>09:32 SA</div>
            <div className="mono" style={{ fontSize: 24, fontWeight: 800, marginTop: 8 }}>00:15:22</div>
            <hr style={{ border: 0, borderTop: "1px solid #555", margin: "12px 0" }} />
            <div style={{ fontSize: 20, lineHeight: 1.4 }}>
              <div>• Bánh kem dâu 6 inch × 1</div>
              <div style={{ fontSize: 16, color: "#FBBF24", marginLeft: 16 }}>[Note: ít ngọt]</div>
              <div>• Trà sữa matcha L × 2</div>
            </div>
            <div style={{ background: "#FFC107", color: "#1A1A1A", padding: "8px 14px", borderRadius: 999, fontWeight: 800, marginTop: 16, textAlign: "center", fontSize: 18 }}>NHẬN ĐƠN <FR id="FR-KDS-002" /></div>
          </div>

          {/* Late card */}
          <div className="kcard kcard-late">
            <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
              <div className="mono" style={{ fontWeight: 800, fontSize: 22 }}>#HTH-039</div>
              <Tag kind="info">GIAO HÀNG</Tag>
            </div>
            <div style={{ fontSize: 16, marginTop: 4 }}>09:18 SA</div>
            <div className="mono" style={{ fontSize: 24, fontWeight: 800, marginTop: 8, color: "#EF4444" }}>00:29:08</div>
            <div className="hand tiny" style={{ color: "#EF4444" }}>&gt; 10 phút · timer + border đỏ <FR id="FR-KDS-006" /></div>
            <hr style={{ border: 0, borderTop: "1px solid #555", margin: "12px 0" }} />
            <div style={{ fontSize: 20, lineHeight: 1.4 }}>
              <div>• Combo trà sữa × 2</div>
            </div>
            <div style={{ background: "#FFC107", color: "#1A1A1A", padding: "8px 14px", borderRadius: 999, fontWeight: 800, marginTop: 16, textAlign: "center", fontSize: 18 }}>NHẬN ĐƠN</div>
          </div>
        </div>

        {/* ĐANG LÀM */}
        <div className="kcol">
          <div className="row" style={{ justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontWeight: 800, fontSize: 24, color: "#F5F5F5" }}>ĐANG LÀM</div>
            <div style={{ background: "#F97316", color: "white", padding: "4px 12px", borderRadius: 999, fontWeight: 800 }}>2</div>
          </div>
          <FR id="FR-KDS-002" />
          {[
            { c: "#HTH-041", t: "09:25 SA", el: "00:22:00", type: "TAKEAWAY", items: ["Bánh kem chocolate 8 inch × 1", "Cupcake vanilla × 3"] },
            { c: "#HTH-040", t: "09:20 SA", el: "00:27:30", type: "GIAO HÀNG", items: ["Bánh flan caramel × 4", "Cà phê đen × 2"] },
          ].map((o, i) => (
            <div key={i} className="kcard">
              <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
                <div className="mono" style={{ fontWeight: 800, fontSize: 22 }}>{o.c}</div>
                <Tag kind="info">{o.type}</Tag>
              </div>
              <div style={{ fontSize: 16, marginTop: 4 }}>{o.t}</div>
              <div className="mono" style={{ fontSize: 24, fontWeight: 800, marginTop: 8 }}>{o.el}</div>
              <hr style={{ border: 0, borderTop: "1px solid #555", margin: "12px 0" }} />
              <div style={{ fontSize: 20, lineHeight: 1.4 }}>
                {o.items.map((x, j) => <div key={j}>• {x}</div>)}
              </div>
              <div style={{ background: "#22C55E", color: "#fff", padding: "8px 14px", borderRadius: 999, fontWeight: 800, marginTop: 16, textAlign: "center", fontSize: 18 }}>HOÀN THÀNH <FR id="FR-KDS-003" /></div>
            </div>
          ))}
        </div>

        {/* CHỜ GIAO */}
        <div className="kcol">
          <div className="row" style={{ justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontWeight: 800, fontSize: 24, color: "#F5F5F5" }}>CHỜ GIAO</div>
            <div style={{ background: "#3B82F6", color: "white", padding: "4px 12px", borderRadius: 999, fontWeight: 800 }}>1</div>
          </div>
          <FR id="FR-KDS-003" />
          <div className="kcard">
            <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
              <div className="mono" style={{ fontWeight: 800, fontSize: 22 }}>#HTH-038</div>
              <Tag kind="info">GIAO HÀNG</Tag>
            </div>
            <div style={{ fontSize: 16, marginTop: 4 }}>09:00 SA</div>
            <div className="mono" style={{ fontSize: 24, fontWeight: 800, marginTop: 8 }}>00:47:00</div>
            <hr style={{ border: 0, borderTop: "1px solid #555", margin: "12px 0" }} />
            <div style={{ fontSize: 20, lineHeight: 1.4 }}>
              <div>• Bánh sinh nhật custom × 1</div>
              <div>• Trà đào × 3</div>
            </div>
            <div className="hand tiny" style={{ color: "#999", marginTop: 16 }}>Branch Manager xử lý tiếp từ Web Admin (không có button)</div>
          </div>
        </div>
      </div>

      <div className="hand tiny" style={{ marginTop: 24, color: "#888", textAlign: "center" }}>
        Font minimum 24px toàn KDS <FR id="FR-KDS-001" /> · Token TTL 30 ngày, auto-refresh <FR id="FR-KDS-007" />
      </div>
    </div>
  </div>
);

export { B05_Users, B06_Promos, B07_CakeAdmin, B08_AIKB, B09_HRM, C01_KDS };
