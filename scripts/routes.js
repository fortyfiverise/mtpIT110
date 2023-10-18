document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");

  function loadContent(hash) {
    if (!hash || hash === "#home") {
      fetch("../pages/home.html")
        .then((response) => response.text())
        .then((html) => {
          app.innerHTML = html;
        });
    } else if (hash === "#info") {
      fetch("../pages/info.html")
        .then((response) => response.text())
        .then((html) => {
          app.innerHTML = html;
        });
    } else {
      app.innerHTML = "<h2>404</h2>";
    }
  }

  loadContent(window.location.hash);

  window.addEventListener("hashchange", function () {
    loadContent(window.location.hash);
  });
});
