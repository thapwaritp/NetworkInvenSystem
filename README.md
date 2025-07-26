## Roadmap การพัฒนาแบบเป็นขั้นตอน ##
## Network Inventory System (NIS) ##

🧩 Phase 1: Foundation & Structure
เป้าหมาย: วางโครงสร้างที่มั่นคงและปรับแต่งให้ตอบโจทย์องค์กร
- ปรับโครงสร้าง HTML/CSS ให้เป็น modular และ reusable
- รวม topbar/sidebar เป็น component ที่ควบคุมได้ง่าย
- เพิ่มระบบ theme switching (Light/Dark/Custom Theme)
- รองรับ responsive layout สำหรับทุกอุปกรณ์

💡 Phase 2: UX/UI Enhancements
เป้าหมาย: ทำให้ระบบดู modern และใช้งานลื่นไหล
- เพิ่ม transition/animation ที่ช่วยสร้างประสบการณ์ใช้งานดีขึ้น
- ปรับ sidebar ให้ collapsible, hover-expand ได้
- เพิ่ม icon animations หรือ feedback interactions (เช่น toast notifications)
- ปรับ layout ให้ใช้ grid/flex อย่างมีประสิทธิภา

🛠 Phase 3: Functional Integration
เป้าหมาย: เริ่มผูกระบบกับ backend และดึงข้อมูลจริง
- สร้างระบบล็อกอิน และจัดการสิทธิ์ผู้ใช้งาน
- ดึงข้อมูลจาก API เช่น รายการอุปกรณ์ในระบบ (real-time inventory)
- เพิ่ม search, filter, sort สำหรับข้อมูล
- แสดงรายงานแบบกราฟ/ตาราง โดยใช้ chart library เช่น Chart.js หรือ ApexCharts

🔐 Phase 4: Security & Role Management
เป้าหมาย: ทำให้ระบบมีความปลอดภัยและเหมาะกับการใช้งานจริงในองค์กร
- กำหนด role-based access (admin, staff, viewer)
- เพิ่มระบบ activity logs และการแจ้งเตือน
- รองรับการตรวจสอบ/backup ข้อมูล

🚀 Phase 5: Polishing & Scaling
เป้าหมาย: เตรียมขยายระบบในอนาคตให้ยืดหยุ่น
- รองรับ multi-language (เช่น ไทย/อังกฤษ)
- เพิ่มระบบ plugin/module ที่ต่อยอดได้
- รองรับการ deploy เป็น PWA หรือเชื่อมต่อกับ mobile app
<----------------------------------------------------------------->
📁 โครงสร้างไฟล์ใหม่
- src/
├── index.html                # หน้า entry point ที่รวมทุก component
├── assets/
│   ├── css/
│   │   └── main.css          # CSS หลัก
│   ├── js/
│   │   └── main.js           # JavaScript หลัก
├── components/
│   ├── sidebar.html         # Sidebar component
│   ├── topbar.html          # Topbar component
│   ├── footer.html          # Footer component
│   └── theme-switcher.html  # ปุ่มเปลี่ยนธีม
├── pages/
│   └── dashboard.html       # เนื้อหาหลักของ dashboard
└── utils/
    ├── theme.js             # Logic สำหรับ theme switching
    └── responsive.js        # Logic สำหรับ responsive behavior
<----------------------------------------------------------------->

📐 โครงสร้างของ Google Sheet
คอลัมน์	ชื่อ	Index (Array)
A	วันที่ลงทะเบียน	0
B	ชื่อผู้ใช้	1
C	รหัสผ่าน (SHA-256)	2
D	สิทธิ์การเข้าใช้งาน	3
E	อีเมล	4
F	ชื่อ-นามสกุล	5
G	จำนวนครั้งผิด	6
H	สถานะล็อกบัญชี	7
I	เวลาที่ล็อก	8


🧠 ฟังก์ชัน Google Apps Script
1. hashPassword(password)
สร้าง hash ด้วย SHA-256 สำหรับการเข้ารหัสรหัสผ่านก่อนบันทึก

2. doLogin(email, password)
ตรวจสอบบัญชีจาก Google Sheet
ตรวจสอบสถานะล็อก, เวลาที่ล็อก, และจำนวนครั้งผิด
ปลดล็อกอัตโนมัติหลัง 24 ชั่วโมง
คืนค่า { success, message, role }

3. doSignup(fullname, email, password)
ตรวจสอบไม่ให้สร้างบัญชีซ้ำ
สร้าง username จาก email prefix
เข้ารหัสรหัสผ่านและบันทึกข้อมูลใหม่ลง Sheet

4. doForgot(email)
ตรวจสอบว่ามี email หรือไม่
สามารถใช้ต่อเพื่อเพิ่มระบบ reset จริงได้ภายหลัง

💻 Frontend HTML & JavaScript ที่เชื่อมต่อกับ Backend
✅ หน้า Login
Input: email + password
Remember Me ด้วย localStorage
ระบบ auto logout เมื่อไม่มีการใช้งาน
ใช้ google.script.run.doLogin(email, password) สำหรับ backend

🟩 หน้า Signup
Input: ชื่อ-นามสกุล + email + password + confirm
ตรวจสอบรหัสผ่านตรงกัน
เรียก doSignup(fullname, email, password) ผ่าน google.script.run

🟨 หน้า Forgot Password
Input: email
เรียก doForgot(email) และแจ้งผลผ่าน SweetAlert

🎨 UI Features
ฟีเจอร์	รายละเอียด
👁️ Eye Toggle	แสดง/ซ่อนรหัสผ่านด้วยไอคอน animated
🌗 Theme Switching	สลับ Light/Dark mode แบบทันที
🧊 Splash Logout	แจ้งหมดเวลา session ด้วย SweetAlert + GIF
📱 Responsive Layout	รองรับทั้ง mobile, tablet, desktop อย่างสวย
🧾 SweetAlert	ใช้งานแสดงผล login/signup/reset แบบลื่น ๆ

🔒 Security & Session Management
ใช้ SHA-256 hash สำหรับรหัสผ่าน
จัดการ session ด้วย sessionStorage
ล็อกบัญชีเมื่อรหัสผิด 5 ครั้ง
ปลดล็อกอัตโนมัติหลัง 24 ชั่วโมง
Role-based redirect (admin, user, ฯลฯ)
