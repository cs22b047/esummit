document.addEventListener("click", function (e) {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (!btn || !menu) return;

  if (btn.contains(e.target)) {
    menu.classList.toggle("hidden");
  }
});
