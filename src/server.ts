import { validateEnv } from "@core/utils";
import "dotenv/config";
import App from "./app";
import { IndexRoute } from "@modules/index";
import UserRoute from "@modules/users/users.route";

validateEnv();

const routes = [new IndexRoute(), new UserRoute()];
const app = new App(routes);
app.listen();
