const toggleBtn = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");

function setTheme(mode) {
  document.body.classList.toggle("light", mode === "light");
  toggleBtn.textContent = mode === "light" ? "🌙" : "☀️";
  localStorage.setItem("theme", mode);
}

setTheme(saved || "dark");

toggleBtn.addEventListener("click", () => {
  setTheme(document.body.classList.contains("light") ? "dark" : "light");
});
