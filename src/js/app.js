(async () => {
  try {
    if (navigator.serviceWorker) {
      await navigator.serviceWorker.register("/service-worker.js");
      console.log("sw registered");
    }
  } catch (e) {
    console.log(e);
  }
})();

// const url = "https://service-worker-loading-backend.onrender.com";

function noNetwork() {
  const container = document.querySelector(".news-container");

  container.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="modal">
        <p class="modal-text">
          Не удалось загрузить данные Проверьте подключение и обновите страницу
        </p>
      </div>
      `
  );
}

fetch("http://localhost:7070/api/test")
  .then((r) => r.json())
  .then((r) => console.log(r))
  .catch(() => {
    setTimeout(noNetwork, 3000);
  });
