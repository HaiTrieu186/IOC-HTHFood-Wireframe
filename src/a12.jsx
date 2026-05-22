// A-12 Cake Builder — 7 bước, all rendered stacked in one artboard
/* eslint-disable */
import React from 'react';
import { Img, FR, Note, Bracket, Stars, Tag, Btn, Inp, CustomerHeader, CustomerFooter, ChatbotFab, AdminSidebar } from './wf-primitives';

const StepHeader = ({ step, label }) => (
  <div style={{ position: "sticky", top: 0, background: "var(--w-bg)", padding: "16px 0", borderBottom: "1.5px solid var(--w-text)", zIndex: 3 }}>
    <div className="row" style={{ alignItems: "center", gap: 12 }}>
      <div className="row" style={{ gap: 6 }}>
        {[1, 2, 3, 4, 5, 6, 7].map(i => (
          <div key={i} style={{
            width: 14, height: 14, borderRadius: 999,
            border: "1.5px solid var(--w-text)",
            background: i < step ? "var(--w-text-2)" : i === step ? "var(--w-text)" : "var(--w-bg)",
          }} />
        ))}
      </div>
      <div style={{ fontWeight: 700 }}>Bước {step}/7: {label}</div>
      <FR id="FR-CAKE-003" />
    </div>
    <div className="row" style={{ marginTop: 8, fontSize: 11, color: "var(--w-text-2)", justifyContent: "space-between", maxWidth: 720 }}>
      {["Template", "Kích cỡ", "Hương vị", "Màu sắc", "Chữ", "AI Preview", "Xác nhận"].map((l, i) => (
        <span key={l} style={{ fontWeight: i + 1 === step ? 700 : 400, color: i + 1 === step ? "var(--w-text)" : "var(--w-text-2)" }}>{l}</span>
      ))}
    </div>
  </div>
);

const StepFrame = ({ step, label, children }) => (
  <div className="box" style={{ padding: 0, marginBottom: 32, overflow: "hidden" }}>
    <div style={{ padding: "0 32px" }}>
      <StepHeader step={step} label={label} />
      <div style={{ padding: "24px 0", maxWidth: 900, margin: "0 auto" }}>
        {children}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderTop: "1.5px solid var(--w-line)" }}>
        <Btn ghost>← Quay lại</Btn>
        <Btn kind="primary" size="lg">Tiếp theo →</Btn>
      </div>
    </div>
  </div>
);

const A12_CakeBuilder = () => (
  <div className="wf" style={{ position: "relative" }}>
    <CustomerHeader active="Thiết kế bánh" member />
    <div style={{ padding: "32px 64px" }}>
      <h1 className="h1" style={{ fontSize: 28 }}>Cake Builder — 7 bước</h1>
      <div className="hand tiny">state lưu localStorage, không mất khi F5 <FR id="FR-CAKE-003" /></div>

      {/* BƯỚC 1 */}
      <StepFrame step={1} label="Chọn Template">
        <FR id="FR-CAKE-002" />
        <div className="row" style={{ marginTop: 12, alignItems: "center" }}>
          {["Tất cả", "Sinh nhật", "Đám cưới", "Kỷ niệm", "Khác"].map((t, i) => (
            <Tag key={t} kind={i === 1 ? "solid" : ""}>{t}</Tag>
          ))}
          <div style={{ flex: 1 }} />
          <Inp placeholder="🔍 Tìm template..." w={220} />
        </div>
        <div className="grid-4" style={{ marginTop: 16, gap: 16 }}>
          {[
            { n: "Hồng pastel sinh nhật", o: "Sinh nhật", sel: true },
            { n: "Chibi mascot", o: "Sinh nhật" },
            { n: "Đám cưới 2 tầng", o: "Đám cưới" },
            { n: "Kỷ niệm vintage", o: "Kỷ niệm" },
            { n: "Bánh con vật", o: "Sinh nhật" },
            { n: "Anniversary 5y", o: "Kỷ niệm" },
            { n: "Cake trái cây", o: "Khác" },
            { n: "Bánh chữ", o: "Khác" },
          ].map((t, i) => (
            <div key={i} className="box" style={{
              padding: 8, borderWidth: t.sel ? 2.5 : 1.5,
              position: "relative",
            }}>
              {t.sel && <div style={{ position: "absolute", top: 8, right: 8, width: 22, height: 22, borderRadius: 999, background: "var(--w-text)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>✓</div>}
              <Img w={"100%"} h={140} label="200×200" />
              <div style={{ fontWeight: 700, fontSize: 13, marginTop: 6 }}>{t.n}</div>
              <div className="tiny muted">{t.o}</div>
            </div>
          ))}
        </div>
        <div className="hand tiny" style={{ marginTop: 12 }}>load &lt; 2s · lazy load thumbnails</div>
      </StepFrame>

      {/* BƯỚC 2 */}
      <StepFrame step={2} label="Kích cỡ & Tầng">
        <div className="h3">Kích cỡ bánh</div>
        <div className="grid-4" style={{ marginTop: 12 }}>
          {[
            ["4 inch", "2-3 người", "180.000đ"],
            ["6 inch", "4-6 người", "280.000đ", true],
            ["8 inch", "8-10 người", "380.000đ"],
            ["10 inch", "12-15 người", "480.000đ"],
          ].map(([s, p, pr, sel], i) => (
            <div key={i} className="box" style={{
              padding: 16, textAlign: "center",
              background: sel ? "var(--w-text)" : "var(--w-bg)",
              color: sel ? "white" : "var(--w-text)",
              borderWidth: sel ? 2.5 : 1.5,
            }}>
              <Img w={"100%"} h={100} label="120" style={{ background: sel ? "rgba(255,255,255,0.1)" : undefined }} />
              <div style={{ fontWeight: 800, fontSize: 18, marginTop: 8 }}>{s}</div>
              <div className="tiny" style={{ opacity: 0.7 }}>{p}</div>
              <div style={{ fontWeight: 700, marginTop: 6 }}>{pr}</div>
            </div>
          ))}
        </div>

        <div className="h3" style={{ marginTop: 24 }}>Số tầng</div>
        <div className="row" style={{ marginTop: 12 }}>
          {[["1 tầng", "mặc định", true], ["2 tầng", "+150k"], ["3 tầng", "+300k"]].map(([t, sub, sel]) => (
            <div key={t} className="box" style={{ padding: "12px 24px", background: sel ? "var(--w-text)" : "var(--w-bg)", color: sel ? "white" : "var(--w-text)", borderWidth: sel ? 2.5 : 1.5 }}>
              <div style={{ fontWeight: 700 }}>{t}</div>
              <div className="tiny" style={{ opacity: 0.7 }}>{sub}</div>
            </div>
          ))}
        </div>

        <div className="box box-2" style={{ padding: 16, marginTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Tạm tính <span className="hand tiny">(realtime)</span></span>
          <span className="h2">280.000đ</span>
        </div>
      </StepFrame>

      {/* BƯỚC 3 */}
      <StepFrame step={3} label="Hương vị">
        <div className="h3">Hương vị bánh</div>
        <div className="grid-3" style={{ marginTop: 12, gap: 12 }}>
          {[
            ["Vanilla sponge", "nhẹ, bông xốp", true],
            ["Chocolate", "đậm vị ca cao"],
            ["Red Velvet", "ngọt vừa, cream cheese"],
            ["Matcha", "trà xanh Uji"],
            ["Lemon", "tươi mát"],
            ["Carrot cake", "spices ấm"],
          ].map(([n, d, sel], i) => (
            <div key={i} className="box" style={{ padding: 12, display: "flex", gap: 10, alignItems: "center", borderWidth: sel ? 2.5 : 1.5 }}>
              <Img w={60} h={60} label="100" />
              <div>
                <div style={{ fontWeight: 700, fontSize: 13 }}>{n} {sel && "✓"}</div>
                <div className="tiny muted">{d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="h3" style={{ marginTop: 24 }}>Hương vị kem</div>
        <div className="grid-3" style={{ marginTop: 12, gap: 12 }}>
          {[
            ["Vanilla", "ngọt nhẹ"],
            ["Chocolate", "đậm"],
            ["Matcha", "thanh"],
            ["Strawberry", "dâu tươi", true],
            ["Caramel", "ngọt mặn"],
            ["Cream cheese", "béo"],
          ].map(([n, d, sel], i) => (
            <div key={i} className="box" style={{ padding: 12, display: "flex", gap: 10, alignItems: "center", borderWidth: sel ? 2.5 : 1.5 }}>
              <Img w={60} h={60} label="100" />
              <div>
                <div style={{ fontWeight: 700, fontSize: 13 }}>{n} {sel && "✓"}</div>
                <div className="tiny muted">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </StepFrame>

      {/* BƯỚC 4 */}
      <StepFrame step={4} label="Màu sắc & Trang trí">
        <div className="h3">Màu chủ đạo</div>
        <div className="row" style={{ marginTop: 12, alignItems: "center" }}>
          {[
            { l: "Trắng tinh", c: "#FFFFFF" },
            { l: "Hồng pastel", c: "#FFD6D6", sel: true },
            { l: "Xanh mint", c: "#D6F5E3" },
            { l: "Tím lavender", c: "#E8D6FF" },
            { l: "Vàng kem", c: "#FFF4C2" },
          ].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{
                width: 56, height: 56, borderRadius: 999, background: s.c,
                border: s.sel ? "2.5px solid var(--w-text)" : "1.5px solid var(--w-mid)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, fontWeight: 700,
              }}>{s.sel && "✓"}</div>
              <div className="tiny" style={{ marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
          <Btn>+ Custom color #HEX</Btn>
        </div>

        <div className="h3" style={{ marginTop: 24 }}>Trang trí <span className="hand tiny">(multi-select)</span></div>
        <div className="grid-3" style={{ marginTop: 12, gap: 12 }}>
          {[
            ["🌸", "Hoa tươi", "+50k", true],
            ["🍬", "Hoa đường", "+30k", true],
            ["🔮", "Macaron", "+40k"],
            ["🎎", "Figurine", "+80k"],
            ["✨", "Đèn sparkler", "+25k"],
            ["🍓", "Trái cây tươi", "+35k"],
          ].map(([ic, n, p, sel], i) => (
            <div key={i} className="box" style={{ padding: 12, display: "flex", gap: 10, alignItems: "center", borderWidth: sel ? 2.5 : 1.5 }}>
              <span style={{ width: 16, height: 16, border: "1.5px solid var(--w-text)", background: sel ? "var(--w-text)" : "transparent", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>{sel ? "✓" : ""}</span>
              <Img w={60} h={60} label="80">{ic}</Img>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 13 }}>{n}</div>
                <div className="tiny muted">{p}</div>
              </div>
            </div>
          ))}
        </div>
      </StepFrame>

      {/* BƯỚC 5 */}
      <StepFrame step={5} label="Chữ & Ghi chú">
        <div>
          <div className="h3">Nội dung chữ trên bánh</div>
          <div className="row" style={{ marginTop: 8, alignItems: "center", justifyContent: "space-between" }}>
            <Inp value="Happy Birthday Linh ✿" w={500} />
            <span className="tiny muted">15/50 ký tự</span>
          </div>
        </div>

        <div className="h3" style={{ marginTop: 20 }}>Font chữ</div>
        <div className="grid-4" style={{ marginTop: 12, gap: 12 }}>
          {[
            ["Classic", "Happy", true],
            ["Script", "Happy"],
            ["Bold", "Happy"],
            ["Fun", "Happy"],
          ].map(([n, p, sel]) => (
            <div key={n} className="box" style={{ padding: 16, textAlign: "center", borderWidth: sel ? 2.5 : 1.5, background: sel ? "var(--w-text)" : "var(--w-bg)", color: sel ? "white" : "var(--w-text)" }}>
              <div style={{ fontSize: 28, fontStyle: n === "Script" ? "italic" : "normal", fontFamily: n === "Fun" ? "Caveat, cursive" : "Nunito", fontWeight: n === "Bold" ? 900 : 600 }}>{p}</div>
              <div className="tiny" style={{ marginTop: 8, opacity: 0.7 }}>{n}</div>
            </div>
          ))}
        </div>

        <div className="h3" style={{ marginTop: 20 }}>Màu chữ</div>
        <div className="row" style={{ marginTop: 12 }}>
          {["#000", "#fff", "#D97757", "#F472B6", "#22C55E", "#3B82F6"].map((c, i) => (
            <div key={c} style={{ width: 36, height: 36, borderRadius: 999, background: c, border: i === 0 ? "2.5px solid var(--w-text)" : "1.5px solid var(--w-mid)" }} />
          ))}
        </div>

        <div className="h3" style={{ marginTop: 20 }}>Ghi chú đặc biệt</div>
        <div className="inp" style={{ height: 80, marginTop: 8, alignItems: "flex-start", paddingTop: 10 }}>
          <span className="muted">Dị ứng, yêu cầu riêng...</span>
        </div>
        <div className="tiny muted" style={{ marginTop: 4 }}>max 500 ký tự</div>

        <div className="h3" style={{ marginTop: 20 }}>Upload ảnh tham khảo</div>
        <div className="hand tiny">max 5 file · JPG/PNG ≤ 5MB</div>
        <div className="box box-soft" style={{ padding: 24, marginTop: 8, borderStyle: "dashed", textAlign: "center" }}>
          <div className="muted">⬆ Kéo thả ảnh hoặc <strong style={{ color: "var(--w-text)" }}>browse</strong></div>
        </div>
        <div className="row" style={{ marginTop: 12 }}>
          {[1, 2].map(i => (
            <div key={i} style={{ position: "relative" }}>
              <Img w={80} h={80} label="80" />
              <div style={{ position: "absolute", top: -6, right: -6, width: 20, height: 20, borderRadius: 999, background: "var(--w-text)", color: "white", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>×</div>
            </div>
          ))}
        </div>
      </StepFrame>

      {/* BƯỚC 6 */}
      <StepFrame step={6} label="AI Preview">
        <FR id="FR-CAKE-004" /> <FR id="FR-CAKE-005" />
        <div className="row" style={{ gap: 24, marginTop: 12, alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <div className="h3">Config tóm tắt</div>
            <div className="box box-2" style={{ padding: 16, marginTop: 8, fontSize: 12 }}>
              <div><strong>Template:</strong> Hồng pastel sinh nhật</div>
              <div><strong>Kích cỡ:</strong> 6 inch · 1 tầng</div>
              <div><strong>Hương vị:</strong> Vanilla sponge / Strawberry cream</div>
              <div><strong>Màu:</strong> Hồng pastel</div>
              <div><strong>Trang trí:</strong> Hoa tươi + Hoa đường</div>
              <div><strong>Chữ:</strong> "Happy Birthday Linh ✿"</div>
              <div className="muted hand">(readonly)</div>
            </div>
          </div>
          <div style={{ flex: 1.2, textAlign: "center" }}>
            <Img w={400} h={400} label="AI 400×400 / placeholder" style={{ margin: "0 auto" }}>
              <div className="muted">Chưa có ảnh AI</div>
            </Img>
            <Btn kind="primary" size="lg" style={{ marginTop: 16 }}>✨ Xem trước bằng AI</Btn>
            <div className="hand tiny" style={{ marginTop: 8 }}>Loading state: spinner + "Đang tạo ảnh, chờ 5-15 giây..."</div>
            <div className="box box-2" style={{ padding: 12, marginTop: 12, fontSize: 12, textAlign: "left" }}>
              ⚠ Ảnh chỉ mang tính minh họa, sản phẩm thực tế có thể khác <FR id="FR-CAKE-005" />
            </div>
            <div className="hand tiny" style={{ marginTop: 8 }}>Chỉ được xem trước 1 lần <FR id="FR-CAKE-004" /></div>
            <Btn ghost style={{ marginTop: 12 }}>Bỏ qua, tiếp tục <FR id="FR-CAKE-006" /></Btn>
          </div>
        </div>
      </StepFrame>

      {/* BƯỚC 7 */}
      <StepFrame step={7} label="Xác nhận & Thêm giỏ">
        <FR id="FR-CAKE-007" />
        <div className="h3" style={{ marginTop: 12 }}>Tóm tắt thiết kế bánh</div>
        <div className="box" style={{ padding: 20, marginTop: 12, display: "flex", gap: 24 }}>
          <Img w={200} h={200} label="AI 200×200" />
          <div style={{ flex: 1 }}>
            <div className="col" style={{ gap: 4, fontSize: 13 }}>
              <div><strong>Template:</strong> Hồng pastel sinh nhật</div>
              <div><strong>Kích cỡ:</strong> 6 inch · 1 tầng</div>
              <div><strong>Hương vị bánh:</strong> Vanilla sponge</div>
              <div><strong>Hương vị kem:</strong> Strawberry</div>
              <div><strong>Màu chủ đạo:</strong> Hồng pastel</div>
              <div><strong>Trang trí:</strong> Hoa tươi, Hoa đường</div>
              <div><strong>Chữ trên bánh:</strong> "Happy Birthday Linh ✿"</div>
              <div><strong>Ghi chú:</strong> ít ngọt, không hạt</div>
            </div>
            <hr className="divider" />
            <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
              <span className="muted">Giá tạm tính</span>
              <span className="h2">380.000đ</span>
            </div>
            <Note>Giá chính thức sau khi Admin xác nhận <FR id="FR-CAKE-007" /></Note>
          </div>
        </div>
        <Btn kind="primary" size="lg" block style={{ marginTop: 16 }}>Thêm vào giỏ hàng</Btn>
        <Note>type=CUSTOM_CAKE · lưu JSON options đầy đủ <FR id="FR-CAKE-007" /></Note>
      </StepFrame>
    </div>
    <CustomerFooter />
  </div>
);

export { A12_CakeBuilder };
