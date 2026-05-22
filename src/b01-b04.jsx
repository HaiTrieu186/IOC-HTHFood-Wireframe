// B-01..B-04 Admin screens
/* eslint-disable */
import React from 'react';
import { Img, FR, Note, Bracket, Stars, Tag, Btn, Inp, CustomerHeader, CustomerFooter, ChatbotFab, AdminSidebar } from './wf-primitives';

// ──────────── B-01 DASHBOARD ────────────
const B01_Dashboard = () => (
  <div className="wf" style={{ display: "flex", minHeight: 1000 }}>
    <AdminSidebar active="Dashboard" />
    <div style={{ flex: 1, padding: 32 }}>
      <FR id="FR-ADMIN-001" />
      <div className="row" style={{ alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
        <h1 className="h1" style={{ fontSize: 28 }}>Dashboard</h1>
        <Inp value="Tuần này ▼" w={160} />
      </div>

      {/* Stats row */}
      <div className="grid-4" style={{ marginTop: 16 }}>
        {[
          { ic: "💰", l: "Doanh thu hôm nay", v: "8.250.000đ", d: "↑12% vs hôm qua", ok: true },
          { ic: "📋", l: "Đơn hàng", v: "47", d: "↑5 so với hôm qua", ok: true },
          { ic: "🆕", l: "Đơn mới (NEW)", v: "3", d: "cần xử lý", danger: true },
          { ic: "👥", l: "Khách mới", v: "12", d: "+4 vs hôm qua", ok: true },
        ].map((s, i) => (
          <div key={i} className="box" style={{ padding: 16 }}>
            <div className="row" style={{ alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 24 }}>{s.ic}</span>
              {s.danger && <Tag kind="danger">!</Tag>}
            </div>
            <div className="tiny muted" style={{ marginTop: 8 }}>{s.l}</div>
            <div className="h1" style={{ fontSize: 26, marginTop: 4 }}>{s.v}</div>
            <div className="tiny" style={{ color: s.ok ? "var(--w-ok)" : "var(--w-danger)", marginTop: 4 }}>{s.d}</div>
          </div>
        ))}
      </div>

      {/* Alerts */}
      <div className="col" style={{ marginTop: 16, gap: 8 }}>
        <div className="box" style={{ padding: 12, background: "#FEE2E2", borderColor: "var(--w-danger)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 700, color: "var(--w-danger)" }}>⚠ 3 đơn hàng DEAD ORDER chưa xử lý <FR id="BR-ORD-005" /></div>
          <Btn size="sm">Xem ngay →</Btn>
        </div>
        <div className="box" style={{ padding: 12, background: "#FEF3C7", borderColor: "var(--w-warn)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 700, color: "var(--w-warn)" }}>⚠ 5 sản phẩm sắp hết hàng</div>
          <Btn size="sm">Xem ngay →</Btn>
        </div>
      </div>

      {/* Charts row */}
      <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
        <div className="box" style={{ flex: 1.5, padding: 16 }}>
          <div className="h3">Doanh thu 7 ngày</div>
          <div style={{ height: 200, marginTop: 12, position: "relative", borderLeft: "1.5px solid var(--w-text)", borderBottom: "1.5px solid var(--w-text)", display: "flex", alignItems: "flex-end", justifyContent: "space-around", padding: "0 12px" }}>
            {[60, 80, 50, 90, 70, 100, 85].map((h, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ width: 28, height: `${h}%`, background: i === 5 ? "var(--w-text)" : "var(--w-text-2)" }} />
                <div className="tiny muted">{["T2", "T3", "T4", "T5", "T6", "T7", "CN"][i]}</div>
              </div>
            ))}
            <span className="hand" style={{ position: "absolute", top: 8, right: 12 }}>line chart (placeholder bar)</span>
          </div>
        </div>
        <div className="box" style={{ flex: 1, padding: 16 }}>
          <div className="h3">Đơn theo trạng thái</div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 12 }}>
            <div style={{ width: 140, height: 140, borderRadius: 999, background: "conic-gradient(var(--w-text) 0 40%, var(--w-text-2) 40% 70%, var(--w-mid) 70% 90%, var(--w-line) 90% 100%)" }} />
            <div className="col" style={{ gap: 6, fontSize: 12 }}>
              <div><span className="dot" /> COMPLETED · 40%</div>
              <div><span className="dot" style={{ background: "var(--w-text-2)" }} /> PREPARING · 30%</div>
              <div><span className="dot" style={{ background: "var(--w-mid)" }} /> READY · 20%</div>
              <div><span className="dot" style={{ background: "var(--w-line)" }} /> CANCELLED · 10%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tables */}
      <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
        <div className="box" style={{ flex: 1, padding: 16 }}>
          <div className="h3">Top 5 sản phẩm bán chạy</div>
          <table className="tbl" style={{ marginTop: 8 }}>
            <thead><tr><th>STT</th><th>Tên</th><th>Đã bán</th><th>Doanh thu</th></tr></thead>
            <tbody>
              {[
                ["1", "Bánh kem dâu 6 inch", "128", "23.680.000đ"],
                ["2", "Trà sữa matcha L", "240", "13.200.000đ"],
                ["3", "Croissant hạnh nhân", "180", "8.100.000đ"],
                ["4", "Bánh flan caramel", "88", "3.080.000đ"],
                ["5", "Combo trà sữa + bánh", "62", "11.160.000đ"],
              ].map((r, i) => (
                <tr key={i}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td style={{ fontWeight: 700 }}>{r[3]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="box" style={{ flex: 1, padding: 16 }}>
          <div className="h3">Đơn hàng gần nhất</div>
          <table className="tbl" style={{ marginTop: 8 }}>
            <thead><tr><th>Mã</th><th>Khách</th><th>Trạng thái</th><th>Tiền</th></tr></thead>
            <tbody>
              {[
                ["...00042", "Nguyễn A", "NEW", "ok"],
                ["...00041", "Trần B", "PREPARING", "warn"],
                ["...00040", "Lê C", "READY", "info"],
                ["...00039", "Phạm D", "COMPLETED", "ok"],
              ].map((r, i) => (
                <tr key={i}><td className="mono tiny">{r[0]}</td><td>{r[1]}</td><td><Tag kind={r[3]}>{r[2]}</Tag></td><td style={{ fontWeight: 700 }}>185k</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

// ──────────── B-02 ORDERS ────────────
const B02_Orders = () => (
  <div className="wf" style={{ display: "flex", minHeight: 1000 }}>
    <AdminSidebar active="Đơn hàng" />
    <div style={{ flex: 1, padding: 32 }}>
      <h1 className="h1" style={{ fontSize: 28 }}>Quản lý đơn hàng</h1>

      {/* Filters */}
      <div className="box" style={{ padding: 16, marginTop: 16 }}>
        <div className="row" style={{ alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <Inp placeholder="🔍 Tìm mã đơn..." w={220} />
          <Inp value="Chi nhánh: Tất cả ▼" w={160} />
          <Inp value="Trạng thái: Tất cả ▼" w={160} />
          <Inp value="Loại đơn: Tất cả ▼" w={140} />
          <Inp placeholder="Từ ngày" w={120} />
          <Inp placeholder="Đến ngày" w={120} />
          <Btn>Lọc</Btn>
          <Btn ghost>Reset</Btn>
        </div>
      </div>

      <div className="box" style={{ marginTop: 16, padding: 0, overflow: "hidden" }}>
        <table className="tbl">
          <thead>
            <tr>
              <th>☐</th><th>Mã đơn</th><th>Khách hàng</th><th>Chi nhánh</th><th>Loại</th>
              <th>Sản phẩm</th><th>Tổng</th><th>TT Thanh toán</th><th>Trạng thái</th><th>Thời gian</th><th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {[
              { c: "HTH-...00042", n: "Nguyễn A", br: "Q.1", t: "Delivery", p: "3 món", tot: "505k", pay: "MoMo ✓", st: "NEW", color: "info" },
              { c: "HTH-...00041", n: "Trần B", br: "Q.3", t: "Takeaway", p: "2 món", tot: "240k", pay: "COD", st: "PREPARING", color: "warn" },
              { c: "HTH-...00040", n: "Lê C", br: "Q.1", t: "Delivery", p: "5 món", tot: "680k", pay: "COD", st: "READY", color: "info", dead: true },
              { c: "HTH-...00039", n: "Phạm D", br: "Q.7", t: "Dine-in", p: "1 món", tot: "85k", pay: "COD ✓", st: "COMPLETED", color: "ok" },
              { c: "HTH-...00038", n: "Hoàng E", br: "Q.1", t: "Delivery", p: "2 món", tot: "165k", pay: "—", st: "CANCELLED", color: "" },
            ].map((o, i) => (
              <tr key={i} className={o.dead ? "row-danger" : ""}>
                <td>☐</td>
                <td className="mono tiny" style={{ fontWeight: 700 }}>{o.c}{o.dead && " ⚠"}</td>
                <td>{o.n}</td>
                <td>{o.br}</td>
                <td>{o.t}</td>
                <td>{o.p}</td>
                <td style={{ fontWeight: 700 }}>{o.tot}</td>
                <td>{o.pay}</td>
                <td><Tag kind={o.color}>{o.st}</Tag></td>
                <td className="tiny muted">9 phút trước</td>
                <td>
                  <div className="row" style={{ gap: 4 }}>
                    <Btn size="sm">👁</Btn>
                    <Btn size="sm">✏</Btn>
                    <Btn size="sm">🚫</Btn>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="hand tiny" style={{ marginTop: 8 }}>Dead Order row: highlight đỏ + icon ⚠ <FR id="BR-ORD-005" /></div>

      {/* Modal preview */}
      <div className="box" style={{ marginTop: 24, padding: 16, background: "var(--w-bg-2)" }}>
        <div className="hand">[Modal Chi tiết đơn — preview]</div>
        <div className="box" style={{ padding: 20, marginTop: 8, background: "var(--w-bg)" }}>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="h2">Đơn HTH-...00042</div>
            <Tag kind="info">NEW</Tag>
          </div>
          <hr className="divider" />
          <div className="grid-2" style={{ gap: 16 }}>
            <div>
              <div className="h3">Sản phẩm</div>
              <div className="col tiny" style={{ marginTop: 8, gap: 4 }}>
                <div>• Bánh kem dâu 6 inch × 1 — 185k</div>
                <div>• Trà sữa matcha L × 2 — 110k</div>
                <div>• Croissant hạnh nhân × 3 — 135k</div>
              </div>
            </div>
            <div>
              <div className="h3">Thông tin khách</div>
              <div className="tiny">Nguyễn A · 0901234567</div>
              <div className="tiny muted">📍 123 Nguyễn Văn A, Q.1</div>
              <div className="tiny muted">💳 MoMo · đã thanh toán</div>
            </div>
          </div>
          <hr className="divider" />
          <div className="row" style={{ gap: 8 }}>
            <Btn kind="primary">Nhận đơn</Btn>
            <Btn>Xác nhận giao</Btn>
            <Btn>Hoàn thành</Btn>
            <Btn ghost>Hủy</Btn>
          </div>
          <div className="hand tiny" style={{ marginTop: 8 }}>buttons hiển thị tùy role</div>
        </div>
      </div>
    </div>
  </div>
);

// ──────────── B-03 PRODUCTS ────────────
const B03_Products = () => (
  <div className="wf" style={{ display: "flex", minHeight: 1200 }}>
    <AdminSidebar active="Sản phẩm" />
    <div style={{ flex: 1, padding: 32 }}>
      <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
        <h1 className="h1" style={{ fontSize: 28 }}>Quản lý sản phẩm</h1>
        <Btn kind="primary">+ Thêm sản phẩm</Btn>
      </div>

      <div className="box" style={{ padding: 16, marginTop: 16 }}>
        <div className="row" style={{ gap: 8 }}>
          <Inp placeholder="🔍 Search" w={220} />
          <Inp value="Danh mục ▼" w={140} />
          <Inp value="Trạng thái ▼" w={140} />
          <Inp value="Tồn kho ▼" w={140} />
        </div>
      </div>

      <div className="box" style={{ marginTop: 16, padding: 0 }}>
        <table className="tbl">
          <thead><tr><th>Ảnh</th><th>Tên</th><th>Danh mục</th><th>Giá gốc</th><th>Giá KM</th><th>Tồn kho</th><th>Trạng thái</th><th>Hành động</th></tr></thead>
          <tbody>
            {[
              { n: "Bánh kem dâu 6 inch", c: "Bánh kem", g: "220k", km: "185k", t: 12, st: "ACTIVE" },
              { n: "Bánh kem chocolate 8 inch", c: "Bánh kem", g: "260k", km: "240k", t: 4, st: "ACTIVE", low: true },
              { n: "Trà sữa matcha", c: "Thức uống", g: "55k", km: "—", t: 200, st: "ACTIVE" },
              { n: "Bánh oreo cũ", c: "Bánh kem", g: "180k", km: "—", t: 0, st: "DISCONTINUED" },
              { n: "Cupcake vanilla", c: "Bánh kem", g: "30k", km: "—", t: 50, st: "HIDDEN" },
            ].map((p, i) => (
              <tr key={i}>
                <td><Img w={40} h={40} label="48" /></td>
                <td style={{ fontWeight: 600 }}>{p.n}</td>
                <td>{p.c}</td>
                <td>{p.g}</td>
                <td>{p.km}</td>
                <td style={{ color: p.low ? "var(--w-danger)" : "var(--w-text)", fontWeight: p.low ? 700 : 500 }}>{p.t}</td>
                <td><Tag kind={p.st === "ACTIVE" ? "ok" : p.st === "HIDDEN" ? "warn" : ""}>{p.st}</Tag></td>
                <td><div className="row" style={{ gap: 4 }}><Btn size="sm">✏</Btn><Btn size="sm">👁</Btn><Btn size="sm">🔘</Btn><Btn size="sm">🗑</Btn></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal preview */}
      <div className="box" style={{ marginTop: 24, padding: 16, background: "var(--w-bg-2)" }}>
        <div className="hand">[Modal Thêm/Sửa sản phẩm — preview]</div>
        <div className="box" style={{ padding: 24, marginTop: 8, background: "var(--w-bg)" }}>
          <div className="h2">Thêm sản phẩm mới</div>
          <div className="grid-2" style={{ gap: 16, marginTop: 16 }}>
            <div>
              <div className="tiny" style={{ fontWeight: 600 }}>Tên sản phẩm *</div>
              <Inp placeholder="Bánh kem ..." />
            </div>
            <div>
              <div className="tiny" style={{ fontWeight: 600 }}>Slug (auto)</div>
              <Inp value="banh-kem-..." />
            </div>
            <div>
              <div className="tiny" style={{ fontWeight: 600 }}>Danh mục *</div>
              <Inp value="Bánh kem, Sinh nhật ▼" />
            </div>
            <div>
              <div className="tiny" style={{ fontWeight: 600 }}>Tồn kho *</div>
              <Inp placeholder="0" />
            </div>
            <div>
              <div className="tiny" style={{ fontWeight: 600 }}>Giá gốc *</div>
              <Inp placeholder="0đ" />
            </div>
            <div>
              <div className="tiny" style={{ fontWeight: 600 }}>Giá KM <FR id="BR-PROD-002" /></div>
              <Inp placeholder="(phải &lt; giá gốc)" />
            </div>
          </div>
          <div className="tiny" style={{ fontWeight: 600, marginTop: 16 }}>Mô tả</div>
          <div className="inp" style={{ height: 60, marginTop: 4, alignItems: "flex-start", paddingTop: 8 }}><span className="muted">mô tả ngắn...</span></div>

          <div className="tiny" style={{ fontWeight: 600, marginTop: 16 }}>Ảnh <FR id="BR-PROD-003" /></div>
          <div className="hand tiny">max 10 ảnh · 10MB/ảnh</div>
          <div className="row" style={{ marginTop: 8 }}>
            {[1, 2, 3].map(i => <Img key={i} w={80} h={80} label="80" />)}
            <div className="box box-soft" style={{ width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center", borderStyle: "dashed" }}>+</div>
          </div>

          <div className="tiny" style={{ fontWeight: 600, marginTop: 16 }}>Option Groups <FR id="BR-PROD-004" /></div>
          <div className="box box-2" style={{ padding: 12, marginTop: 8 }}>
            <div style={{ fontWeight: 700 }}>Kích cỡ</div>
            <div className="tiny muted">4 inch (+0k) · 6 inch (+50k) · 8 inch (+100k)</div>
          </div>
          <Btn size="sm" style={{ marginTop: 8 }}>+ Thêm nhóm tùy chọn</Btn>

          <div className="tiny" style={{ fontWeight: 600, marginTop: 16 }}>Tags</div>
          <div className="row" style={{ gap: 8, marginTop: 4 }}>
            {["Nổi bật", "Bán chạy", "Được yêu thích"].map((t, i) => (
              <label key={t} style={{ display: "flex", gap: 6, fontSize: 12 }}>
                <span style={{ width: 14, height: 14, border: "1.5px solid var(--w-text)", background: i === 1 ? "var(--w-text)" : "transparent" }} /> {t}
              </label>
            ))}
          </div>

          <div className="tiny" style={{ fontWeight: 600, marginTop: 16 }}>Trạng thái <FR id="BR-PROD-008" /></div>
          <div className="row" style={{ gap: 6, marginTop: 4 }}>
            {["ACTIVE", "HIDDEN", "DISCONTINUED"].map((s, i) => <Tag key={s} kind={i === 0 ? "solid" : ""}>{s}</Tag>)}
          </div>

          <div className="row" style={{ marginTop: 20, justifyContent: "flex-end" }}>
            <Btn ghost>Hủy</Btn>
            <Btn kind="primary">Lưu</Btn>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ──────────── B-04 CATEGORIES ────────────
const B04_Categories = () => (
  <div className="wf" style={{ display: "flex", minHeight: 800 }}>
    <AdminSidebar active="Danh mục" />
    <div style={{ flex: 1, padding: 32 }}>
      <h1 className="h1" style={{ fontSize: 28 }}>Quản lý danh mục</h1>
      <div className="hand tiny">kéo thả ≡ để sort <FR id="FR-ADMIN-003" /></div>

      <div style={{ display: "flex", gap: 24, marginTop: 16 }}>
        {/* TREE */}
        <div className="box" style={{ flex: 1, padding: 16 }}>
          <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
            <div className="h3">Cấu trúc danh mục</div>
            <Btn size="sm">+ Thêm danh mục gốc</Btn>
          </div>
          <div className="col" style={{ marginTop: 12, gap: 4, fontSize: 13 }}>
            {[
              { lv: 0, ic: "🎂", n: "Bánh kem", c: 12, sel: true },
              { lv: 1, n: "Bánh sinh nhật", c: 8 },
              { lv: 1, n: "Bánh cưới", c: 4 },
              { lv: 0, ic: "🥤", n: "Thức uống", c: 20 },
              { lv: 1, n: "Trà sữa", c: 10 },
              { lv: 1, n: "Cà phê", c: 10 },
              { lv: 0, ic: "🥖", n: "Bánh mì", c: 6 },
              { lv: 0, ic: "📦", n: "Combo", c: 5 },
            ].map((cat, i) => (
              <div key={i} className="box" style={{
                padding: "8px 12px", paddingLeft: 12 + cat.lv * 32,
                display: "flex", alignItems: "center", gap: 10,
                background: cat.sel ? "var(--w-bg-2)" : "var(--w-bg)",
                borderColor: cat.sel ? "var(--w-text)" : "var(--w-line)",
                borderWidth: cat.sel ? 1.5 : 1,
              }}>
                <span className="muted" style={{ cursor: "grab" }}>≡</span>
                {cat.ic && <span>{cat.ic}</span>}
                <span style={{ flex: 1, fontWeight: cat.lv === 0 ? 700 : 500 }}>{cat.n} <span className="tiny muted">({cat.c} SP)</span></span>
                <Btn size="sm">✏</Btn>
                <Btn size="sm">🗑</Btn>
              </div>
            ))}
          </div>
          <Note>tree 2 cấp <FR id="BR-PROD-001" /></Note>
        </div>

        {/* EDIT FORM */}
        <div className="box" style={{ width: 380, padding: 20 }}>
          <div className="h3">Sửa: Bánh kem</div>
          <div className="col" style={{ gap: 12, marginTop: 12 }}>
            <div><div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Tên danh mục *</div><Inp value="Bánh kem" /></div>
            <div><div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Slug</div><Inp value="banh-kem" /></div>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Danh mục cha <FR id="BR-PROD-001" /></div>
              <Inp value="(không có — là gốc) ▼" />
            </div>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Ảnh</div>
              <Img w={120} h={120} label="cat" />
            </div>
            <div><div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Thứ tự hiển thị</div><Inp value="1" w={80} /></div>
            <label style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div className="box" style={{ width: 36, height: 20, borderRadius: 999, background: "var(--w-text)", position: "relative" }}>
                <div style={{ position: "absolute", top: 1, right: 1, width: 16, height: 16, borderRadius: 999, background: "white" }} />
              </div>
              <span>Hiển thị trên website</span>
            </label>
            <Btn kind="primary" block>Lưu</Btn>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { B01_Dashboard, B02_Orders, B03_Products, B04_Categories };
