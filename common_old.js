const fontSizes = { small: "16px", medium: "", large: "23px" };
function setFontSize(size) {
  document.documentElement.style.fontSize = fontSizes[size];
  document.querySelectorAll(".font-size-btn").forEach((btn) => btn.classList.remove("font-size-active"));
  const idx = { small: 0, medium: 1, large: 2 }[size];
  document.querySelectorAll(".font-size-btn")[idx].classList.add("font-size-active");
  localStorage.setItem("fontSize", size);
}
document.addEventListener("DOMContentLoaded", function () {
  const saved = localStorage.getItem("fontSize");
  if (saved && fontSizes[saved]) setFontSize(saved);
});
function showTab(name, btn) {
  document.querySelectorAll(".tab-content").forEach((el) => el.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach((el) => el.classList.remove("active"));
  document.getElementById("tab-" + name).classList.add("active");
  btn.classList.add("active");
  history.replaceState(null, "", "#" + name);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function toggleAnswer(btn) {
  const box = btn.nextElementSibling;
  if (box.style.display === "block") {
    box.style.display = "none";
    btn.textContent = "答えを見る";
  } else {
    box.style.display = "block";
    btn.textContent = "閉じる";
  }
}

// ページ読み込み時にハッシュからタブを復元（スクロール位置は維持）
(function () {
  const hash = location.hash.replace("#", "");
  const validTabs = ["news", "health", "culture"];
  if (validTabs.includes(hash)) {
    const btn = document.querySelector(`.tab-btn[onclick*="'${hash}'"]`);
    if (btn) {
      document.querySelectorAll(".tab-content").forEach((el) => el.classList.remove("active"));
      document.querySelectorAll(".tab-btn").forEach((el) => el.classList.remove("active"));
      document.getElementById("tab-" + hash).classList.add("active");
      btn.classList.add("active");
      history.replaceState(null, "", "#" + hash);
    }
  }
})();

// スクロール位置をリアルタイムで記録
var _lastScrollY = 0;
window.addEventListener("scroll", function () {
  _lastScrollY = document.documentElement.scrollTop;
}, { passive: true });

// Homeボタン用：fromScrollYをURLから読んでindex.htmlに戻る
function goHome(url) {
  const params = new URLSearchParams(window.location.search);
  const scrollY = params.get("fromScrollY") || "0";
  const hashIndex = url.indexOf("#");
  const base = hashIndex >= 0 ? url.substring(0, hashIndex) : url;
  const hash = hashIndex >= 0 ? url.substring(hashIndex) : "";
  window.location.href = base + "?scrollY=" + scrollY + hash;
}
