// A-09 Profile, A-10 Auth, A-11 Forgot, A-13 Chatbot widget
/* eslint-disable */
import React from 'react';
import { Img, FR, Note, Bracket, Stars, Tag, Btn, Inp, CustomerHeader, CustomerFooter, ChatbotFab, AdminSidebar } from './wf-primitives';

// ──────────── A-09 PROFILE ────────────
const A09_Profile = () => (
  <div className="wf" style={{ position: "relative" }}>
    <CustomerHeader member />
    <div style={{ padding: "32px 64px", display: "flex", gap: 24 }}>
      {/* Tabs sidebar */}
      <div style={{ width: 240 }}>
        <div className="box" style={{ padding: 16 }}>
          {[
            ["👤", "Thông tin cá nhân", true],
            ["📍", "Địa chỉ giao hàng"],
            ["⭐", "Điểm tích lũy"],
            ["🔒", "Đổi mật khẩu"],
          ].map(([ic, l, a]) => (
            <div key={l} style={{
              padding: "10px 12px", borderRadius: 4, marginBottom: 4,
              background: a ? "var(--w-text)" : "transparent",
              color: a ? "white" : "var(--w-text-2)",
              fontWeight: a ? 700 : 500, fontSize: 13,
              display: "flex", gap: 10, alignItems: "center",
            }}>
              <span>{ic}</span><span>{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content — show all 4 tabs stacked for completeness */}
      <div style={{ flex: 1 }} className="col">
        {/* Tab 1: profile */}
        <div className="box" style={{ padding: 24 }}>
          <div className="h2">Thông tin cá nhân <span className="hand tiny">[active tab]</span></div>
          <div className="row" style={{ alignItems: "center", marginTop: 16, gap: 16 }}>
            <Img w={96} h={96} label="96×96" />
            <div className="col" style={{ gap: 6 }}>
              <Btn size="sm">Thay ảnh</Btn>
              <div className="tiny muted">JPG/PNG max 5MB <FR id="BR-USER-003" /></div>
            </div>
          </div>
          <div className="col" style={{ gap: 12, marginTop: 16 }}>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Tên hiển thị *</div>
              <Inp value="Nguyễn Văn A" />
              <div className="hand tiny">min 2, max 100 ký tự <FR id="BR-USER-001" /></div>
            </div>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Email</div>
              <Inp value="user@gmail.com" suffix="🔒 READONLY" />
              <div className="hand tiny">đăng ký bằng Google → email không sửa được</div>
            </div>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Số điện thoại</div>
              <Inp value="0901 234 567" />
              <div className="hand tiny">10 số VN <FR id="BR-USER-002" /></div>
            </div>
            <div><Btn kind="primary">Lưu thay đổi</Btn></div>
          </div>
        </div>

        {/* Tab 2: addresses */}
        <div className="box" style={{ padding: 24 }}>
          <div className="h2">Địa chỉ <span className="hand tiny">[tab 2]</span></div>
          <div className="hand tiny">max 5 địa chỉ <FR id="BR-USER-004" /></div>
          <div className="col" style={{ gap: 8, marginTop: 12 }}>
            {[
              { ic: "🏠", l: "Nhà riêng", n: "Nguyễn Văn A", p: "0901234567", a: "123 Nguyễn Văn A, P.Bến Nghé, Q.1", def: true },
              { ic: "🏢", l: "Cơ quan", n: "Nguyễn Văn A", p: "0901234567", a: "456 Lê Văn B, P.6, Q.3" },
            ].map((x, i) => (
              <div key={i} className="box" style={{ padding: 12, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 22 }}>{x.ic}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700 }}>{x.l} {x.def && <Tag style={{ marginLeft: 6 }}>Mặc định</Tag>}</div>
                  <div className="tiny">{x.n} · {x.p}</div>
                  <div className="tiny muted">{x.a}</div>
                </div>
                <Btn size="sm">Sửa</Btn>
                <Btn size="sm" ghost>Xóa</Btn>
                {!x.def && <Btn size="sm" ghost>Mặc định</Btn>}
              </div>
            ))}
            <Btn ghost>+ Thêm địa chỉ mới</Btn>
          </div>
        </div>

        {/* Tab 3: loyalty */}
        <div className="box" style={{ padding: 24 }}>
          <div className="h2">Điểm tích lũy <span className="hand tiny">[tab 3]</span></div>
          <div className="box box-2" style={{ padding: 20, marginTop: 12, textAlign: "center" }}>
            <div className="h1" style={{ fontSize: 48 }}>1,240</div>
            <div className="muted">điểm = 12.400đ <FR id="BR-USER-006" /></div>
            <div style={{ marginTop: 12, fontSize: 12 }}>Progress to Gold tier:</div>
            <div style={{ height: 8, background: "var(--w-bg-3)", borderRadius: 999, margin: "8px auto", maxWidth: 400, position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, right: "38%", background: "var(--w-text)", borderRadius: 999 }} />
            </div>
            <div className="tiny muted">còn 760 điểm nữa để lên Gold</div>
          </div>
          <table className="tbl" style={{ marginTop: 16 }}>
            <thead><tr><th>Ngày</th><th>Đơn hàng</th><th>+/- Điểm</th><th>Lý do</th></tr></thead>
            <tbody>
              <tr><td>10/05/2026</td><td className="mono tiny">HTH-...00031</td><td className="" style={{ color: "var(--w-ok)", fontWeight: 700 }}>+295</td><td>Hoàn thành đơn</td></tr>
              <tr><td>01/05/2026</td><td>—</td><td style={{ color: "var(--w-danger)", fontWeight: 700 }}>−500</td><td>Đổi voucher 50k</td></tr>
              <tr><td>28/04/2026</td><td className="mono tiny">HTH-...00012</td><td style={{ color: "var(--w-ok)", fontWeight: 700 }}>+180</td><td>Hoàn thành đơn</td></tr>
            </tbody>
          </table>
          <Note>điểm chỉ cộng khi COMPLETED <FR id="BR-USER-005" /></Note>
        </div>

        {/* Tab 4: password */}
        <div className="box" style={{ padding: 24 }}>
          <div className="h2">Đổi mật khẩu <span className="hand tiny">[tab 4]</span></div>
          <div className="col" style={{ gap: 12, marginTop: 12, maxWidth: 480 }}>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Mật khẩu hiện tại *</div>
              <Inp placeholder="••••••••" />
            </div>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Mật khẩu mới *</div>
              <Inp placeholder="••••••••" />
              <div className="hand tiny">min 8 ký tự, chữ + số <FR id="FR-AUTH-001" /></div>
            </div>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Xác nhận mật khẩu mới *</div>
              <Inp placeholder="••••••••" />
            </div>
            <Btn kind="primary">Cập nhật mật khẩu</Btn>
            <div className="box" style={{ padding: 12, background: "var(--w-bg-2)" }}>
              <div className="tiny">⚠ Disable nếu tài khoản Google OAuth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CustomerFooter />
    <ChatbotFab />
  </div>
);

// ──────────── A-10 LOGIN / REGISTER / EMAIL VERIFY ────────────
const A10_Auth = () => (
  <div className="wf" style={{ position: "relative" }}>
    <CustomerHeader />
    <div style={{ padding: "48px 64px" }}>
      <h1 className="h1" style={{ fontSize: 24, marginBottom: 16 }}>Đăng nhập / Đăng ký — 3 states cùng màn hình</h1>
      <div className="grid-3" style={{ gap: 24 }}>
        {/* LOGIN */}
        <div className="box" style={{ padding: 28 }}>
          <div className="hand" style={{ fontSize: 13 }}>STATE 1 — LOGIN</div>
          <h2 className="h2" style={{ marginTop: 8 }}>Chào mừng trở lại 👋</h2>
          <Btn block style={{ marginTop: 16 }}>🔵 Tiếp tục với Google <FR id="FR-AUTH-003" /></Btn>
          <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "16px 0", color: "var(--w-mid)", fontSize: 11 }}>
            <hr style={{ flex: 1, border: 0, borderTop: "1px solid var(--w-line)" }} />hoặc<hr style={{ flex: 1, border: 0, borderTop: "1px solid var(--w-line)" }} />
          </div>
          <div className="col" style={{ gap: 10 }}>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Email *</div>
              <Inp placeholder="email của bạn" />
            </div>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Mật khẩu *</div>
              <Inp placeholder="••••••••" suffix="👁" />
            </div>
            <div className="row" style={{ justifyContent: "space-between", fontSize: 12 }}>
              <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ width: 14, height: 14, border: "1.5px solid var(--w-text)" }} /> Nhớ tôi
              </label>
              <span style={{ color: "var(--w-info)" }}>Quên mật khẩu?</span>
            </div>
            <Btn kind="primary" block>Đăng nhập <FR id="FR-AUTH-002" /></Btn>
            <div className="box" style={{ padding: 8, background: "#FEE2E2", borderColor: "var(--w-danger)" }}>
              <div className="tiny" style={{ color: "var(--w-danger)" }}>[Error: Email hoặc mật khẩu không đúng]</div>
            </div>
            <div className="box" style={{ padding: 8, background: "#FEF3C7", borderColor: "var(--w-warn)" }}>
              <div className="tiny" style={{ color: "var(--w-warn)" }}>[Error: Quá nhiều lần thử. Thử lại sau 15 phút <FR id="FR-AUTH-008" />]</div>
            </div>
            <div className="tiny muted" style={{ textAlign: "center", marginTop: 8 }}>
              Chưa có tài khoản? <span style={{ color: "var(--w-info)", fontWeight: 700 }}>Đăng ký ngay</span>
            </div>
          </div>
        </div>

        {/* REGISTER */}
        <div className="box" style={{ padding: 28 }}>
          <div className="hand" style={{ fontSize: 13 }}>STATE 2 — REGISTER</div>
          <h2 className="h2" style={{ marginTop: 8 }}>Tạo tài khoản mới</h2>
          <Btn block style={{ marginTop: 16 }}>🔵 Tiếp tục với Google</Btn>
          <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "16px 0", color: "var(--w-mid)", fontSize: 11 }}>
            <hr style={{ flex: 1, border: 0, borderTop: "1px solid var(--w-line)" }} />hoặc<hr style={{ flex: 1, border: 0, borderTop: "1px solid var(--w-line)" }} />
          </div>
          <div className="col" style={{ gap: 10 }}>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Tên hiển thị *</div>
              <Inp placeholder="ví dụ: Nguyễn Văn A" />
            </div>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Email *</div>
              <Inp placeholder="email" />
            </div>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Mật khẩu *</div>
              <Inp placeholder="••••••••" />
              <div className="hand tiny">min 8 ký tự, chữ + số <FR id="FR-AUTH-001" /></div>
            </div>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Xác nhận mật khẩu *</div>
              <Inp placeholder="••••••••" />
            </div>
            <Btn kind="primary" block>Đăng ký</Btn>
            <Note>email xác minh gửi trong 30 giây <FR id="FR-AUTH-001" /></Note>
          </div>
        </div>

        {/* EMAIL VERIFY */}
        <div className="box" style={{ padding: 28, textAlign: "center" }}>
          <div className="hand" style={{ fontSize: 13 }}>STATE 3 — EMAIL VERIFY (after register)</div>
          <div style={{ fontSize: 72, margin: "24px 0" }}>📧</div>
          <h2 className="h2">Kiểm tra hộp thư của bạn</h2>
          <div className="tiny muted" style={{ marginTop: 8 }}>
            Chúng tôi đã gửi link xác minh tới<br />
            <strong style={{ color: "var(--w-text)" }}>user@email.com</strong>
          </div>
          <Note style={{ textAlign: "center", marginTop: 12 }}>Link hiệu lực 24 giờ <FR id="FR-AUTH-001" /></Note>
          <div className="col" style={{ marginTop: 20, gap: 8 }}>
            <Btn kind="primary" block>Gửi lại email</Btn>
            <Btn ghost block>Đổi email</Btn>
          </div>
        </div>
      </div>
    </div>
    <CustomerFooter />
  </div>
);

// ──────────── A-11 FORGOT PASSWORD (3 steps) ────────────
const A11_Forgot = () => (
  <div className="wf" style={{ position: "relative" }}>
    <CustomerHeader />
    <div style={{ padding: "48px 64px" }}>
      <h1 className="h1" style={{ fontSize: 24, marginBottom: 16 }}>Quên mật khẩu — 3 bước</h1>
      <div className="grid-3" style={{ gap: 24 }}>
        {/* Step 1 */}
        <div className="box" style={{ padding: 28 }}>
          <div className="hand" style={{ fontSize: 13 }}>STEP 1 — Nhập email</div>
          <h2 className="h2" style={{ marginTop: 8 }}>Quên mật khẩu?</h2>
          <div className="tiny muted" style={{ marginTop: 8 }}>Nhập email để nhận mã OTP</div>
          <div className="col" style={{ gap: 10, marginTop: 16 }}>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Email *</div>
              <Inp placeholder="email của bạn" />
            </div>
            <Btn kind="primary" block>Gửi OTP</Btn>
            <Note style={{ textAlign: "left" }}>OTP gửi trong 60 giây <FR id="FR-AUTH-007" /></Note>
          </div>
        </div>

        {/* Step 2 */}
        <div className="box" style={{ padding: 28 }}>
          <div className="hand" style={{ fontSize: 13 }}>STEP 2 — Nhập OTP</div>
          <h2 className="h2" style={{ marginTop: 8 }}>Nhập mã xác minh</h2>
          <div className="tiny muted" style={{ marginTop: 8 }}>Mã OTP 6 số đã gửi tới <strong>user@email.com</strong></div>
          <div className="row" style={{ marginTop: 16, justifyContent: "center", gap: 6 }}>
            {["1", "2", "3", "_", "_", "_"].map((d, i) => (
              <div key={i} className="box" style={{ width: 44, height: 52, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 20, color: d === "_" ? "var(--w-mid)" : "var(--w-text)" }}>{d}</div>
            ))}
          </div>
          <div className="tiny muted" style={{ marginTop: 12, textAlign: "center" }}>
            Mã hết hạn sau <strong className="mono" style={{ color: "var(--w-text)" }}>09:47</strong> <FR id="FR-AUTH-007" />
          </div>
          <Btn kind="primary" block style={{ marginTop: 12 }}>Xác nhận</Btn>
          <div className="box" style={{ padding: 8, background: "#FEE2E2", borderColor: "var(--w-danger)", marginTop: 8 }}>
            <div className="tiny" style={{ color: "var(--w-danger)" }}>[Error: Mã không đúng. Còn 2 lần thử. Sau 5 lần sai → khóa 30 phút <FR id="FR-AUTH-007" />]</div>
          </div>
          <div className="tiny muted" style={{ textAlign: "center", marginTop: 8 }}>
            <span style={{ opacity: 0.5 }}>Gửi lại OTP</span> <span className="hand">(disabled khi countdown &gt; 0)</span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="box" style={{ padding: 28 }}>
          <div className="hand" style={{ fontSize: 13 }}>STEP 3 — Mật khẩu mới</div>
          <h2 className="h2" style={{ marginTop: 8 }}>Đặt mật khẩu mới</h2>
          <div className="col" style={{ gap: 10, marginTop: 16 }}>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Mật khẩu mới *</div>
              <Inp placeholder="••••••••" />
              <div className="hand tiny">min 8 ký tự <FR id="FR-AUTH-001" /></div>
            </div>
            <div>
              <div className="tiny" style={{ fontWeight: 600, marginBottom: 4 }}>Xác nhận *</div>
              <Inp placeholder="••••••••" />
            </div>
            <Btn kind="primary" block>Cập nhật mật khẩu</Btn>
            <Note>Success → redirect login</Note>
          </div>
        </div>
      </div>
    </div>
    <CustomerFooter />
  </div>
);

// ──────────── A-13 CHATBOT WIDGET (2 states) ────────────
const A13_Chatbot = () => (
  <div className="wf" style={{ padding: "32px 64px", minHeight: 720, position: "relative" }}>
    <h1 className="h1" style={{ fontSize: 24 }}>AI Chatbot Widget — 2 states <FR id="FR-CHAT-001" /></h1>

    <div className="row" style={{ marginTop: 32, gap: 48, alignItems: "flex-start" }}>
      {/* CLOSED */}
      <div style={{ flex: 1 }}>
        <div className="hand" style={{ fontSize: 14 }}>STATE 1 — CLOSED</div>
        <div className="box box-2" style={{ height: 400, position: "relative", marginTop: 8 }}>
          <span className="bracket" style={{ position: "absolute", top: 8, left: 8 }}>page background</span>
          <div style={{ position: "absolute", bottom: 24, right: 24, width: 56, height: 56, borderRadius: 999, border: "1.5px solid var(--w-text)", background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, boxShadow: "3px 3px 0 var(--w-text)" }}>
            💬
            <span style={{ position: "absolute", top: -6, right: -10, background: "var(--w-text)", color: "white", fontSize: 10, padding: "2px 6px", borderRadius: 999, fontWeight: 700 }}>MỚI</span>
          </div>
          <div className="hand" style={{ position: "absolute", bottom: 92, right: 24, fontSize: 14 }}>
            ↘ circle 56px [FIXED bottom-right: 24px]<br />badge glow animation
          </div>
        </div>
      </div>

      {/* OPEN */}
      <div style={{ flex: 1 }}>
        <div className="hand" style={{ fontSize: 14 }}>STATE 2 — OPEN (panel 360×520px)</div>
        <div className="box box-2" style={{ height: 580, position: "relative", marginTop: 8 }}>
          <span className="bracket" style={{ position: "absolute", top: 8, left: 8 }}>page background</span>
          <div className="box" style={{ position: "absolute", bottom: 16, right: 16, width: 340, height: 520, padding: 0, display: "flex", flexDirection: "column", boxShadow: "4px 4px 0 var(--w-text)" }}>
            {/* Header */}
            <div style={{ padding: "12px 16px", borderBottom: "1.5px solid var(--w-text)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Img w={28} h={28} label="A" />
                <div style={{ fontWeight: 700, fontSize: 13 }}>HTHFood Assistant 🎂</div>
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                <span className="muted" style={{ padding: "0 6px" }}>−</span>
                <span className="muted" style={{ padding: "0 6px" }}>×</span>
              </div>
            </div>
            {/* Messages */}
            <div style={{ flex: 1, padding: 12, overflow: "hidden", display: "flex", flexDirection: "column", gap: 10, background: "var(--w-bg-2)" }}>
              {/* Bot */}
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <Img w={28} h={28} label="A" />
                <div className="box" style={{ padding: "8px 12px", borderRadius: 12, borderTopLeftRadius: 4, fontSize: 12, background: "white", maxWidth: "75%" }}>
                  Xin chào! Tôi có thể giúp gì cho bạn? 😊
                </div>
              </div>
              {/* Suggested chips */}
              <div className="row" style={{ flexWrap: "wrap", gap: 6, paddingLeft: 36 }}>
                {["Giờ mở cửa?", "Chính sách giao hàng?", "Bánh đang hot?"].map(s => (
                  <span key={s} className="tag" style={{ fontSize: 11 }}>{s}</span>
                ))}
              </div>
              {/* User */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div style={{ padding: "8px 12px", borderRadius: 12, borderTopRightRadius: 4, background: "var(--w-text)", color: "white", fontSize: 12, maxWidth: "75%" }}>
                  Bánh kem 6 inch giá bao nhiêu?
                </div>
              </div>
              {/* Bot reply */}
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <Img w={28} h={28} label="A" />
                <div className="box" style={{ padding: "8px 12px", borderRadius: 12, borderTopLeftRadius: 4, fontSize: 12, background: "white", maxWidth: "75%" }}>
                  Bánh kem 6 inch có giá từ <strong>280.000đ</strong>, bạn xem thêm tại Thực đơn nha 🥐
                  <FR id="FR-CHAT-003" />
                </div>
              </div>
              {/* Typing */}
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <Img w={28} h={28} label="A" />
                <div className="box" style={{ padding: "8px 12px", borderRadius: 12, fontSize: 12, background: "white" }}>
                  ●●● đang trả lời...
                </div>
              </div>
              {/* Fallback */}
              <div className="box" style={{ padding: 8, background: "#FEE2E2", borderColor: "var(--w-danger)" }}>
                <div className="tiny" style={{ color: "var(--w-danger)" }}>[Fallback <FR id="FR-CHAT-008" />] Xin lỗi, tôi đang gặp sự cố kết nối.</div>
                <Btn size="sm" style={{ marginTop: 6 }}>Liên hệ nhân viên →</Btn>
              </div>
            </div>
            {/* Input */}
            <div style={{ padding: 8, borderTop: "1.5px solid var(--w-text)", display: "flex", gap: 6 }}>
              <Inp placeholder="Nhập câu hỏi..." style={{ flex: 1 }} />
              <Btn kind="primary" size="sm">→</Btn>
            </div>
          </div>
          <div className="hand" style={{ position: "absolute", top: 24, left: 24, fontSize: 14, maxWidth: 200 }}>
            Guest → session only<br />
            Member → lưu 30 ngày <FR id="FR-CHAT-005" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { A09_Profile, A10_Auth, A11_Forgot, A13_Chatbot };
