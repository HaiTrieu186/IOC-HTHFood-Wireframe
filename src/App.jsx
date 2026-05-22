// import React from 'react';
// import './wireframe.css';

// // --- IMPORT TẤT CẢ MÀN HÌNH ---
// import { A01_Homepage, A02_Menu, A03_Product } from './a01-a03';
// import { A04_Cart, A05_Checkout, A06_PaymentResult, A07_OrderTracking, A08_OrderHistory } from './a04-a08';
// import { A09_Profile, A10_Auth, A11_Forgot, A13_Chatbot } from './a09-a13';
// import { A12_CakeBuilder } from './a12';
// import { B01_Dashboard, B02_Orders, B03_Products, B04_Categories } from './b01-b04';
// import { B05_Users, B06_Promos, B07_CakeAdmin, B08_AIKB, B09_HRM, C01_KDS } from './b05-c01';

// function App() {
//   return (
//     <div style={{ backgroundColor: '#e5e5e5', minHeight: '100vh', padding: '20px', display: 'flex', justifyContent: 'center' }}>
      
//       {/* MỞ COMMENT MÀN HÌNH BẠN MUỐN XEM (Xóa ký tự {/* và *} ở 2 đầu) (Ctrl + /)
//         Hiện tại mình đang bật sẵn A01_Homepage.
//       */}

//       <A01_Homepage />
//       {/* <A02_Menu /> */}
//       {/* <A03_Product /> */}
//       {/* <A04_Cart /> */}
//       {/* <A05_Checkout /> */}
//       {/* <A06_PaymentResult/> */}
//       {/* <A07_OrderTracking/> */}
//       {/* <A08_OrderHistory/> */}
//       {/* <A09_Profile/> */}
//       {/* <A10_Auth/> */}
//       {/* <A11_Forgot/> */}
//       {/* <A12_CakeBuilder /> */}
//       {/* <B01_Dashboard /> */}
//       {/* <B02_Orders /> */}
//       {/* <B04_Categories/> */}
//       {/* <B05_Users /> */}
//       {/* <B06_Promos/> */}
//       {/* <B07_CakeAdmin/> */}
//       {/* <B08_AIKB/> */}
//       {/* <B09_HRM/> */}
//       {/* <C01_KDS /> */}

//     </div>
//   );
// }

// export default App;
/// NẾU MUỐN XEM WIREFRAME THỰC TẾ TỪNG TRANG THÌ DÙNG CODE PHÍA TRÊN



import React from 'react';
import ReactDOM from 'react-dom';
import './wireframe.css';
import { DesignCanvas, DCSection, DCArtboard } from './design-canvas';

// Customer screens
import { A01_Homepage, A02_Menu, A03_Product } from './a01-a03';
import { A04_Cart, A05_Checkout, A06_PaymentResult, A07_OrderTracking, A08_OrderHistory } from './a04-a08';
import { A09_Profile, A10_Auth, A11_Forgot, A13_Chatbot } from './a09-a13';
import { A12_CakeBuilder } from './a12';

// Admin / Staff screens
import { B01_Dashboard, B02_Orders, B03_Products, B04_Categories } from './b01-b04';
import { B05_Users, B06_Promos, B07_CakeAdmin, B08_AIKB, B09_HRM, C01_KDS } from './b05-c01';

const W = 1280;

function App() {
  return (
    <DesignCanvas>

      {/* ════════ SECTION 1: Browse ════════ */}
      <DCSection id="customer-browse" title="Customer — Browse" subtitle="A01 · A02 · A03">
        <DCArtboard id="A01" label="A01 · Homepage" width={W} height="auto">
          <A01_Homepage />
        </DCArtboard>
        <DCArtboard id="A02" label="A02 · Thực đơn" width={W} height="auto">
          <A02_Menu />
        </DCArtboard>
        <DCArtboard id="A03" label="A03 · Chi tiết sản phẩm" width={W} height="auto">
          <A03_Product />
        </DCArtboard>
      </DCSection>

      {/* ════════ SECTION 2: Purchase ════════ */}
      <DCSection id="customer-purchase" title="Customer — Purchase" subtitle="A04 → A08">
        <DCArtboard id="A04" label="A04 · Giỏ hàng" width={W} height="auto">
          <A04_Cart />
        </DCArtboard>
        <DCArtboard id="A05" label="A05 · Thanh toán" width={W} height="auto">
          <A05_Checkout />
        </DCArtboard>
        <DCArtboard id="A06" label="A06 · Kết quả thanh toán" width={W} height="auto">
          <A06_PaymentResult />
        </DCArtboard>
        <DCArtboard id="A07" label="A07 · Theo dõi đơn" width={W} height="auto">
          <A07_OrderTracking />
        </DCArtboard>
        <DCArtboard id="A08" label="A08 · Lịch sử đơn hàng" width={W} height="auto">
          <A08_OrderHistory />
        </DCArtboard>
      </DCSection>

      {/* ════════ SECTION 3: Account & Features ════════ */}
      <DCSection id="customer-account" title="Customer — Account & Features" subtitle="A09 · A10 · A11 · A12 · A13">
        <DCArtboard id="A09" label="A09 · Hồ sơ" width={W} height="auto">
          <A09_Profile />
        </DCArtboard>
        <DCArtboard id="A10" label="A10 · Đăng nhập / Đăng ký" width={W} height="auto">
          <A10_Auth />
        </DCArtboard>
        <DCArtboard id="A11" label="A11 · Quên mật khẩu" width={W} height="auto">
          <A11_Forgot />
        </DCArtboard>
        <DCArtboard id="A12" label="A12 · Cake Builder" width={W} height="auto">
          <A12_CakeBuilder />
        </DCArtboard>
        <DCArtboard id="A13" label="A13 · Chatbot" width={W} height="auto">
          <A13_Chatbot />
        </DCArtboard>
      </DCSection>

      {/* ════════ SECTION 4: Admin Operations ════════ */}
      <DCSection id="admin-ops" title="Admin — Operations" subtitle="B01 → B04">
        <DCArtboard id="B01" label="B01 · Dashboard" width={W} height="auto">
          <B01_Dashboard />
        </DCArtboard>
        <DCArtboard id="B02" label="B02 · Đơn hàng" width={W} height="auto">
          <B02_Orders />
        </DCArtboard>
        <DCArtboard id="B03" label="B03 · Sản phẩm" width={W} height="auto">
          <B03_Products />
        </DCArtboard>
        <DCArtboard id="B04" label="B04 · Danh mục" width={W} height="auto">
          <B04_Categories />
        </DCArtboard>
      </DCSection>

      {/* ════════ SECTION 5: Admin Manage & Tools ════════ */}
      <DCSection id="admin-manage" title="Admin — Manage & Tools" subtitle="B05 → B09 · C01">
        <DCArtboard id="B05" label="B05 · Người dùng" width={W} height="auto">
          <B05_Users />
        </DCArtboard>
        <DCArtboard id="B06" label="B06 · Khuyến mãi" width={W} height="auto">
          <B06_Promos />
        </DCArtboard>
        <DCArtboard id="B07" label="B07 · Cake Admin" width={W} height="auto">
          <B07_CakeAdmin />
        </DCArtboard>
        <DCArtboard id="B08" label="B08 · AI Knowledge" width={W} height="auto">
          <B08_AIKB />
        </DCArtboard>
        <DCArtboard id="B09" label="B09 · HRM" width={W} height="auto">
          <B09_HRM />
        </DCArtboard>
        <DCArtboard id="C01" label="C01 · KDS (Kitchen)" width={W} height="auto">
          <C01_KDS />
        </DCArtboard>
      </DCSection>

    </DesignCanvas>
  );
}

export default App;