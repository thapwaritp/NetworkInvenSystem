🧩 โครงสร้างระบบเบื้องต้น
1. ไฟล์หลัก
index.html — โครงสร้าง HTML และเมนูพื้นฐาน
style.css — ปรับแต่ง CSS รวม Tailwind และ Bootstrap
script.js — ฟังก์ชัน UI, theme switching, menu control
Code.gs — ฝั่ง Google Apps Script สำหรับ backend เช่น role-based access, session

🎨 การออกแบบหน้า Dashboard
✅ Layout หลัก
ใช้ flex หรือ grid ของ Tailwind CSS จัดวาง sidebar และ topbar
sidebar เป็น component หลัก ติดด้านซ้าย มีเมนู + icon
topbar ย่อขยายตาม sidebar โดยใช้ transition และ width binding
กำหนด responsiveness ด้วย Tailwind class เช่น md:flex, lg:w-[calc(100%-sidebar-width)]

🌗 Theme Switching
javascript
function switchTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem("theme", mode);
}
สร้าง :root CSS สำหรับแต่ละ theme
เรียกใช้ switchTheme('dark'), 'light', 'custom'

⚙️ Sidebar Functionality
🔹 โหมด Collapsible / Hover-expand
javascript
const sidebar = document.getElementById('sidebar');
sidebar.addEventListener('mouseenter', () => sidebar.classList.add('expanded'));
sidebar.addEventListener('mouseleave', () => sidebar.classList.remove('expanded'));
ใช้ class Tailwind เช่น w-16 และ hover:w-64 transition-all duration-300

🔹 เมนูพร้อม Role-based Access
javascript
const userRole = Session.getActiveUser().getEmail().includes('@admin.com') ? 'admin' : 'user';
const allowedMenus = {
  admin: ['home', 'inventory', 'repair', 'return', 'userManagement', 'settings'],
  user: ['home', 'inventory', 'repair', 'return']
};
ใช้ฟังก์ชัน Apps Script ดึง role และ return HTML ที่เหมาะสม

✨ Toast Notification
ใช้ SweetAlert หรือสร้าง component แบบ custom:

javascript
Swal.fire({
  icon: 'success',
  title: 'บันทึกข้อมูลเรียบร้อย',
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 2000
});

🌀 Icon Animation
ใช้ Tailwind class เช่น hover:scale-110, transition-transform, หรือ animate.css สำหรับ bounce/fade effects

🧪 ตัวอย่าง Navigation Component
javascript
function loadPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(p => p.style.display = "none");
  document.getElementById(pageId).style.display = "block";
}

document.querySelectorAll(".menu-item").forEach(btn => {
  btn.addEventListener("click", () => {
    const page = btn.dataset.page;
    loadPage(page);
  });
});
