const app = document.querySelector("#app");
const body = document.querySelector("body");
const homeLink = document.querySelector("#homeLink");
const universeLink = document.querySelector("#universeLink");
const explorerLink = document.querySelector("#explorerLink");

homeLink.addEventListener("click", () => {
  homeLink.classList.toggle("active");
  universeLink.classList.remove("active");
  explorerLink.classList.remove("active");
  body.classList.add("home");
  body.classList.remove("universe");
  body.classList.remove("explorer");
});

universeLink.addEventListener("click", () => {
  universeLink.classList.toggle("active");
  homeLink.classList.remove("active");
  explorerLink.classList.remove("active");
  body.classList.add("universe");
  body.classList.remove("home");
  body.classList.remove("explorer");
});

explorerLink.addEventListener("click", () => {
  explorerLink.classList.toggle("active");
  homeLink.classList.remove("active");
  universeLink.classList.remove("active");
  body.classList.add("explorer");
  body.classList.remove("universe");
  body.classList.remove("home");
});

//rotas
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
