// A-04 Cart, A-05 Checkout, A-06 Payment Result, A-07 Order Tracking, A-08 Order History
/* eslint-disable */
import React from 'react';
import { Img, FR, Note, Bracket, Stars, Tag, Btn, Inp, CustomerHeader, CustomerFooter, ChatbotFab, AdminSidebar } from './wf-primitives';

// ──────────── A-04 CART ────────────
const A04_Cart = () => (
  <div className="wf" style={{ position: "relative" }}>
    <CustomerHeader cartCount={3} />
    <div style={{ padding: "32px 64px", display: "flex", gap: 24 }}>
      {/* LEFT — Items */}
      <div style={{ flex: 1 }}>
        <h1 className="h1" style={{ fontSize: 28 }}>Giỏ hàng (3 sản phẩm) <FR id="FR-CART-001" /></h1>
        <div className="row" style={{ marginTop: 16, alignItems: "center", justifyContent: "space-between" }}>
          <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ width: 16, height: 16, border: "1.5px solid var(--w-text)", background: "var(--w-text)" }} />
            <span style={{ fontWeight: 600 }}>Chọn tất cả</span>
          </label>
          <Btn size="sm">🗑 Xóa đã chọn <FR id="FR-CART-005" /></Btn>
        </div>

        <div className="col" style={{ marginTop: 16 }}>
          {[
            { name: "Bánh kem dâu tây 6 inch", opt: "6 inch · Vanilla", note: "ít ngọt", price: 185, qty: 1 },
            { name: "Trà sữa matcha size L", opt: "Size L · 30% đường", price: 55, qty: 2 },
            { name: "Croissant hạnh nhân", opt: "Tiêu chuẩn", price: 45, qty: 3, oos: true },
          ].map((it, i) => (
            <div key={i} className="box" style={{
              padding: 16, display: "flex", gap: 16, alignItems: "center",
              opacity: it.oos ? 0.55 : 1, background: it.oos ? "var(--w-bg-2)" : "var(--w-bg)",
            }}>
              <span style={{ width: 16, height: 16, border: "1.5px solid var(--w-text)", background: i < 2 ? "var(--w-text)" : "transparent" }} />
              <Img w={80} h={80} label="80" />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700 }}>{it.name}</div>
                <div className="tiny muted">{it.opt}</div>
                {it.note && <div className="hand" style={{ fontSize: 13 }}>ghi chú: {it.note}</div>}
                {it.oos && <Tag kind="danger" style={{ marginTop: 4 }}>Hết hàng</Tag>}
              </div>
              <div style={{ width: 100, textAlign: "right", fontWeight: 700 }}>{it.price}.000đ</div>
              <div className="box" style={{ display: "flex", alignItems: "center" }}>
                <div style={{ padding: "6px 10px", borderRight: "1.5px solid var(--w-text)" }}>−</div>
                <div style={{ padding: "6px 14px", fontWeight: 700 }}>{it.qty}</div>
                <div style={{ padding: "6px 10px", borderLeft: "1.5px solid var(--w-text)" }}>+</div>
              </div>
              <span className="muted" style={{ fontSize: 12, cursor: "pointer", color: it.oos ? "var(--w-danger)" : "var(--w-text-2)", fontWeight: it.oos ? 700 : 500 }}>🗑 Xóa</span>
            </div>
          ))}
        </div>

        <Note style={{ marginTop: 12 }}>Qty change: debounce 300ms · optimistic UI <FR id="FR-CART-006" /></Note>
        <div className="hand" style={{ marginTop: 6, fontSize: 14 }}>Guest → data trong localStorage <FR id="FR-CART-001" /></div>
        <div className="hand" style={{ fontSize: 14 }}>Sau login → merge với DB, duplicate items sum qty <FR id="FR-CART-003" /></div>

        <hr className="divider" />
        <Btn ghost size="sm">Xóa toàn bộ sản phẩm hết hàng <FR id="FR-CART-005" /></Btn>
      </div>

      {/* RIGHT — Summary */}
      <div style={{ width: 380, position: "relative" }}>
        <div className="box" style={{ padding: 20 }}>
          <div className="h2">Tóm tắt đơn hàng</div>
          <hr className="divider" />
          <div className="col" style={{ gap: 8, fontSize: 13 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Tạm tính <FR id="FR-CART-007" /></span>
              <span style={{ fontWeight: 700 }}>555.000đ</span>
            </div>
            <div className="row" style={{ marginTop: 8 }}>
              <Inp placeholder="mã giảm giá" style={{ flex: 1 }} />
              <Btn size="sm">Áp dụng</Btn>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "var(--w-ok)" }}>
              <span>Giảm giá (HELLO50)</span><span>−50.000đ</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "var(--w-mid)" }}>
              <span>Phí giao hàng</span><span>Tính khi chọn địa chỉ</span>
            </div>
          </div>
          <hr className="divider" />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span className="h3">TỔNG</span>
            <span style={{ fontWeight: 800, fontSize: 24 }}>505.000đ</span>
          </div>
          <div className="hand" style={{ fontSize: 13, marginTop: 4 }}>+505 điểm tích lũy <FR id="BR-USER-006" /></div>
          <Btn kind="primary" size="lg" block style={{ marginTop: 16 }}>Tiến hành thanh toán →</Btn>
          <div className="muted tiny" style={{ textAlign: "center", marginTop: 8 }}>← Tiếp tục mua sắm</div>
        </div>
        <span className="bracket" style={{ display: "block", marginTop: 8 }}>[STICKY]</span>

        {/* Empty state preview */}
        <div className="box box-soft" style={{ padding: 20, marginTop: 32, background: "var(--w-bg-2)" }}>
          <div className="hand" style={{ fontSize: 14, marginBottom: 8 }}>Empty state ↓</div>
          <div className="empty">
            <Img w={120} h={120} label="MASCOT" style={{ margin: "0 auto" }} />
            <div className="h3" style={{ marginTop: 12 }}>Giỏ hàng trống rỗng 😢</div>
            <div className="tiny muted" style={{ marginTop: 4 }}>Hãy chọn vài món ngon nhé!</div>
            <Btn kind="primary" style={{ marginTop: 16 }}>Khám phá thực đơn</Btn>
          </div>
        </div>
      </div>
    </div>
    <CustomerFooter />
    <ChatbotFab />
  </div>
);

// ──────────── A-05 CHECKOUT ────────────
const A05_Checkout = () => (
  <div className="wf" style={{ position: "relative" }}>
    <CustomerHeader cartCount={3} member />
    <div style={{ padding: "32px 64px", display: "flex", gap: 24 }}>
      <div style={{ flex: 1 }}>
        <h1 className="h1" style={{ fontSize: 28, marginBottom: 16 }}>Thanh toán</h1>

        {/* 1. Order type */}
        <div className="box" style={{ padding: 20, marginBottom: 16 }}>
          <div className="h3">1. Loại đặt hàng <FR id="FR-ORDER-001" /> <FR id="BR-ORD-003" /></div>
          <div className="grid-3" style={{ marginTop: 12 }}>
            {[
              { ic: "🍽", label: "Ăn tại quán", sub: "Dine-in · cần số bàn" },
              { ic: "🛍", label: "Mang về", sub: "Takeaway · nhận tại quầy", active: true },
              { ic: "🛵", label: "Giao hàng", sub: "Delivery · 2-4h" },
            ].map(o => (
              <div key={o.label} className="box" style={{
                padding: 16, textAlign: "center",
                background: o.active ? "var(--w-text)" : "var(--w-bg)",
                color: o.active ? "white" : "var(--w-text)",
                borderWidth: o.active ? 2 : 1.5,
              }}>
                <div style={{ fontSize: 28 }}>{o.ic}</div>
                <div style={{ fontWeight: 700, marginTop: 4 }}>{o.label}</div>
                <div className="tiny" style={{ opacity: 0.7 }}>{o.sub}</div>
              </div>
            ))}
          </div>
          <div className="hand" style={{ marginTop: 8, fontSize: 13 }}>nếu Dine-in → hiện input "Số bàn *" · nếu Delivery → hiện section địa chỉ</div>
        </div>

        {/* 2. Address */}
        <div className="box" style={{ padding: 20, marginBottom: 16 }}>
          <div className="h3">2. Địa chỉ giao hàng <span className="hand" style={{ fontWeight: 500, fontSize: 14 }}>(chỉ hiện khi Delivery)</span></div>
          <div className="col" style={{ marginTop: 12, gap: 8 }}>
            {[
              { ic: "🏠", label: "Nhà riêng", addr: "123 Nguyễn Văn A, Q.1", def: true },
              { ic: "🏢", label: "Cơ quan", addr: "456 Lê Văn B, Q.3" },
            ].map((a, i) => (
              <div key={i} className="box" style={{ padding: 12, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 14, height: 14, border: "1.5px solid var(--w-text)", borderRadius: 999, background: a.def ? "var(--w-text)" : "transparent" }} />
                <span style={{ fontSize: 20 }}>{a.ic}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700 }}>{a.label} {a.def && <Tag style={{ marginLeft: 6 }}>Mặc định</Tag>}</div>
                  <div className="tiny muted">{a.addr}</div>
                </div>
              </div>
            ))}
            <Btn ghost>+ Thêm địa chỉ mới</Btn>
            <div className="hand tiny">max 5 địa chỉ <FR id="BR-USER-004" /></div>
          </div>
        </div>

        {/* 3. Payment method */}
        <div className="box" style={{ padding: 20, marginBottom: 16 }}>
          <div className="h3">3. Phương thức thanh toán <FR id="FR-PAY-001" /></div>
          <div className="col" style={{ marginTop: 12, gap: 8 }}>
            {[
              { ic: "💵", label: "Tiền mặt khi nhận hàng / tại quầy (COD)", active: true },
              { ic: "📱", label: "Ví MoMo", note: "Tồn kho giữ chỗ 10 phút" },
            ].map((p, i) => (
              <div key={i} className="box" style={{ padding: 12, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 14, height: 14, border: "1.5px solid var(--w-text)", borderRadius: 999, background: p.active ? "var(--w-text)" : "transparent" }} />
                <span style={{ fontSize: 20 }}>{p.ic}</span>
                <div style={{ flex: 1, fontWeight: 600 }}>{p.label}</div>
                {p.note && <span className="hand" style={{ fontSize: 13 }}>{p.note} <FR id="FR-PAY-002" /></span>}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Loyalty */}
        <div className="box" style={{ padding: 20, marginBottom: 16 }}>
          <div className="h3">4. Điểm loyalty <span className="hand" style={{ fontWeight: 500, fontSize: 14 }}>(chỉ Member)</span> <FR id="BR-USER-006" /></div>
          <div style={{ marginTop: 12, padding: 12, background: "var(--w-bg-2)", borderRadius: 4 }}>
            <div style={{ fontWeight: 700 }}>Bạn có 1,240 điểm = 12.400đ</div>
            <label style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
              <span style={{ width: 14, height: 14, border: "1.5px solid var(--w-text)" }} />
              <span className="tiny">Dùng toàn bộ điểm để giảm giá</span>
            </label>
          </div>
        </div>

        {/* 5. Note */}
        <div className="box" style={{ padding: 20 }}>
          <div className="h3">5. Ghi chú đơn hàng</div>
          <div className="inp" style={{ height: 80, marginTop: 8, alignItems: "flex-start", paddingTop: 10 }}>
            <span className="muted">Ghi chú thêm cho cửa hàng...</span>
          </div>
        </div>
      </div>

      {/* Summary sidebar */}
      <div style={{ width: 380 }}>
        <div className="box" style={{ padding: 20 }}>
          <div className="h2">Đơn hàng</div>
          <div className="col" style={{ marginTop: 12, gap: 8 }}>
            {[
              ["Bánh kem dâu 6 inch", "6 inch · Vanilla", "×1", "185.000đ"],
              ["Trà sữa matcha L", "Size L", "×2", "110.000đ"],
              ["Croissant hạnh nhân", "Tiêu chuẩn", "×3", "135.000đ"],
            ].map((row, i) => (
              <div key={i} className="row" style={{ alignItems: "center", gap: 8 }}>
                <Img w={40} h={40} label="40" />
                <div style={{ flex: 1, fontSize: 12 }}>
                  <div style={{ fontWeight: 700 }}>{row[0]}</div>
                  <div className="muted tiny">{row[1]}</div>
                </div>
                <div className="tiny">{row[2]}</div>
                <div style={{ fontSize: 12, fontWeight: 700, width: 70, textAlign: "right" }}>{row[3]}</div>
              </div>
            ))}
          </div>
          <hr className="divider" />
          <div className="col" style={{ gap: 4, fontSize: 13 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>Tạm tính</span><span>555.000đ</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "var(--w-ok)" }}><span>Giảm giá</span><span>−50.000đ</span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>Phí giao hàng</span><span>30.000đ</span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>Điểm dùng</span><span>−12.400đ</span></div>
          </div>
          <hr className="divider" />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span className="h3">TỔNG THANH TOÁN</span>
            <span style={{ fontWeight: 800, fontSize: 22 }}>522.600đ</span>
          </div>
          <Btn kind="primary" size="lg" block style={{ marginTop: 16 }}>Đặt hàng ngay</Btn>
          <div className="muted tiny" style={{ marginTop: 8, textAlign: "center" }}>Tối thiểu đơn 50.000đ <FR id="BR-ORD-002" /></div>
        </div>
        <span className="bracket" style={{ display: "block", marginTop: 8 }}>[STICKY]</span>
      </div>
    </div>
    <CustomerFooter />
    <ChatbotFab />
  </div>
);

// ──────────── A-06 PAYMENT RESULT (3 states) ────────────
const A06_PaymentResult = () => (
  <div className="wf">
    <CustomerHeader />
    <div style={{ padding: "32px 64px" }}>
      <h1 className="h1" style={{ fontSize: 24, marginBottom: 16 }}>Kết quả thanh toán — 3 trạng thái</h1>
      <div className="grid-3">
        {/* SUCCESS */}
        <div className="box" style={{ padding: 32, textAlign: "center" }}>
          <div className="hand" style={{ fontSize: 13, color: "var(--w-ok)" }}>STATE 1 — SUCCESS</div>
          <div style={{ fontSize: 72, margin: "12px 0" }}>✅</div>
          <h2 className="h2">Đặt hàng thành công!</h2>
          <div className="mono" style={{ marginTop: 8, fontWeight: 700 }}>HTH-20260522-00042</div>
          <FR id="BR-ORD-010" />
          <hr className="divider" />
          <div className="col" style={{ gap: 4, fontSize: 12, textAlign: "left" }}>
            <div className="muted">3 sản phẩm · 505.000đ</div>
            <div className="muted">📍 123 Nguyễn Văn A, Q.1</div>
            <div className="muted">💵 COD</div>
          </div>
          <hr className="divider" />
          <Btn kind="primary" block>Theo dõi đơn hàng</Btn>
          <Btn ghost block style={{ marginTop: 8 }}>Về trang chủ</Btn>
        </div>

        {/* FAILED */}
        <div className="box" style={{ padding: 32, textAlign: "center" }}>
          <div className="hand" style={{ fontSize: 13, color: "var(--w-danger)" }}>STATE 2 — FAILED (MoMo)</div>
          <div style={{ fontSize: 72, margin: "12px 0" }}>❌</div>
          <h2 className="h2">Thanh toán thất bại</h2>
          <div className="tiny muted" style={{ marginTop: 8 }}>Giao dịch bị hủy hoặc hết thời gian</div>
          <hr className="divider" />
          <Btn kind="primary" block>Thử lại</Btn>
          <Btn ghost block style={{ marginTop: 8 }}>Đặt hàng với COD</Btn>
        </div>

        {/* PROCESSING */}
        <div className="box" style={{ padding: 32, textAlign: "center" }}>
          <div className="hand" style={{ fontSize: 13, color: "var(--w-info)" }}>STATE 3 — PROCESSING</div>
          <div style={{ margin: "24px auto", width: 60, height: 60, border: "4px solid var(--w-bg-3)", borderTop: "4px solid var(--w-text)", borderRadius: 999 }} />
          <h2 className="h2">Đang xác nhận thanh toán...</h2>
          <Note>Vui lòng không đóng trang này <FR id="FR-PAY-005" /></Note>
        </div>
      </div>
    </div>
    <CustomerFooter />
  </div>
);

// ──────────── A-07 ORDER TRACKING ────────────
const A07_OrderTracking = () => (
  <div className="wf" style={{ position: "relative" }}>
    <CustomerHeader member />
    <div style={{ padding: "32px 64px" }}>
      <div className="box" style={{ padding: 16, display: "flex", gap: 24, alignItems: "center" }}>
        <div><div className="tiny muted">Mã đơn</div><div className="mono" style={{ fontWeight: 700 }}>HTH-20260522-00042</div></div>
        <div className="divider" style={{ width: 1, height: 32, margin: 0 }} />
        <div><div className="tiny muted">Ngày</div><div style={{ fontWeight: 700 }}>22/05/2026</div></div>
        <div className="divider" style={{ width: 1, height: 32, margin: 0 }} />
        <div><div className="tiny muted">Loại</div><div style={{ fontWeight: 700 }}>🛵 Delivery</div></div>
      </div>

      {/* Stepper */}
      <div className="box" style={{ padding: 24, marginTop: 16 }}>
        <div className="h3">Trạng thái đơn hàng <FR id="FR-ORDER-002" /></div>
        <div className="hand tiny">[WebSocket realtime · delay &lt;1s]</div>
        <div className="stepper">
          {[
            { l: "NEW", t: "09:12", done: true },
            { l: "PREPARING", t: "09:15", done: true },
            { l: "READY", t: "09:38", active: true },
            { l: "DELIVERING", t: "—" },
            { l: "COMPLETED", t: "—" },
          ].map((s, i, arr) => (
            <React.Fragment key={s.l}>
              <div className="stepper-node">
                <div className={"stepper-dot " + (s.active ? "stepper-dot-active" : s.done ? "stepper-dot-done" : "")}>
                  {s.done ? "✓" : i + 1}
                </div>
                <div style={{ fontWeight: s.active ? 700 : 500, fontSize: 12 }}>{s.l}</div>
                <div className="tiny muted">{s.t}</div>
                {s.active && <span className="hand tiny" style={{ color: "var(--w-info)" }}>● pulse</span>}
              </div>
              {i < arr.length - 1 && <div className={"stepper-line " + (s.done ? "stepper-line-done" : "")} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
        {/* Delivery tracker */}
        <div className="box" style={{ flex: 1.2, padding: 16 }}>
          <div className="h3">Giao hàng <span className="hand" style={{ fontWeight: 500, fontSize: 14 }}>(chỉ khi DELIVERING_EXTERNAL)</span></div>
          <Img w={"100%"} h={300} label="MAP 600×300" style={{ marginTop: 8 }} />
          <div className="row" style={{ marginTop: 8, justifyContent: "space-between" }}>
            <div>🛵 Đang được giao bởi Grab</div>
            <div className="hand">Dự kiến 15-20 phút</div>
          </div>
        </div>

        {/* Order detail */}
        <div className="box" style={{ flex: 1, padding: 16 }}>
          <div className="h3">Chi tiết đơn</div>
          <div className="col" style={{ gap: 8, marginTop: 8 }}>
            {[
              ["Bánh kem dâu 6 inch", "×1", "185.000đ"],
              ["Trà sữa matcha L", "×2", "110.000đ"],
              ["Croissant hạnh nhân", "×3", "135.000đ"],
            ].map((r, i) => (
              <div key={i} className="row" style={{ alignItems: "center", gap: 8 }}>
                <Img w={36} h={36} label="36" />
                <div style={{ flex: 1, fontSize: 12 }}><div style={{ fontWeight: 600 }}>{r[0]}</div><div className="tiny muted">{r[1]}</div></div>
                <div className="tiny" style={{ fontWeight: 700 }}>{r[2]}</div>
              </div>
            ))}
          </div>
          <hr className="divider" />
          <div className="tiny"><strong>📍 Địa chỉ:</strong> 123 Nguyễn Văn A, Q.1</div>
          <div className="tiny" style={{ marginTop: 4 }}><strong>💳 Thanh toán:</strong> COD <Tag kind="warn">Chưa thanh toán</Tag></div>
          <div style={{ marginTop: 16 }}>
            <Btn block kind="disabled">Hủy đơn</Btn>
            <Note>chỉ hiện khi status=NEW <FR id="FR-ORDER-004" /> <FR id="BR-ORD-004" /></Note>
            <Btn ghost block style={{ marginTop: 8 }}>Liên hệ hỗ trợ</Btn>
          </div>
        </div>
      </div>

      {/* Dead order warning preview */}
      <div className="box" style={{ padding: 16, marginTop: 16, background: "#FEE2E2", borderColor: "var(--w-danger)" }}>
        <div className="hand" style={{ fontSize: 13, color: "var(--w-danger)" }}>Branch Manager-only view ↓</div>
        <div style={{ fontWeight: 700, marginTop: 4, color: "var(--w-danger)" }}>⚠ Đơn này đã READY hơn 15 phút, cần xử lý giao hàng <FR id="BR-ORD-005" /></div>
      </div>
    </div>
    <CustomerFooter />
    <ChatbotFab />
  </div>
);

// ──────────── A-08 ORDER HISTORY ────────────
const A08_OrderHistory = () => (
  <div className="wf" style={{ position: "relative" }}>
    <CustomerHeader member />
    <div style={{ padding: "32px 64px" }}>
      <h1 className="h1" style={{ fontSize: 28 }}>Lịch sử đơn hàng</h1>

      <div className="row" style={{ marginTop: 16, alignItems: "center" }}>
        {["Tất cả", "Đang xử lý", "Hoàn thành", "Đã hủy"].map((t, i) => (
          <Tag key={t} kind={i === 2 ? "solid" : ""}>{t}</Tag>
        ))}
        <div style={{ flex: 1 }} />
        <Inp placeholder="Từ ngày" w={120} />
        <Inp placeholder="Đến ngày" w={120} />
        <Btn>Lọc</Btn>
      </div>

      <div className="col" style={{ marginTop: 16 }}>
        {[
          { code: "HTH-20260510-00031", date: "10/05/2026", status: "COMPLETED", color: "ok", items: "Bánh kem dâu x1, Trà sữa matcha x2", total: "295.000đ", type: "Delivery", pay: "MoMo", complete: true },
          { code: "HTH-20260508-00028", date: "08/05/2026", status: "PREPARING", color: "warn", items: "Bánh kem chocolate 8 inch x1", total: "240.000đ", type: "Takeaway", pay: "COD" },
          { code: "HTH-20260502-00019", date: "02/05/2026", status: "CANCELLED", color: "", items: "Croissant x5", total: "225.000đ", type: "Delivery", pay: "COD" },
          { code: "HTH-20260428-00012", date: "28/04/2026", status: "COMPLETED", color: "ok", items: "Combo trà sữa + bánh ngọt x1", total: "180.000đ", type: "Dine-in", pay: "COD", complete: true, reviewed: false },
        ].map((o, i) => (
          <div key={i} className="box" style={{ padding: 16 }}>
            <div className="row" style={{ alignItems: "center", justifyContent: "space-between" }}>
              <div className="row" style={{ alignItems: "center", gap: 16 }}>
                <div className="mono" style={{ fontWeight: 700 }}>{o.code}</div>
                <div className="tiny muted">{o.date}</div>
                <Tag kind={o.color}>{o.status}</Tag>
              </div>
              <div className="row" style={{ gap: 6 }}>
                <Btn size="sm">Xem chi tiết</Btn>
                {o.complete && <Btn size="sm" kind="primary">Đặt lại <FR id="FR-ORDER-006" /></Btn>}
                {o.complete && o.reviewed === false && <Btn size="sm">Đánh giá <FR id="FR-ORDER-005" /></Btn>}
              </div>
            </div>
            <div className="row" style={{ marginTop: 12, alignItems: "center", gap: 12 }}>
              <Img w={48} h={48} label="48" />
              <div className="tiny" style={{ flex: 1 }}>{o.items}</div>
              <div style={{ fontWeight: 800 }}>{o.total}</div>
              <div className="tiny muted">{o.type} · {o.pay}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="hand tiny" style={{ marginTop: 8 }}>10 items/trang <FR id="FR-ORDER-003" /></div>
      <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 8 }}>
        {["«", "1", "2", "3", "»"].map((p, i) => (
          <div key={i} className="box" style={{ padding: "6px 12px", minWidth: 32, textAlign: "center", background: p === "2" ? "var(--w-text)" : "var(--w-bg)", color: p === "2" ? "white" : "var(--w-text)", fontWeight: 600, fontSize: 13 }}>{p}</div>
        ))}
      </div>

      {/* Empty state preview */}
      <div className="box box-soft" style={{ padding: 20, marginTop: 32, background: "var(--w-bg-2)" }}>
        <div className="hand" style={{ fontSize: 14, marginBottom: 8 }}>Empty state ↓</div>
        <div className="empty">
          <Img w={120} h={120} label="MASCOT" style={{ margin: "0 auto" }} />
          <div className="h3" style={{ marginTop: 12 }}>Bạn chưa có đơn hàng nào</div>
          <Btn kind="primary" style={{ marginTop: 12 }}>Khám phá thực đơn</Btn>
        </div>
      </div>
    </div>
    <CustomerFooter />
    <ChatbotFab />
  </div>
);

export { A04_Cart, A05_Checkout, A06_PaymentResult, A07_OrderTracking, A08_OrderHistory };
