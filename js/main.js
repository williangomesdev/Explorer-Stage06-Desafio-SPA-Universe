const app = document.querySelector("#app");

//retirar padrão dos links
function route(event) {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handle();
}

const routes = {
  "/": "/pages/home.html",
  "/universe": "/pages/universe.html",
  "/explorer": "/pages/explorer.html",
};

function handle() {
  const { pathname } = window.location;
  const route = routes[pathname] || routes["/"];

  fetch(route)
    .then((data) => data.text())
    .then((html) => {
      app.innerHTML = html;
    });
}

handle();
window.onpopstate = () => handle();
window.route = () => route();
