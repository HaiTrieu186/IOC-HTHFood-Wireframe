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
      <div className="box" style={{ padding: 0, marginBottom: 32, overflow: "hidden" }}>
        <div style={{ padding: "0 32px" }}>
          <StepHeader step={6} label="Xem trước & Chốt đơn (để tụi mình còn chạy deadline)" />
          <div style={{ padding: "24px 0", maxWidth: 960, margin: "0 auto" }}>
            <FR id="FR-CAKE-003" />

            <div className="row" style={{ gap: 40, alignItems: "flex-start" }}>

              {/* ━━━━ CỘT TRÁI: CHỈ CHỨA THÔNG SỐ & FORM NHẬP LIỆU ━━━━ */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                
                {/* 1. Tóm tắt cấu hình */}
                <div>
                  <div className="h3">Yêu cầu của bạn ở đây !!</div>
                  <div className="box box-2" style={{ padding: 16, marginTop: 8, fontSize: 13, lineHeight: 1.8 }}>
                    <div><strong>Template:</strong> Hồng pastel sinh nhật</div>
                    <div><strong>Kích cỡ:</strong> 6 inch · 1 tầng</div>
                    <div><strong>Hương vị bánh:</strong> Vanilla sponge</div>
                    <div><strong>Hương vị kem:</strong> Strawberry</div>
                    <div><strong>Màu chủ đạo:</strong> Hồng pastel</div>
                    <div><strong>Trang trí:</strong> Hoa tươi + Hoa đường</div>
                    <div><strong>Chữ trên bánh:</strong> "Happy Birthday Linh"</div>
                    <div><strong>Font:</strong> Classic · Màu: Đen</div>
                    <div className="muted hand" style={{ marginTop: 8 }}>(readonly · Bấm nút Quay lại ở dưới nếu lỡ tay ấn nhầm)</div>
                  </div>
                </div>

                {/* 2. Giá tạm tính */}
                <div className="box box-2" style={{ padding: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span className="muted">Thiệt hại dự kiến</span>
                    <span className="h2">380.000đ</span>
                  </div>
                  <Note>Giá chính xác có thể xê dịch chút xíu sau khi Admin soi đơn <FR id="FR-CAKE-007" /></Note>
                </div>

                {/* DIVIDER */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--w-mid)", fontSize: 12, marginTop: 8 }}>
                  <hr style={{ flex: 1, border: 0, borderTop: "1.5px dashed var(--w-line)" }} />
                  <span>Vẫn chưa thấy đủ độ nghệ?</span>
                  <hr style={{ flex: 1, border: 0, borderTop: "1.5px dashed var(--w-line)" }} />
                </div>

                {/* 3. FORM INPUT AI */}
                <div className="box box-soft" style={{ padding: 20, background: "var(--w-bg-2)", borderStyle: "dashed" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div className="h3" style={{ fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
                      Chỉnh sửa bằng AI ( 1 lần / phiên )
                    </div>
                    <Tag style={{ fontSize: 10 }}>1 lần/phiên</Tag>
                  </div>
                  <div className="tiny muted" style={{ marginBottom: 16, lineHeight: 1.5 }}>
                    Sửa lại mấy cái bạn chưa vừa ý. Kết quả sẽ nằm ở cột bên phải nha (chờ tầm 5-15s nha).
                  </div>

                  {/* Nhập liệu AI - Dàn ngang */}
                  <div className="grid-2" style={{ gap: "12px" }}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4 }}>Hình dạng bánh</div>
                      <Inp value="Bánh tròn 1 tầng, phong cách sinh nhật" />
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4 }}>Màu sắc</div>
                      <Inp value="Hồng pastel, tông nhạt" />
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4 }}>Trang trí</div>
                      <Inp value="Hoa tươi, hoa đường, rải đều" />
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4 }}>Chữ trên bánh</div>
                      <Inp value="'Happy Birthday Linh'" />
                    </div>
                  </div>

                  {/* Ghi chú bối cảnh */}
                  <div style={{ marginTop: 12 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4 }}>Ghi chú thêm bối cảnh <span className="muted">(Ghi thêm cho AI hiểu)</span></div>
                    <div className="inp" style={{ height: 50, alignItems: "flex-start", paddingTop: 8, background: "var(--w-bg)" }}>
                      <span className="muted" style={{ fontSize: 12 }}>
                        VD: Đặt bánh trên bàn gỗ tiệc ngoài trời, ánh sáng điện ảnh mờ ảo...
                      </span>
                    </div>
                  </div>

                  <Btn ghost block style={{ marginTop: 16, borderColor: "var(--w-text)", color: "var(--w-text)" }}>
                    Bắt đầu chạy AI (5-15s)
                  </Btn>
                  <div className="hand tiny" style={{ marginTop: 8, textAlign: "center", color: "var(--w-text-2)" }}>
                    Nhớ dòm sang cột bên phải
                  </div>
                </div>
              </div>
              {/* ━━━━ END CỘT TRÁI ━━━━ */}


              {/* ━━━━ CỘT PHẢI: CHỈ CHỨA HÌNH ẢNH PREVIEW VÀ NÚT CHỐT ĐƠN ━━━━ */}
              <div style={{ flex: 1.1, display: "flex", flexDirection: "column", gap: 20 }}>
                
                {/* 1. PREVIEW TĨNH CHÍNH */}
                <div className="box" style={{ padding: 24, textAlign: "center", border: "2px solid var(--w-text)", position: "relative" }}>
                  <div className="h3" style={{ fontSize: 18 }}>
                    Bản xem trước nè 
                  </div>
                  <div className="tiny muted" style={{ marginTop: 4 }}>Ghép trực tiếp từ mấy cái option bạn chọn bên trái <FR id="FR-CAKE-004b" /></div>

                  <div style={{ position: "relative", marginTop: 24 }}>
                    <Img w={"100%"} h={320} label="STATIC COMPOSITE PREVIEW" style={{ margin: "0 auto", borderRadius: 8, background: "#f9f9f9" }} />
                    <div style={{ position: "absolute", top: 8, right: 8 }}>
                      <Tag kind="ok">Đã render xong</Tag>
                    </div>
                  </div>

                  <Btn kind="primary" size="lg" block style={{ marginTop: 24, padding: "16px 0", fontSize: 16 }}>
                    Chốt bản tĩnh & Thêm vào giỏ
                  </Btn>
                  <Note style={{ marginTop: 8 }}>Hệ thống lưu JSON đầy đủ, tụi mình nhìn là hiểu <FR id="FR-CAKE-007" /></Note>
                </div>

                {/* 2. KHU VỰC HIỂN THỊ KẾT QUẢ AI */}
                {/* --- DEV NOTE --- */}
                <div className="hand tiny" style={{ margin: "8px 0 -4px", color: "var(--w-text-2)" }}>Các trạng thái UI của bản AI (Dev lưu ý chỉ hiện 1 state lúc runtime):</div>

                {/* STATE 1: Đang loading AI */}
                <div className="box box-soft" style={{ padding: 32, textAlign: "center", background: "var(--w-bg-2)", borderStyle: "dashed" }}>
                  <div style={{ margin: "8px auto", width: 40, height: 40, border: "3px solid var(--w-bg-3)", borderTop: "3px solid var(--w-text)", borderRadius: 999 }} />
                  <div className="muted" style={{ fontWeight: 600, marginTop: 12 }}>AI đang múa cọ...</div>
                  <div className="tiny muted" style={{ marginTop: 4 }}>Vui lòng nhâm nhi ngụm nước chờ 5-15 giây</div>
                </div>

                {/* STATE 2: AI trả kết quả thành công */}
                <div className="box" style={{ padding: 24, textAlign: "center", border: "2px solid var(--w-text)", borderColor: "#D97757", position: "relative" }}>
                  <div className="h3" style={{ fontSize: 18, color: "#D97757" }}>
                    Hàng AI xịn
                  </div>
                  <div className="tiny muted" style={{ marginTop: 4 }}>Bản vẽ lại này tốn kha khá token của tụi mình đó</div>

                  <div style={{ position: "relative", marginTop: 24 }}>
                    <Img w={"100%"} h={320} label="AI GENERATED IMG" style={{ margin: "0 auto", borderRadius: 8 }} />
                  </div>
                  
                  <div className="box" style={{ padding: 10, marginTop: 16, background: "#FFF3CD", borderColor: "var(--w-warn)", color: "#856404", textAlign: "left" }}>
                    <div className="tiny" style={{ fontWeight: 600 }}>Lưu ý nhỏ: Ảnh AI chỉ mang tính chất minh họa ảo tưởng. Bánh thật tụi mình nặn bằng tay nên không có filter xịn xò vậy đâu nha. <FR id="FR-CAKE-005" /></div>
                  </div>

                  <Btn block style={{ marginTop: 16, padding: "16px 0", fontSize: 16, background: "#D97757", color: "#fff", borderColor: "#D97757" }}>
                    Chốt luôn ý tưởng này & Thêm vào giỏ
                  </Btn>
                </div>

                {/* STATE 3: AI lỗi */}
                <div className="box box-soft" style={{ padding: 20, background: "#FEE2E2", borderColor: "var(--w-danger)", textAlign: "center" }}>
                  <div style={{ color: "var(--w-danger)", fontWeight: 600 }}>
                    Server AI bị sảng rồi!
                  </div>
                  <div className="tiny" style={{ color: "var(--w-danger)", marginTop: 4 }}>
                    Bạn có thể cho nó một cơ hội thử lại, hoặc kéo lên trên chốt luôn bản tĩnh cho lẹ.
                  </div>
                  <Btn size="sm" style={{ marginTop: 12 }}>Thử lại lần nữa</Btn>
                </div>

                {/* STATE 4: HẾT LƯỢT AI (MỚI) */}
                <div className="box box-soft" style={{ padding: 24, background: "#FFF0F5", borderColor: "#F472B6", textAlign: "center", borderStyle: "dashed" }}>
                  <div style={{ color: "#BE185D", fontWeight: 700, fontSize: 16 }}>
                    Hết quota gọi AI rồi bạn ơi!
                  </div>
                  <div className="tiny" style={{ color: "#BE185D", marginTop: 8, lineHeight: 1.6 }}>
                    Mỗi phiên thiết kế tụi mình chỉ cho phép AI vẽ lại 1 lần thôi. Bạn iu thông cảm nha !!
                    <br /><br />
                    Cơ mà bản ghép tĩnh ở trên cũng xinh lắm rồi á, bạn xem ưng bụng thì chốt đơn luôn nha! Tụi mình cam kết bánh thật ở ngoài bao nghệ.
                  </div>
                  {/* --- DEV NOTE --- */}
                  <div className="hand tiny" style={{ marginTop: 12, color: "#BE185D", opacity: 0.8 }}>
                    (Frontend note: Nhớ disable nút "Bắt đầu chạy AI" ở cột trái khi user thấy cái thông báo này nha)
                  </div>
                </div>

              </div>
              {/* ━━━━ END CỘT PHẢI ━━━━ */}

            </div>{/* end row */}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderTop: "1.5px solid var(--w-line)" }}>
            <Btn ghost>Quay lại sửa tiếp</Btn>
          </div>
        </div>
      </div>
       
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
