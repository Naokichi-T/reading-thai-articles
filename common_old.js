const fontSizes = { medium: "100%", large: "125%", xlarge: "150%" };
      function setFontSize(size) {
        document.documentElement.style.fontSize = fontSizes[size];
        document.querySelectorAll(".font-size-btn").forEach((btn) => btn.classList.remove("font-size-active"));
        const idx = { medium: 0, large: 1, xlarge: 2 }[size];
        document.querySelectorAll(".font-size-btn")[idx].classList.add("font-size-active");
      }
      function showTab(name, btn) {
        document.querySelectorAll(".tab-content").forEach((el) => el.classList.remove("active"));
        document.querySelectorAll(".tab-btn").forEach((el) => el.classList.remove("active"));
        document.getElementById("tab-" + name).classList.add("active");
        btn.classList.add("active");
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