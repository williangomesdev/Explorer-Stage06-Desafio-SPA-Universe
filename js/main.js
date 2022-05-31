import Events from "./events.js";

import { Router } from "./routes.js";

//Importando eventos
Events();

//rotas
const router = new Router();
router.addRoutes("/", "/pages/home.html");
router.addRoutes("/universe", "/pages/universe.html");
router.addRoutes("/explorer", "/pages/explorer.html");


router.handle();
window.onpopstate = () => router.handle();
window.route = () => router.route();
