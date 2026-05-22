// A-14 Về chúng tôi (About Us)
// 1280px wide · Customer screen
/* eslint-disable */
import React from 'react';
import { Img, FR, Note, Bracket, Stars, Tag, Btn, Inp, CustomerHeader, CustomerFooter, ChatbotFab } from './wf-primitives';

const A14_About = () => (
  <div className="wf" style={{ position: "relative" }}>
    <CustomerHeader active="Về chúng tôi" />

    {/* ─── HERO ─── */}
    <div style={{ position: "relative", height: 500, background: "var(--w-bg-3)", borderBottom: "1.5px solid var(--w-text)", overflow: "hidden" }}>
      <Img w="100%" h={500} label="COVER IMG 1280×500 — ảnh 3 đứa đứng trước quán + tạo dáng wibu" style={{ position: "absolute", inset: 0 }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(255,255,255,0.78)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 14,
        textAlign: "center", padding: "0 120px",
      }}>
        <div className="row" style={{ gap: 8 }}>
          <Tag kind="solid">Sinh viên 2k4</Tag>
          <Tag kind="warn">Wibu có tâm 🎌</Tag>
          <Tag kind="ok">Bánh ngon có não 🧠</Tag>
        </div>
        <h1 className="h1" style={{ fontSize: 52, lineHeight: 1.1 }}>
          3 đứa wibu, 1 giấc mơ ngọt<br />
          <span style={{ fontSize: 32, fontWeight: 600 }}>và rất nhiều bột mì.</span>
        </h1>
        <div className="muted" style={{ fontSize: 16, maxWidth: 640 }}>
          HTHFood không sinh ra từ trường kinh doanh hay vốn đầu tư — mà từ một Discord server anime,
          một chiếc lò nướng mini, và câu hỏi: <em>"Ủa bánh Nezuko ngoài đời thật trông sẽ như nào nhỉ?"</em>
        </div>
        <div className="row" style={{ gap: 12, marginTop: 4 }}>
          {[
            ["🎂", "50+", "loại bánh"],
            ["🏪", "3", "chi nhánh"],
            ["⭐", "4.9", "TikTok rating"],
            ["🎓", "Vẫn đang học", "năm 3 đại học"],
          ].map(([ic, val, lbl]) => (
            <div key={lbl} className="box" style={{ padding: "12px 20px", textAlign: "center", minWidth: 130 }}>
              <div style={{ fontSize: 20 }}>{ic}</div>
              <div style={{ fontWeight: 800, fontSize: 18, marginTop: 4 }}>{val}</div>
              <div className="tiny muted">{lbl}</div>
            </div>
          ))}
        </div>
      </div>
      <span className="bracket" style={{ position: "absolute", top: 8, left: 32 }}>[full-width · 500px · overlay]</span>
    </div>

    {/* ─── HTH LÀ GÌ? ─── */}
    <div style={{ padding: "64px 64px 48px", display: "flex", gap: 64, alignItems: "flex-start" }}>
      <div style={{ flex: 1.1 }}>
        <Tag>HTH là gì?</Tag>
        <h2 className="h2" style={{ fontSize: 38, marginTop: 12, lineHeight: 1.2 }}>
          <span style={{ borderBottom: "3px solid var(--w-text)" }}>H</span>iếu ·{" "}
          <span style={{ borderBottom: "3px solid var(--w-text)" }}>T</span>riều ·{" "}
          <span style={{ borderBottom: "3px solid var(--w-text)" }}>H</span>ào
        </h2>
        <div className="hand" style={{ fontSize: 16, marginTop: 6 }}>Ba chữ cái. Ba con người. Một mớ hỗn độn ngon lành.</div>
        <div className="divider" style={{ margin: "20px 0" }} />
        <div style={{ fontSize: 14, lineHeight: 1.85, color: "var(--w-text-2)" }}>
          <p style={{ marginTop: 0 }}>
            Năm 2022, ba đứa quen nhau qua một Discord server chuyên bàn về anime
            (cụ thể là tranh cãi xem Re:Zero hay Mushoku Tensei hay hơn).
            Hiếu học IT ở Tôn Đức Thắng, Triều học Công nghệ Đa phương tiện ở PTIT, Hào học An toàn thông tin ở Huflit —
            không ai học ngành bánh, và đó mới là vấn đề thú vị.
          </p>
          <p>
            Mọi chuyện bắt đầu khi Hiếu đăng lên server ảnh chiếc bánh kem vẽ nhân vật
            <em> Rem (Re:Zero)</em> tự làm để thách bạn bè. 200 reactions trong 1 giờ.
            Hào nhìn vào và nói: <strong style={{ color: "var(--w-text)" }}>"Ủa mày bán được đó."</strong>
            Triều bổ sung: <strong style={{ color: "var(--w-text)" }}>"Tao làm web cho."</strong>
          </p>
          <p style={{ marginBottom: 0 }}>
            Từ đó đến nay, chúng tôi đã giao hơn <strong style={{ color: "var(--w-text)" }}>18.000 đơn bánh</strong>,
            mở 3 chi nhánh tại TP.HCM, và vẫn chưa bỏ học — dù deadline luôn song hành cùng đơn hàng.
          </p>
        </div>
        <div className="hand" style={{ marginTop: 20, fontSize: 16, lineHeight: 1.6 }}>
          "Người ta hỏi sao tụi mình làm được trong khi còn đi học.<br />
          Thật ra là vì chưa ai dạy tụi mình rằng không làm được."
          <div className="tiny muted" style={{ fontFamily: "Nunito, sans-serif", fontStyle: "normal", marginTop: 6 }}>
            — Hào, sau khi thi xong môn Kế toán lúc 11pm rồi đi giao bánh lúc 12am
          </div>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ position: "relative" }}>
          <Img w="100%" h={420} label="IMG — ảnh 3 đứa trong bếp đang trang trí bánh, vẻ mặt tập trung siêu cute" />
          <div className="box tilt-l" style={{
            position: "absolute", bottom: -16, right: -16,
            padding: "10px 16px", background: "var(--w-bg)",
            boxShadow: "4px 4px 0 var(--w-text)", maxWidth: 220,
          }}>
            <div className="hand" style={{ fontSize: 15 }}>Ảnh: 1h sáng trước deadline nộp bài + đơn giao sáng mai 😭</div>
          </div>
          <div className="box tilt-r" style={{
            position: "absolute", top: 16, left: -20,
            padding: "8px 14px", background: "var(--w-bg-2)",
            boxShadow: "3px 3px 0 var(--w-text)",
          }}>
            <div className="hand" style={{ fontSize: 14 }}>đây là bếp nhà Hiếu btw 🏠</div>
          </div>
        </div>
      </div>
    </div>

    {/* ─── TIMELINE ─── */}
    <div style={{ padding: "48px 64px", background: "var(--w-bg-2)", borderTop: "1.5px solid var(--w-line)" }}>
      <div className="section-title" style={{ marginBottom: 40 }}>
        Hành trình (có lúc smooth, có lúc drama)
        <span className="bracket">timeline · 2022 → nay</span>
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 22, left: 44, right: 44, height: 2, background: "var(--w-line)" }} />
        <div style={{ display: "flex", gap: 0 }}>
          {[
            { year: "08/2022", ic: "🎌", title: "Discord arc", desc: "Quen nhau qua server anime. Hiếu post ảnh bánh Rem. Server nổ." },
            { year: "10/2022", ic: "🎂", title: "Đơn đầu tiên", desc: "Nhận 5 đơn từ bạn bè, lời 200k. Dùng tiền mua nguyên liệu tiếp." },
            { year: "03/2023", ic: "📱", title: "TikTok viral", desc: "Clip làm bánh Spy x Family đạt 800k views. DM ngập tràn." },
            { year: "09/2023", ic: "🏠", title: "\"Quán\" đầu tiên", desc: "Thuê mặt bằng nhỏ Q.1 — 3 đứa góp tiền học bổng + sinh viên vay." },
            { year: "2024", ic: "🚀", title: "Mở rộng Q.3", desc: "Chi nhánh 2. Vẫn đang học năm 2. Mẹ Triều lo lắm." },
            { year: "2025", ic: "🤖", title: "AI + Cake Builder", desc: "Triều build hệ thống, Hiếu làm AI chatbot. Đồ án môn học luôn." },
            { year: "2026", ic: "🏪", title: "Chi nhánh Q.7", desc: "Năm 3 đại học. 3 chi nhánh. Vẫn nợ 2 môn. Mọi thứ ổn." },
          ].map((ev, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", zIndex: 1 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 999,
                background: i === 6 ? "var(--w-text)" : "var(--w-bg)",
                border: `2px solid ${i === 6 ? "var(--w-text)" : "var(--w-mid)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, marginBottom: 10, flexShrink: 0,
              }}>{ev.ic}</div>
              <div style={{ fontWeight: 800, fontSize: 11, color: "var(--w-text-2)" }}>{ev.year}</div>
              <div style={{ fontWeight: 700, fontSize: 13, marginTop: 4 }}>{ev.title}</div>
              <div className="tiny muted" style={{ marginTop: 4, lineHeight: 1.5, maxWidth: 130, fontSize: 11 }}>{ev.desc}</div>
              {i === 6 && <Tag kind="solid" style={{ marginTop: 6, fontSize: 10 }}>Hiện tại</Tag>}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ─── ĐỘI NGŨ: 3 CO-FOUNDERS ─── */}
    <div style={{ padding: "48px 64px", borderTop: "1.5px solid var(--w-line)" }}>
      <div className="section-title" style={{ marginBottom: 8 }}>
        Ba đứa đứng sau HTHFood
        <span className="muted tiny">Tuổi: 21 · Trạng thái: đang học + đang bán bánh</span>
      </div>
      <div className="hand muted" style={{ marginBottom: 28, fontSize: 14 }}>
        (không ai trong số này học ngành thực phẩm, điều đó thể hiện rõ qua nhiều lần thất bại ban đầu)
      </div>
      <div className="grid-3" style={{ gap: 24 }}>
        {[
          {
            name: "Huỳnh Vũ Minh Hiếu",
            nickname: "Hiếu / \"H\" đầu",
            school: "ĐH Tôn Đức Thắng",
            major: "Công nghệ thông tin",
            role: "Co-founder · Tech & Vận hành",
            ic: "💻",
            anime: "Steins;Gate, Overlord",
            brag: "Build AI Cake Builder lúc 2am trước ngày demo.",
            quote: "\"Code chạy là được, đừng hỏi tại sao.\"",
            tags: ["AI / Backend", "Server", "Cake thực chiến"],
            tilt: "tilt-l",
          },
          {
            name: "Phạm Nguyễn Hải Triều",
            nickname: "Triều / \"T\" giữa",
            school: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
            major: "Công nghệ Đa phương tiện",
            role: "Co-founder · Product & Hệ thống",
            ic: "📡",
            anime: "Attack on Titan, One Punch Man",
            brag: "Thiết kế toàn bộ luồng đặt hàng + KDS giữa học kỳ 2.",
            quote: "\"Cái gì chạy được thì không phải lỗi (Tôi không nói câu này).\"",
            tags: ["System Design", "Wireframe", "Vừa học vừa lo"],
            tilt: "",
          },
          {
            name: "Hồ Sơn Hào",
            nickname: "Hào / \"H\" cuối",
            school: "ĐH Ngoại ngữ Tin học TP.HCM (HUFLIT)",
            major: "An toàn thông tin",
            role: "Co-founder · Kinh doanh & Marketing",
            ic: "📊",
            anime: "Haikyuu, Kaguya-sama",
            brag: "Viral TikTok 800k views bằng điện thoại cũ + ring light 50k.",
            quote: "\"Khách hàng không cần biết chúng tôi đang nợ 2 môn.\"",
            tags: ["TikTok Content", "Bán hàng", "Kế toán bất đắc dĩ"],
            tilt: "tilt-r",
          },
        ].map((p, i) => (
          <div key={i} className={`box ${p.tilt}`} style={{ padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <Img w={80} h={80} label={`PHOTO ${p.nickname}`} style={{ borderRadius: 8, flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: 15 }}>{p.name}</div>
                <div className="hand" style={{ fontSize: 13, color: "var(--w-text-2)" }}>{p.nickname}</div>
                <Tag style={{ marginTop: 6 }}>{p.role}</Tag>
              </div>
            </div>

            <div className="divider" style={{ margin: "4px 0" }} />

            <div className="col" style={{ gap: 5, fontSize: 12 }}>
              <div><span style={{ fontSize: 14 }}>🎓</span> <strong>{p.school}</strong></div>
              <div className="muted" style={{ paddingLeft: 20 }}>{p.major}</div>
              <div style={{ marginTop: 4 }}><span style={{ fontSize: 14 }}>🎌</span> Đang xem: <em>{p.anime}</em></div>
            </div>

            <div className="box box-2" style={{ padding: "8px 12px" }}>
              <div className="tiny muted" style={{ marginBottom: 2 }}>Thành tích đáng tự hào:</div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>{p.brag}</div>
            </div>

            <div className="hand" style={{ fontSize: 13, color: "var(--w-text-2)", borderLeft: "3px solid var(--w-mid)", paddingLeft: 10 }}>
              {p.quote}
            </div>

            <div className="row" style={{ flexWrap: "wrap", gap: 4, marginTop: 2 }}>
              {p.tags.map(t => <Tag key={t} kind="ghost" style={{ fontSize: 10, padding: "2px 8px" }}>{t}</Tag>)}
            </div>
          </div>
        ))}
      </div>
      <div className="hand" style={{ marginTop: 20, textAlign: "center", fontSize: 14, color: "var(--w-text-2)" }}>
        Ba đứa hiện đang học năm 3 · Lịch học sáng, lịch bán bánh chiều tối · Không có kế hoạch nghỉ học (ba mẹ yên tâm)
      </div>
    </div>

    {/* ─── GIÁ TRỊ CỐT LÕI ─── */}
    <div style={{ padding: "48px 64px", background: "var(--w-bg-2)", borderTop: "1.5px solid var(--w-line)" }}>
      <div style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <Tag>Tại sao lại là bánh?</Tag>
          <div className="h2" style={{ marginTop: 12, fontSize: 26 }}>Vì wibu cũng cần ăn uống.</div>
          <div style={{ marginTop: 14, fontSize: 14, lineHeight: 1.85, color: "var(--w-text-2)" }}>
            Thật ra câu trả lời nghiêm túc hơn: chúng tôi nhận ra rằng đồ ngọt là thứ người ta mua
            khi muốn làm ai đó vui — sinh nhật, kỷ niệm, hoặc đơn giản là "tao buồn, cho tao ăn bánh".
            Đó là thị trường không bao giờ thiếu cảm xúc, và cảm xúc là thứ chúng tôi biết cách thiết kế.
          </div>
          <div className="hand" style={{ marginTop: 16, fontSize: 15 }}>
            Phần wibu giúp chúng tôi làm bánh đẹp hơn người khác. 🎌🎂
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <Tag>Cam kết của 3 đứa</Tag>
          <div className="col" style={{ marginTop: 12, gap: 10 }}>
            {[
              { ic: "🌿", t: "Nguyên liệu tươi mỗi sáng", d: "Không để qua đêm. Hào kiểm tra hàng ngày dù có deadline hay không." },
              { ic: "✋", t: "Tự tay làm", d: "Không dây chuyền. Mỗi bánh custom là một lần Hiếu hoặc Triều ngồi vẽ tay." },
              { ic: "🎌", t: "Design có hồn", d: "Ảnh hưởng từ anime art — đường nét sắc, màu sắc cân, không nhạt nhẽo." },
              { ic: "📦", t: "Bao bì tái chế", d: "Từ 2024, toàn bộ hộp là giấy tái chế. Hào đề xuất, cả nhóm đồng ý ngay." },
            ].map(v => (
              <div key={v.t} className="box" style={{ padding: "10px 14px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{v.ic}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{v.t}</div>
                  <div className="tiny muted" style={{ marginTop: 2 }}>{v.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* ─── THÀNH TỰU ─── */}
    <div style={{ padding: "48px 64px", borderTop: "1.5px solid var(--w-line)" }}>
      <div className="section-title" style={{ marginBottom: 20 }}>
        Vài thứ đáng tự hào (ngoài việc vẫn chưa nợ học phí)
      </div>
      <div className="grid-4" style={{ gap: 16 }}>
        {[
          { ic: "📱", val: "800K+", lbl: "Views TikTok viral đầu tiên", note: "clip làm bánh Spy x Family" },
          { ic: "🎂", val: "18.000+", lbl: "Đơn bánh đã giao", note: "từ 2022 đến nay" },
          { ic: "⭐", val: "4.9 / 5", lbl: "Đánh giá trung bình", note: "2,400+ reviews" },
          { ic: "🏆", val: "Top 10", lbl: "Tiệm bánh TP.HCM 2024", note: "Foody Reviewer's Choice" },
        ].map(a => (
          <div key={a.lbl} className="box" style={{ padding: 20, textAlign: "center" }}>
            <div style={{ fontSize: 28 }}>{a.ic}</div>
            <div style={{ fontWeight: 800, fontSize: 26, marginTop: 8 }}>{a.val}</div>
            <div style={{ fontWeight: 600, fontSize: 13, marginTop: 4 }}>{a.lbl}</div>
            <div className="hand" style={{ fontSize: 12, marginTop: 4 }}>{a.note}</div>
          </div>
        ))}
      </div>
      <div className="box" style={{ marginTop: 16, padding: 16, background: "var(--w-bg-2)", display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{ fontSize: 28 }}>🎓</span>
        <div>
          <div style={{ fontWeight: 700 }}>Đã được đề cập trong bài báo cáo môn Khởi nghiệp của cả 3 đứa.</div>
          <div className="tiny muted">Hiếu, Triều, Hào đều dùng HTHFood làm case study đồ án — tiết kiệm thời gian, thầy chấm cũng thích.</div>
        </div>
        <Tag kind="ok" style={{ flexShrink: 0 }}>Thành tích học thuật ✅</Tag>
      </div>
    </div>

    {/* ─── CHI NHÁNH ─── */}
    <div style={{ padding: "0 64px 48px", background: "var(--w-bg-3)", borderTop: "1.5px solid var(--w-line)" }}>
      <div className="section-title" style={{ paddingTop: 48 }}>
        Ghé tụi mình chơi
        <span className="muted tiny">3 chi nhánh · TP.HCM</span>
      </div>
      <div className="grid-3" style={{ gap: 20 }}>
        {[
          { branch: "Quận 1 — Flagship", addr: "123 Nguyễn Văn A, P. Bến Nghé, Q.1", hours: "7:00 – 22:00", note: "Quán gốc · Hay gặp Hiếu ở đây tầm 5–7pm sau khi tan học 🙂", new: false },
          { branch: "Quận 3", addr: "456 Lê Văn B, P. 6, Q.3", hours: "7:00 – 21:30", note: "Hào trực thứ 7 CN. Nếu thấy người đang học bài sau quầy đó là Hào.", new: false },
          { branch: "Quận 7 — Mới nhất", addr: "789 Trần Văn C, Phú Mỹ Hưng, Q.7", hours: "8:00 – 22:00", note: "Mở tháng 1/2026. Triều kiêm quản lý chi nhánh lẫn ôn thi giữa kỳ.", new: true },
        ].map((b, i) => (
          <div key={i} className="box" style={{ padding: 0, overflow: "hidden" }}>
            <Img w="100%" h={150} label={`MAP placeholder — ${b.branch}`} />
            <div style={{ padding: 16 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ fontWeight: 800, fontSize: 14 }}>{b.branch}</div>
                {b.new && <Tag kind="ok">Mới!</Tag>}
              </div>
              <div className="col" style={{ gap: 3, marginTop: 8, fontSize: 12, color: "var(--w-text-2)" }}>
                <div>📍 {b.addr}</div>
                <div>🕐 {b.hours}</div>
              </div>
              <div className="hand" style={{ fontSize: 13, marginTop: 8, lineHeight: 1.5 }}>{b.note}</div>
              <Btn ghost size="sm" style={{ marginTop: 12 }}>Xem bản đồ →</Btn>
            </div>
          </div>
        ))}
      </div>
      <Note style={{ marginTop: 16 }}>Click "Xem bản đồ" → mở Google Maps embed <FR id="FR-BRANCH-001" /></Note>
    </div>

    {/* ─── CTA ─── */}
    <div style={{ padding: "64px 64px", textAlign: "center", borderTop: "1.5px solid var(--w-line)" }}>
      <div className="h1" style={{ fontSize: 36 }}>Thử một cái gì đó ngọt đi bạn ơi 🎂</div>
      <div className="muted" style={{ marginTop: 10, fontSize: 15 }}>
        3 đứa sinh viên sẽ làm bánh giao tận tay trong 2–4h.<br />
        Hoặc bạn có thể tự thiết kế bánh theo ý thích.
      </div>
      <div className="row" style={{ gap: 16, marginTop: 24, justifyContent: "center" }}>
        <Btn kind="primary" size="lg">Xem thực đơn →</Btn>
        <Btn size="lg">Thiết kế bánh của bạn ✏️</Btn>
      </div>
      <div className="hand" style={{ marginTop: 16, fontSize: 14, color: "var(--w-text-2)" }}>
        Hotline: <strong style={{ color: "var(--w-text)" }}>1800-xxxx</strong> · 7:00–22:00 · (nếu không bắt máy là đang thi giữa kỳ, xin thông cảm)
      </div>
    </div>

    <CustomerFooter />
    <ChatbotFab />
  </div>
);

export { A14_About };