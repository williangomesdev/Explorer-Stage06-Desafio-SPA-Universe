import { app } from "./htmlElements.js";

export class Router {
  routes = {};
  addRoutes(routeName, routePage) {
    this.routes[routeName] = routePage;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes["/"];

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        app.innerHTML = html;
      });
  }
}
