// A-01 Homepage, A-02 Menu, A-03 Product Detail
// All 1280px wide. Customer screens.
/* eslint-disable */
import React from 'react';
import { Img, FR, Note, Bracket, Stars, Tag, Btn, Inp, CustomerHeader, CustomerFooter, ChatbotFab, AdminSidebar } from './wf-primitives';


// ──────────── A-01 HOMEPAGE ────────────
const A01_Homepage = () => (
  <div className="wf" style={{ position: "relative" }}>
    <CustomerHeader />

    {/* HERO */}
    <div style={{ position: "relative", height: 520, background: "var(--w-bg-2)", borderBottom: "1.5px solid var(--w-text)" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 64px", gap: 48 }}>
        <div style={{ flex: 1 }}>
          <h1 className="h1" style={{ fontSize: 56, lineHeight: 1.05 }}>
            Ăn ngọt cho ngày<br />bớt đắng
          </h1>
          <div className="muted" style={{ marginTop: 16, fontSize: 16 }}>
            Bánh tươi mỗi sáng · Giao tới cửa · ★ 4.9 trên TikTok
          </div>
          <div className="row" style={{ marginTop: 28 }}>
            <Btn kind="primary" size="lg">Xem thực đơn</Btn>
            <Btn size="lg">Thiết kế bánh của bạn →</Btn>
          </div>
          <div style={{ marginTop: 32 }}>
            <Tag kind="solid">★ 4.9 · 2,400+ đánh giá</Tag>
          </div>
        </div>
        <Img w={520} h={400} label="HERO IMG 1280×520 (right portion)" />
      </div>
      <span className="bracket" style={{ position: "absolute", top: 8, left: 32 }}>[full-width · 520px]</span>
    </div>

    {/* MARQUEE */}
    <div className="marquee">
      🎂 BÁNH TƯƠI MỖI SÁNG · 🛵 GIAO TỚI CỬA · ★ 4.9 TRÊN TIKTOK · 🎁 FREESHIP ĐƠN 200K · 🎂 BÁNH TƯƠI MỖI SÁNG · 🛵 GIAO TỚI CỬA
      <span className="bracket" style={{ marginLeft: 16, color: "#999" }}>[scrolling]</span>
    </div>

    {/* CATEGORY TILES */}
    <div style={{ padding: "48px 64px" }}>
      <div className="section-title">
        Khám phá thực đơn
        <span className="hand" style={{ fontSize: 14 }}>tilt ±1.5° alternating <FR id="FR-ADMIN-003" /></span>
      </div>
      <div className="grid-6" style={{ gap: 20 }}>
        {[
          ["Bánh kem", "🎂"], ["Bánh mì", "🥖"], ["Thức uống", "🥤"],
          ["Combo", "📦"], ["Bánh theo yêu cầu", "✏️"], ["Xem tất cả →", "→"],
        ].map(([label, ic], i) => (
          <div key={label} className={i % 2 ? "tilt-r" : "tilt-l"} style={{ textAlign: "center" }}>
            <Img w={"100%"} h={150} label={`IMG 180×180`} />
            <div style={{ marginTop: 8, fontWeight: 700, fontSize: 13 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* HOT PRODUCTS */}
    <div style={{ padding: "0 64px 48px" }}>
      <div className="section-title">
        Đang hot 🔥
        <span className="muted tiny">Xem tất cả sản phẩm →</span>
      </div>
      <div className="grid-4">
        {[
          { name: "Bánh kem dâu tây 6 inch", price: "185.000đ", old: "220.000đ", badge: "HOT", rate: 4.5, n: 128 },
          { name: "Trà sữa matcha size L", price: "55.000đ", badge: "MỚI", rate: 4.8, n: 96 },
          { name: "Croissant hạnh nhân", price: "45.000đ", badge: "BÁN CHẠY", rate: 4.7, n: 240 },
          { name: "Bánh flan caramel", price: "35.000đ", oos: true, rate: 4.3, n: 88 },
        ].map((p, i) => (
          <div key={i} className={"pcard" + (p.oos ? " pcard-oos" : "")}>
            <div style={{ position: "absolute", top: 12, left: 12, zIndex: 2 }}>
              {p.badge && <Tag kind="solid">{p.badge}</Tag>}
            </div>
            <Img w={"100%"} h={160} label="IMG 240×180" />
            <div style={{ fontWeight: 700, fontSize: 14, minHeight: 36 }}>{p.name}</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontWeight: 700, fontSize: 16 }}>{p.price}</span>
              {p.old && <span style={{ textDecoration: "line-through", color: "var(--w-mid)", fontSize: 12 }}>{p.old}</span>}
            </div>
            <div className="tiny muted">
              <Stars value={p.rate} size={12} /> ({p.rate}) · {p.n} đánh giá
            </div>
            {p.oos ? (
              <Btn kind="disabled" block>+ Thêm vào giỏ</Btn>
            ) : (
              <Btn kind="primary" block>+ Thêm vào giỏ <FR id="FR-CART-004" /></Btn>
            )}
            {p.oos && <Note>BR-PROD-005 button disabled khi hết hàng</Note>}
          </div>
        ))}
      </div>
    </div>

    {/* PROMOS */}
    <div style={{ padding: "0 64px 48px", background: "var(--w-bg-2)" }}>
      <div className="section-title" style={{ paddingTop: 48 }}>Ưu đãi đang chạy</div>
      <div className="grid-2" style={{ gridTemplateColumns: "1.5fr 1fr", gap: 24 }}>
        <div className="box" style={{ position: "relative" }}>
          <Img w={"100%"} h={280} label="BANNER 600×280">
            <div style={{ padding: 16 }}>
              <div className="h2" style={{ fontSize: 28 }}>Freeship đơn từ 200k</div>
              <div className="muted">áp dụng nội thành HCM</div>
            </div>
          </Img>
        </div>
        <div className="col">
          {[
            { code: "HELLO50", desc: "Giảm 50.000đ cho đơn đầu", exp: "HSD 31/12/2026" },
            { code: "BIRTHDAY20", desc: "Giảm 20% bánh sinh nhật", exp: "HSD 30/06/2026" },
          ].map((v) => (
            <div key={v.code} className="box" style={{ padding: 16, display: "flex", gap: 12, alignItems: "center" }}>
              <div className="box-2" style={{ padding: "12px 16px", borderRadius: 6, border: "1.5px dashed var(--w-text)" }}>
                <div className="mono" style={{ fontWeight: 700, fontSize: 16 }}>{v.code}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 13 }}>{v.desc}</div>
                <div className="tiny muted">{v.exp}</div>
              </div>
              <Btn size="sm">Lưu mã <FR id="FR-PROMO" /></Btn>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CAKE BUILDER TEASER */}
    <div style={{ padding: "48px 64px", background: "var(--w-bg-3)", display: "flex", alignItems: "center", gap: 48 }}>
      <div style={{ flex: 1 }}>
        <div className="h1" style={{ fontSize: 40 }}>Tự thiết kế bánh<br />theo ý bạn</div>
        <div className="muted" style={{ marginTop: 12 }}>7 bước · Preview AI · Giao tận nơi</div>
        <div className="row" style={{ marginTop: 16, fontSize: 12, flexWrap: "wrap" }}>
          {["1·Template", "2·Size", "3·Vị", "4·Màu", "5·Chữ", "6·AI", "7·Xác nhận"].map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          <Btn kind="primary" size="lg">Bắt đầu thiết kế →</Btn>
          <Note>redirect /cake-builder · yêu cầu đăng nhập <FR id="FR-CAKE-001" /></Note>
        </div>
      </div>
      <Img w={480} h={360} label="IMG preview bánh 480×360" />
    </div>

    {/* REVIEWS */}
    <div style={{ padding: "48px 64px" }}>
      <div className="section-title">Đánh giá khách hàng</div>
      <div className="grid-3">
        {[
          { name: "Nguyễn Thị A", date: "20/05/2026", c: "Bánh ngon, giao nhanh, đóng gói cute xỉu 💗" },
          { name: "Trần Văn B", date: "18/05/2026", c: "Đặt bánh sinh nhật, mascot dễ thương, chữ đúng yêu cầu." },
          { name: "Lê C", date: "15/05/2026", c: "Trà sữa matcha đậm vị, không ngọt gắt như chỗ khác." },
        ].map((r, i) => (
          <div key={i} className={"pcard " + (i % 2 ? "tilt-r" : "tilt-l")} style={{ gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Img w={48} h={48} label="48×48" />
              <div>
                <div style={{ fontWeight: 700, fontSize: 13 }}>{r.name}</div>
                <div className="tiny muted">{r.date}</div>
              </div>
            </div>
            <Stars value={5} size={14} />
            <div style={{ fontSize: 13 }}>{r.c}</div>
          </div>
        ))}
      </div>
    </div>

    <CustomerFooter />
    <ChatbotFab />
  </div>
);

// ──────────── A-02 MENU ────────────
const A02_Menu = () => (
  <div className="wf" style={{ position: "relative" }}>
    <CustomerHeader active="Thực đơn" />
    <div style={{ display: "flex", minHeight: 1100 }}>
      {/* SIDEBAR */}
      <div className="sidebar" style={{ width: 260, position: "relative" }}>
        <Inp placeholder="🔍 Tìm sản phẩm..." />
        <div className="h3" style={{ margin: "20px 0 8px" }}>Danh mục <FR id="BR-PROD-001" /></div>
        <div className="col" style={{ gap: 4, fontSize: 13 }}>
          <div style={{ fontWeight: 700 }}>▼ 🎂 Bánh kem (12)</div>
          <div style={{ paddingLeft: 16, background: "var(--w-text)", color: "white", padding: "4px 12px", borderRadius: 4 }}>• Bánh sinh nhật (8)</div>
          <div style={{ paddingLeft: 16, color: "var(--w-text-2)" }}>• Bánh cưới (4)</div>
          <div style={{ fontWeight: 700, marginTop: 6 }}>▼ 🥤 Thức uống (20)</div>
          <div style={{ paddingLeft: 16, color: "var(--w-text-2)" }}>• Trà sữa (10)</div>
          <div style={{ paddingLeft: 16, color: "var(--w-text-2)" }}>• Cà phê (10)</div>
          <div style={{ fontWeight: 700, marginTop: 6 }}>► 🥖 Bánh mì (6)</div>
          <div style={{ fontWeight: 700 }}>► 📦 Combo (5)</div>
          <div className="muted tiny" style={{ marginTop: 6 }}>Xem tất cả</div>
        </div>
        <div className="divider" />
        <div className="h3" style={{ marginBottom: 8 }}>Lọc theo</div>
        <div style={{ fontSize: 12, fontWeight: 600 }}>Giá</div>
        <div className="row" style={{ alignItems: "center", marginTop: 6 }}>
          <Inp placeholder="0đ" w={80} />
          <span>—</span>
          <Inp placeholder="500k" w={80} />
        </div>
        <div style={{ height: 4, background: "var(--w-bg-3)", borderRadius: 999, margin: "12px 0", position: "relative" }}>
          <div style={{ position: "absolute", left: "20%", right: "30%", top: 0, bottom: 0, background: "var(--w-text)", borderRadius: 999 }} />
          <div style={{ position: "absolute", left: "20%", top: -4, width: 12, height: 12, background: "var(--w-text)", borderRadius: 999 }} />
          <div style={{ position: "absolute", left: "70%", top: -4, width: 12, height: 12, background: "var(--w-text)", borderRadius: 999 }} />
        </div>
        <div style={{ fontSize: 12, fontWeight: 600, marginTop: 12 }}>Tags</div>
        <div className="col" style={{ gap: 6, marginTop: 6, fontSize: 13 }}>
          {["Nổi bật", "Bán chạy", "Được yêu thích"].map((t, i) => (
            <label key={t} style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ width: 14, height: 14, border: "1.5px solid var(--w-text)", display: "inline-block", background: i === 1 ? "var(--w-text)" : "transparent" }} />
              {t}
            </label>
          ))}
        </div>
        <Btn block style={{ marginTop: 16 }}>Áp dụng bộ lọc</Btn>
        <span className="bracket" style={{ position: "absolute", top: 6, right: 12 }}>[STICKY top:72px]</span>
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, padding: 32 }}>
        <div className="tiny muted">Trang chủ &gt; Thực đơn &gt; <span style={{ color: "var(--w-text)", fontWeight: 700 }}>Bánh kem</span></div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
          <div className="h2">24 sản phẩm</div>
          <Inp placeholder="Sắp xếp: Phổ biến nhất ▼" w={220} />
        </div>

        <div className="grid-3" style={{ marginTop: 24 }}>
          {[
            { name: "Bánh kem dâu 6 inch", price: "185.000đ", badge: "HOT", rate: 4.5 },
            { name: "Bánh kem chocolate 8 inch", price: "240.000đ", badge: "BÁN CHẠY", rate: 4.7 },
            { name: "Bánh kem matcha 6 inch", price: "195.000đ", rate: 4.4 },
            { name: "Bánh kem red velvet", price: "210.000đ", oos: true, rate: 4.6 },
            { name: "Bánh kem caramel 8 inch", price: "230.000đ", rate: 4.3 },
            { name: "Bánh kem oreo (ngừng KD)", price: "180.000đ", discontinued: true, rate: 4.2 },
            { name: "Bánh kem cheese 6 inch", price: "200.000đ", badge: "MỚI", rate: 4.8 },
            { name: "Bánh kem trái cây", price: "175.000đ", rate: 4.5 },
            { name: "Bánh kem tiramisu", price: "220.000đ", rate: 4.6 },
          ].map((p, i) => (
            <div key={i} className={"pcard" + (p.oos ? " pcard-oos" : "")}>
              <div style={{ position: "absolute", top: 12, left: 12, zIndex: 2, display: "flex", gap: 4 }}>
                {p.badge && <Tag kind="solid">{p.badge}</Tag>}
                {p.discontinued && <Tag kind="danger">Ngừng KD <FR id="BR-PROD-008" /></Tag>}
              </div>
              <Img w={"100%"} h={140} label="IMG" />
              <div style={{ fontWeight: 700, fontSize: 13, minHeight: 36 }}>{p.name}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontWeight: 700, fontSize: 14 }}>{p.price}</span>
              </div>
              <div className="tiny muted"><Stars value={p.rate} size={11} /> ({p.rate})</div>
              {p.oos || p.discontinued
                ? <Btn kind="disabled" block size="sm">+ Thêm vào giỏ</Btn>
                : <Btn kind="primary" block size="sm">+ Thêm vào giỏ</Btn>
              }
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, display: "flex", justifyContent: "center", gap: 8 }}>
          {["«", "1", "2", "3", "4", "...", "8", "»"].map((p, i) => (
            <div key={i} className="box" style={{
              padding: "6px 12px", minWidth: 32, textAlign: "center",
              background: p === "2" ? "var(--w-text)" : "var(--w-bg)",
              color: p === "2" ? "white" : "var(--w-text)",
              fontWeight: 600, fontSize: 13,
            }}>{p}</div>
          ))}
        </div>
      </div>
    </div>
    <CustomerFooter />
    <ChatbotFab />
  </div>
);

// ──────────── A-03 PRODUCT DETAIL ────────────
const A03_Product = () => (
  <div className="wf" style={{ position: "relative" }}>
    <CustomerHeader active="Thực đơn" />
    <div style={{ padding: "24px 64px" }}>
      <div className="tiny muted">Trang chủ &gt; Bánh kem &gt; <span style={{ color: "var(--w-text)", fontWeight: 700 }}>Bánh kem dâu tây</span></div>
      <div style={{ display: "flex", gap: 32, marginTop: 16 }}>
        {/* LEFT — Images */}
        <div style={{ width: 540 }}>
          <div style={{ position: "relative" }}>
            <Img w={540} h={400} label="MAIN IMG 540×400" />
            <div style={{ position: "absolute", top: "50%", left: 8, transform: "translateY(-50%)" }} className="box" >‹</div>
            <div style={{ position: "absolute", top: "50%", right: 8, transform: "translateY(-50%)" }} className="box">›</div>
          </div>
          <div className="row" style={{ marginTop: 12 }}>
            {[0, 1, 2, 3].map(i => (
              <div key={i} style={{
                border: i === 0 ? "2.5px solid var(--w-text)" : "1.5px solid var(--w-mid)",
                borderRadius: 4,
              }}>
                <Img w={80} h={80} label={`80×80`} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Info */}
        <div style={{ flex: 1 }}>
          <div className="row" style={{ gap: 6 }}>
            <Tag kind="solid">BÁN CHẠY</Tag>
            <Tag kind="warn">CÒN 8 CÁI</Tag>
          </div>
          <h1 className="h1" style={{ fontSize: 32, marginTop: 12 }}>Bánh kem dâu tây tươi 6 inch</h1>
          <div className="row" style={{ alignItems: "center", marginTop: 8 }}>
            <Stars value={4} /> <span className="muted tiny">4.2 · 128 đánh giá · xem đánh giá ↓</span>
          </div>
          <div style={{ marginTop: 16, display: "flex", alignItems: "baseline", gap: 12 }}>
            <span style={{ fontWeight: 800, fontSize: 32 }}>185.000đ</span>
            <span style={{ textDecoration: "line-through", color: "var(--w-mid)" }}>220.000đ</span>
            <FR id="BR-PROD-002" />
          </div>
          <hr className="divider" />

          {/* Option: size */}
          <div className="h3" style={{ marginBottom: 8 }}>Kích cỡ <FR id="BR-PROD-004" /></div>
          <div className="row" style={{ flexWrap: "wrap", gap: 8 }}>
            {[
              ["4 inch", "2-3 người"],
              ["6 inch ✓", "4-6 người"],
              ["8 inch", "8-10 người"],
              ["10 inch", "12-15 người"],
            ].map(([s, p], i) => (
              <div key={s} className="box" style={{
                padding: "8px 14px",
                background: i === 1 ? "var(--w-text)" : "var(--w-bg)",
                color: i === 1 ? "white" : "var(--w-text)",
              }}>
                <div style={{ fontWeight: 700, fontSize: 13 }}>{s}</div>
                <div className="tiny" style={{ opacity: 0.7 }}>{p}</div>
              </div>
            ))}
          </div>
          <Note>giá thay đổi theo size</Note>

          <div className="h3" style={{ marginTop: 20, marginBottom: 8 }}>Hương vị kem</div>
          <div className="row" style={{ flexWrap: "wrap", gap: 8 }}>
            {[["Vanilla ✓", true], ["Chocolate"], ["Matcha"], ["Dâu"], ["Caramel"]].map(([s, a]) => (
              <div key={s} className="box" style={{
                padding: "6px 12px",
                background: a ? "var(--w-text)" : "var(--w-bg)",
                color: a ? "white" : "var(--w-text)",
                fontSize: 13, fontWeight: 600,
              }}>{s}</div>
            ))}
          </div>

          <div className="h3" style={{ marginTop: 20, marginBottom: 8 }}>Ghi chú</div>
          <div className="inp" style={{ height: 60, alignItems: "flex-start", paddingTop: 10 }}>
            <span className="muted">Ví dụ: ít ngọt, thêm topping...</span>
          </div>
          <div className="tiny muted" style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
            <span>max 200 ký tự <FR id="FR-CART-002" /></span>
            <span>0/200</span>
          </div>

          <div className="row" style={{ alignItems: "center", gap: 16, marginTop: 20 }}>
            <div className="box" style={{ display: "flex", alignItems: "center" }}>
              <div style={{ padding: "8px 14px", borderRight: "1.5px solid var(--w-text)", fontWeight: 700 }}>−</div>
              <div style={{ padding: "8px 20px", fontWeight: 700 }}>2</div>
              <div style={{ padding: "8px 14px", borderLeft: "1.5px solid var(--w-text)", fontWeight: 700 }}>+</div>
            </div>
            <Note>debounce 300ms <FR id="FR-CART-006" /></Note>
          </div>

          <div className="row" style={{ marginTop: 20 }}>
            <Btn kind="primary" size="lg" style={{ flex: 1 }}>🛒 Thêm vào giỏ <FR id="FR-CART-004" /></Btn>
            <Btn size="lg">♡ Yêu thích</Btn>
          </div>
          <div className="hand" style={{ fontSize: 13, marginTop: 6 }}>nếu hết hàng → button disabled <FR id="BR-PROD-005" /></div>

          <div className="row" style={{ marginTop: 20, gap: 24, fontSize: 13 }}>
            <div>🛵 Giao trong 2-4h</div>
            <div>🏪 Nhận tại quầy</div>
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div style={{ marginTop: 48 }}>
        <div className="section-title">128 đánh giá <FR id="FR-ORDER-005" /></div>
        <div className="grid-2" style={{ gridTemplateColumns: "260px 1fr", gap: 24 }}>
          <div className="box" style={{ padding: 16 }}>
            <div className="h1" style={{ fontSize: 40 }}>4.2 <span style={{ fontSize: 14, color: "var(--w-text-2)", fontWeight: 500 }}>/5</span></div>
            <Stars value={4} />
            <div className="col" style={{ gap: 4, marginTop: 12 }}>
              {[[5, 60], [4, 30], [3, 10], [2, 0], [1, 0]].map(([s, p]) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
                  <span>{s}★</span>
                  <div style={{ flex: 1, height: 8, background: "var(--w-bg-3)", borderRadius: 4, position: "relative" }}>
                    <div style={{ position: "absolute", inset: 0, right: `${100 - p}%`, background: "var(--w-text)", borderRadius: 4 }} />
                  </div>
                  <span style={{ width: 30, textAlign: "right" }}>{p}%</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="row" style={{ marginBottom: 12 }}>
              {["Tất cả", "5★", "4★", "Có ảnh"].map((t, i) => (
                <Tag key={t} kind={i === 0 ? "solid" : ""}>{t}</Tag>
              ))}
            </div>
            <div className="col">
              {[
                { name: "Lê Thị D", date: "18/05/2026", r: 5, img: true, c: "Bánh tươi, dâu ngon, đóng gói cute. Đã đặt lần 3 rồi." },
                { name: "Phạm V", date: "12/05/2026", r: 4, c: "Vị ổn, ship hơi lâu chút." },
              ].map((r, i) => (
                <div key={i} className="box" style={{ padding: 16 }}>
                  <div style={{ display: "flex", gap: 12 }}>
                    <Img w={40} h={40} label="40" />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700 }}>{r.name} <span className="tiny muted">· {r.date}</span></div>
                      <Stars value={r.r} size={12} />
                      <div style={{ marginTop: 6, fontSize: 13 }}>{r.c}</div>
                      {r.img && (
                        <div className="row" style={{ marginTop: 8 }}>
                          {[1,2].map(j => <Img key={j} w={60} h={60} label="60" />)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hand tiny" style={{ marginTop: 8 }}>max 500 ký tự / comment · pagination ↓</div>
          </div>
        </div>
      </div>

      {/* SIMILAR */}
      <div style={{ marginTop: 48 }}>
        <div className="section-title">Có thể bạn thích</div>
        <div className="grid-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="pcard">
              <Img w={"100%"} h={140} label="IMG" />
              <div style={{ fontWeight: 700, fontSize: 13 }}>Bánh kem matcha {i*2} inch</div>
              <div style={{ fontWeight: 700 }}>{(150 + i * 20)}.000đ</div>
              <Btn kind="primary" block size="sm">+ Thêm vào giỏ</Btn>
            </div>
          ))}
        </div>
      </div>
    </div>
    <CustomerFooter />
    <ChatbotFab />
  </div>
);

export { A01_Homepage, A02_Menu, A03_Product };
