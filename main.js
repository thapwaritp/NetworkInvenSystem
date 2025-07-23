// โหลด component แบบ async
async function loadComponent(id, path) {
  const res = await fetch(path);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

// โหลดทุก component
loadComponent("topbar", "components/topbar.html");
loadComponent("sidebar", "components/sidebar.html");
loadComponent("footer", "components/footer.html");
loadComponent("content", "pages/dashboard.html");
