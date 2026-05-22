// A-15 Chi nhánh (Branches)
// 1280px wide · Customer screen
/* eslint-disable */
import React from 'react';
import { Img, FR, Note, Bracket, Stars, Tag, Btn, Inp, CustomerHeader, CustomerFooter, ChatbotFab } from './wf-primitives';

const A15_Branches = () => (
  <div className="wf" style={{ position: "relative" }}>
    <CustomerHeader active="Chi nhánh" />

    {/* ─── PAGE HEADER ─── */}
    <div style={{ padding: "40px 64px 24px", borderBottom: "1.5px solid var(--w-line)" }}>
      <div className="row" style={{ alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <Tag kind="solid">3 chi nhánh · TP.HCM</Tag>
          <h1 className="h1" style={{ fontSize: 40, marginTop: 10 }}>Ghé thăm chúng mình 👋</h1>
          <div className="muted" style={{ marginTop: 8, fontSize: 15 }}>
            Mở cửa mỗi ngày · Freeship nội khu từ 200k · Nhận tại quầy không cần đặt trước
          </div>
        </div>
        <div className="row" style={{ gap: 8, alignItems: "center" }}>
          <Inp placeholder="🔍 Tìm theo quận / địa chỉ..." w={280} />
          <Btn>Tìm</Btn>
          <Note>filter realtime <FR id="FR-BRANCH-002" /></Note>
        </div>
      </div>
    </div>

    {/* ─── LAYOUT: MAP LEFT + LIST RIGHT ─── */}
    <div style={{ display: "flex", minHeight: 720 }}>

      {/* ── MAP PANEL ── */}
      <div style={{ flex: 1.4, position: "relative", borderRight: "1.5px solid var(--w-text)" }}>
        {/* Google Maps embed placeholder */}
        <div style={{ position: "relative", height: "100%", minHeight: 720 }}>
          <Img
            w="100%" h="100%"
            label="GOOGLE MAPS EMBED"
            style={{ minHeight: 720, height: "100%" }}
          >
            Google Maps iframe<br />
            src="https://maps.google.com/maps?q=..."<br />
            width="100%" height="100%"<br />
            allowFullScreen loading="lazy"
          </Img>

          {/* Map pins */}
          {[
            { top: "38%", left: "42%", label: "Q.1", active: true },
            { top: "28%", left: "52%", label: "Q.3" },
            { top: "72%", left: "58%", label: "Q.7" },
          ].map((pin) => (
            <div key={pin.label} style={{
              position: "absolute", top: pin.top, left: pin.left,
              transform: "translate(-50%, -100%)",
              display: "flex", flexDirection: "column", alignItems: "center", zIndex: 2,
            }}>
              <div style={{
                background: pin.active ? "var(--w-text)" : "var(--w-bg)",
                color: pin.active ? "white" : "var(--w-text)",
                border: "2px solid var(--w-text)",
                borderRadius: 6,
                padding: "4px 10px",
                fontWeight: 800, fontSize: 12,
                whiteSpace: "nowrap",
                boxShadow: pin.active ? "2px 2px 0 rgba(0,0,0,0.3)" : "none",
              }}>
                🏪 {pin.label}
              </div>
              <div style={{
                width: 0, height: 0,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: `8px solid ${pin.active ? "var(--w-text)" : "var(--w-text)"}`,
              }} />
            </div>
          ))}

          {/* Map controls note */}
          <div className="bracket" style={{
            position: "absolute", bottom: 12, left: 12,
            background: "rgba(255,255,255,0.9)", padding: "4px 8px", borderRadius: 3,
          }}>
            [Google Maps iframe · allowFullScreen · lazy load · <FR id="FR-BRANCH-003" />]
          </div>

          {/* Zoom controls placeholder */}
          <div style={{
            position: "absolute", top: 16, right: 16,
            display: "flex", flexDirection: "column", gap: 2,
          }}>
            <div className="box" style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, background: "white" }}>+</div>
            <div className="box" style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, background: "white" }}>−</div>
          </div>
        </div>
      </div>

      {/* ── BRANCH LIST PANEL ── */}
      <div style={{ width: 420, overflowY: "auto", maxHeight: 720 }}>
        <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--w-line)", background: "var(--w-bg-2)" }}>
          <div className="row" style={{ gap: 6 }}>
            {["Tất cả", "Đang mở", "Dine-in", "Giao hàng"].map((t, i) => (
              <Tag key={t} kind={i === 0 ? "solid" : ""}>{t}</Tag>
            ))}
          </div>
        </div>

        {[
          {
            id: "Q1",
            name: "HTHFood Quận 1",
            badge: "Flagship",
            badgeKind: "solid",
            addr: "123 Nguyễn Văn A, P. Bến Nghé, Q.1, TP.HCM",
            hours: "07:00 – 22:00",
            open: true,
            phone: "028 1234 5678",
            services: ["Dine-in", "Takeaway", "Delivery"],
            note: "Quán gốc · 40 chỗ ngồi · có wifi · parking gần đó",
            maps: "https://maps.google.com/?q=...",
            active: true,
          },
          {
            id: "Q3",
            name: "HTHFood Quận 3",
            badge: "Chuyên bánh cưới",
            badgeKind: "info",
            addr: "456 Lê Văn B, P. 6, Q.3, TP.HCM",
            hours: "07:00 – 21:30",
            open: true,
            phone: "028 8765 4321",
            services: ["Dine-in", "Takeaway", "Delivery"],
            note: "Nhận bánh cưới · custom cake · parking thuận tiện",
            maps: "https://maps.google.com/?q=...",
            active: false,
          },
          {
            id: "Q7",
            name: "HTHFood Quận 7",
            badge: "Mới 2026",
            badgeKind: "ok",
            addr: "789 Trần Văn C, Phú Mỹ Hưng, Q.7, TP.HCM",
            hours: "08:00 – 22:00",
            open: true,
            phone: "028 2468 1357",
            services: ["Dine-in", "Takeaway", "Delivery"],
            note: "Gần RMIT · SC VivoCity · có chỗ ngồi ngoài trời",
            maps: "https://maps.google.com/?q=...",
            active: false,
          },
        ].map((b) => (
          <div
            key={b.id}
            style={{
              padding: 20,
              borderBottom: "1px solid var(--w-line)",
              background: b.active ? "var(--w-bg-2)" : "var(--w-bg)",
              borderLeft: b.active ? "3px solid var(--w-text)" : "3px solid transparent",
              cursor: "pointer",
            }}
          >
            {/* Branch image */}
            <Img w="100%" h={140} label={`PHOTO ${b.name} — ảnh mặt tiền quán`} style={{ borderRadius: 4 }} />

            <div style={{ marginTop: 12 }}>
              <div className="row" style={{ alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <div style={{ fontWeight: 800, fontSize: 15 }}>{b.name}</div>
                <Tag kind={b.badgeKind}>{b.badge}</Tag>
                <Tag kind={b.open ? "ok" : "danger"} style={{ fontSize: 10 }}>
                  {b.open ? "● Đang mở" : "● Đóng cửa"}
                </Tag>
              </div>

              <div className="col" style={{ gap: 4, marginTop: 10, fontSize: 12, color: "var(--w-text-2)" }}>
                <div style={{ display: "flex", gap: 6 }}>
                  <span>📍</span>
                  <span>{b.addr}</span>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <span>🕐</span>
                  <span>{b.hours} · mỗi ngày trong tuần</span>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <span>📞</span>
                  <span>{b.phone}</span>
                </div>
              </div>

              <div className="row" style={{ gap: 4, marginTop: 8, flexWrap: "wrap" }}>
                {b.services.map(s => (
                  <Tag key={s} style={{ fontSize: 10, padding: "2px 8px" }}>{s}</Tag>
                ))}
              </div>

              <div className="hand" style={{ fontSize: 12, marginTop: 6, color: "var(--w-text-2)" }}>
                {b.note}
              </div>

              <div className="row" style={{ gap: 6, marginTop: 12 }}>
                <Btn kind="primary" size="sm" style={{ flex: 1 }}>📍 Chỉ đường</Btn>
                <Btn size="sm" style={{ flex: 1 }}>📋 Đặt trước</Btn>
              </div>
            </div>

            {b.active && (
              <div className="hand" style={{ fontSize: 11, color: "var(--w-text-2)", marginTop: 8, textAlign: "right" }}>
                ← đang xem trên bản đồ
              </div>
            )}
          </div>
        ))}

        <Note style={{ padding: "12px 20px" }}>
          Click chi nhánh → pan map đến pin tương ứng <FR id="FR-BRANCH-001" />
        </Note>
      </div>
    </div>

    {/* ─── THÔNG TIN CHUNG ─── */}
    <div style={{ padding: "48px 64px", background: "var(--w-bg-2)", borderTop: "1.5px solid var(--w-line)" }}>
      <div className="section-title" style={{ marginBottom: 24 }}>
        Thông tin chung tất cả chi nhánh
      </div>
      <div className="grid-4" style={{ gap: 16 }}>
        {[
          { ic: "🕐", title: "Giờ mở cửa", lines: ["T2–T6: 7:00 – 22:00", "T7–CN: 7:00 – 22:30", "Lễ Tết: theo thông báo"] },
          { ic: "🛵", title: "Giao hàng", lines: ["Bán kính 10km mỗi chi nhánh", "2–4 giờ sau khi đặt", "Freeship đơn từ 200k"] },
          { ic: "🅿️", title: "Đỗ xe", lines: ["Q.1: giữ xe gần quán 10k/lần", "Q.3: có sân đỗ miễn phí", "Q.7: bãi SC Vivo gần đó"] },
          { ic: "♿", title: "Tiện ích", lines: ["Wifi miễn phí tại quán", "Ổ cắm điện (Q.1, Q.7)", "Hỗ trợ lăn xe Q.3, Q.7"] },
        ].map((item) => (
          <div key={item.title} className="box" style={{ padding: 16 }}>
            <div style={{ fontSize: 28 }}>{item.ic}</div>
            <div style={{ fontWeight: 700, fontSize: 14, marginTop: 8 }}>{item.title}</div>
            <div className="col" style={{ gap: 3, marginTop: 8 }}>
              {item.lines.map(l => (
                <div key={l} className="tiny muted">{l}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* ─── CTA FRANCHISE ─── */}
    <div style={{ padding: "48px 64px", display: "flex", gap: 48, alignItems: "center", borderTop: "1.5px solid var(--w-line)" }}>
      <div style={{ flex: 1 }}>
        <Tag kind="warn">Muốn mở chi nhánh?</Tag>
        <div className="h2" style={{ marginTop: 12, fontSize: 26 }}>
          Nhượng quyền HTHFood 🏪
        </div>
        <div className="muted" style={{ marginTop: 10, fontSize: 14, lineHeight: 1.7 }}>
          Chúng tôi đang mở rộng ra các tỉnh thành. Nếu bạn có mặt bằng và muốn kinh doanh
          cùng HTHFood, liên hệ để trao đổi thêm nhé.
        </div>
        <div className="row" style={{ gap: 12, marginTop: 16 }}>
          <Btn kind="primary">Liên hệ hợp tác →</Btn>
          <Btn ghost>Tìm hiểu thêm</Btn>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <Img w="100%" h={200} label="IMG — illustration mở chi nhánh mới 560×200" />
      </div>
    </div>

    <CustomerFooter />
    <ChatbotFab />
  </div>
);

export { A15_Branches };
