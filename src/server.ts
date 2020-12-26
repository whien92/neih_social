import App from "./app";
import { IndexRoute } from "./modules/index";

const route = new IndexRoute();
const routes = [route];
const app = new App(routes);
app.listen();
