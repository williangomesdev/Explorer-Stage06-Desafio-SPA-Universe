import { homeLink, universeLink, explorerLink, body } from "./htmlElements.js";

export default function () {
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
}
