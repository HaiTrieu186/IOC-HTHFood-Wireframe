// Shared wireframe primitives. All grayscale, low-fi, sketchy.
// Loaded before screen files; exports onto window.
import React from 'react';

const Img = ({ w, h, label = "IMG", style, className = "", children }) => (
  <div className={"img " + className} style={{ width: w, height: h, ...style }}>
    <span>{children || `[${label} ${w}×${h}]`}</span>
  </div>
);

const FR = ({ id }) => <span className="fr">«{id}»</span>;

const Note = ({ children, style }) => (
  <div className="note" style={style}>{children}</div>
);

const Bracket = ({ children }) => <span className="bracket">[{children}]</span>;

const Stars = ({ value = 4, max = 5, size = 14 }) => {
  const full = Math.floor(value);
  return (
    <span className="stars" style={{ fontSize: size }}>
      {"★".repeat(full)}
      <span className="stars-empty">{"★".repeat(max - full)}</span>
    </span>
  );
};

const Tag = ({ kind = "", children, style }) => (
  <span className={"tag " + (kind ? "tag-" + kind : "")} style={style}>{children}</span>
);

const Btn = ({ kind = "", size = "", block, children, style }) => (
  <span
    className={
      "btn" +
      (kind ? " btn-" + kind : "") +
      (size ? " btn-" + size : "") +
      (block ? " btn-block" : "")
    }
    style={style}
  >
    {children}
  </span>
);

const Inp = ({ placeholder, value, w, h, lg, style, suffix }) => (
  <div
    className={"inp " + (lg ? "inp-lg " : "")}
    style={{ width: w, height: h, ...style }}
  >
    <span style={{ flex: 1, color: value ? "var(--w-text)" : "var(--w-mid)" }}>
      {value || placeholder}
    </span>
    {suffix && <span style={{ color: "var(--w-mid)", marginLeft: 8 }}>{suffix}</span>}
  </div>
);

// Generic header shared by customer screens
const CustomerHeader = ({ active = "Thực đơn", member = false, cartCount = 3 }) => (
  <div className="wf-header" style={{ position: "relative" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <Img w={120} h={40} label="LOGO" />
      <span className="hand" style={{ fontSize: 14 }}>wordmark</span>
    </div>
    <nav style={{ display: "flex", gap: 28, fontSize: 14, fontWeight: 600 }}>
      {["Thực đơn", "Thiết kế bánh", "Về chúng tôi", "Chi nhánh"].map((x) => (
        <span
          key={x}
          style={{
            color: active === x ? "var(--w-text)" : "var(--w-text-2)",
            borderBottom: active === x ? "2px solid var(--w-text)" : "none",
            paddingBottom: 4,
          }}
        >
          {x}
        </span>
      ))}
    </nav>
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <span style={{ fontSize: 18 }}>🔍</span>
      <span style={{ position: "relative", fontSize: 18 }}>
        🛒
        <span
          style={{
            position: "absolute",
            top: -6,
            right: -10,
            background: "var(--w-text)",
            color: "white",
            borderRadius: 999,
            padding: "1px 6px",
            fontSize: 10,
            fontWeight: 700,
          }}
        >
          {cartCount}
        </span>
        <FR id="FR-CART-007" />
      </span>
      {member ? (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 999,
              background: "var(--w-bg-3)",
              border: "1.5px solid var(--w-text)",
            }}
          />
          <span style={{ fontSize: 12 }}>▼</span>
        </div>
      ) : (
        <Btn>Đăng nhập</Btn>
      )}
    </div>
    <span
      className="bracket"
      style={{ position: "absolute", top: 6, right: 32 }}
    >
      [STICKY · 72px · border-bottom 1px]
    </span>
  </div>
);

const CustomerFooter = () => (
  <div>
    <div className="wf-footer">
      <div>
        <Img w={100} h={32} label="LOGO" />
        <div className="hand" style={{ marginTop: 8, fontSize: 18 }}>
          "Ăn ngọt cho ngày bớt đắng"
        </div>
      </div>
      <div>
        <div className="h3" style={{ marginBottom: 12 }}>Liên kết nhanh</div>
        <div className="col" style={{ gap: 6, fontSize: 13, color: "var(--w-text-2)" }}>
          <div>Thực đơn</div>
          <div>Cake Builder</div>
          <div>Về chúng tôi</div>
        </div>
      </div>
      <div>
        <div className="h3" style={{ marginBottom: 12 }}>Chi nhánh</div>
        <div style={{ fontSize: 12, color: "var(--w-text-2)" }}>
          123 Nguyễn Văn A, Q.1<br />
          456 Lê Văn B, Q.3<br />
          <span className="hand">giờ mở 7:00–22:00</span>
        </div>
      </div>
      <div>
        <div className="h3" style={{ marginBottom: 12 }}>Liên hệ</div>
        <div className="row" style={{ gap: 8 }}>
          {["fb", "ig", "tt", "yt"].map((s) => (
            <div key={s} className="box" style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>{s}</div>
          ))}
        </div>
        <div style={{ marginTop: 8, fontSize: 12 }}>hotline: 1800-xxxx</div>
      </div>
    </div>
    <div className="wf-footer-bottom">© 2026 HTHFood</div>
  </div>
);

// Chatbot widget (floating)
const ChatbotFab = ({ left }) => (
  <div
    style={{
      position: "absolute",
      bottom: 24,
      right: left ? "auto" : 24,
      left: left || "auto",
      width: 56,
      height: 56,
      borderRadius: 999,
      border: "1.5px solid var(--w-text)",
      background: "var(--w-bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 22,
      boxShadow: "3px 3px 0 var(--w-text)",
    }}
  >
    💬
    <span
      style={{
        position: "absolute",
        top: -4,
        right: -8,
        background: "var(--w-text)",
        color: "white",
        fontSize: 9,
        padding: "1px 5px",
        borderRadius: 999,
        fontWeight: 700,
      }}
    >
      MỚI
    </span>
    <span className="hand" style={{ position: "absolute", bottom: -22, right: 0, whiteSpace: "nowrap", fontSize: 13 }}>
      [FIXED] <FR id="FR-CHAT-001" />
    </span>
  </div>
);

// Generic admin sidebar
const AdminSidebar = ({ active = "Dashboard" }) => {
  const items = [
    ["📊", "Dashboard"],
    ["📦", "Đơn hàng"],
    ["🛍", "Sản phẩm"],
    ["🗂", "Danh mục"],
    ["👥", "Người dùng"],
    ["🎁", "Khuyến mãi"],
    ["🎂", "Cake Builder"],
    ["🤖", "AI Knowledge"],
    ["👔", "HRM"],
    ["⚙", "Cài đặt"],
  ];
  return (
    <div className="sidebar" style={{ minHeight: 900, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
        <Img w={36} h={36} label="L" />
        <div>
          <div className="h3">HTHFood</div>
          <div className="tiny muted">Admin Panel</div>
        </div>
      </div>
      <div className="col" style={{ gap: 4, flex: 1 }}>
        {items.map(([ic, label]) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 12px",
              borderRadius: 4,
              background: active === label ? "var(--w-text)" : "transparent",
              color: active === label ? "white" : "var(--w-text-2)",
              fontWeight: active === label ? 700 : 500,
              fontSize: 13,
            }}
          >
            <span>{ic}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="divider" />
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 999, background: "var(--w-bg-3)", border: "1.5px solid var(--w-text)" }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 12 }}>Admin Nguyễn</div>
          <div className="tiny muted">đăng xuất</div>
        </div>
      </div>
      <span className="bracket" style={{ marginTop: 8 }}>[STICKY]</span>
    </div>
  );
};

export { Img, FR, Note, Bracket, Stars, Tag, Btn, Inp, CustomerHeader, CustomerFooter, ChatbotFab, AdminSidebar };