import { Route } from "@core/interfaces";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import mongoose from "mongoose";
import morgan from "morgan";
import { Logger } from "@core/utils";

class App {
  public app: express.Application;
  public port: string | number;
  public production: boolean;

  constructor(routes: Route[]) {
    this.app = express();
    this.port = process.env.PORT || 1912;
    this.production = process.env.NODE_ENV == "production" ? true : false;

    this.initializeRoutes(routes);
    this.initializeMiddleware();
    this.connectToDatabase();
  }

  public listen() {
    this.app.listen(this.port, () => {
      Logger.info(`Listening on port ${this.port}`);
    });
  }

  private initializeRoutes(routes: Route[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }

  private initializeMiddleware() {
    if (this.production) {
      this.app.use(hpp());
      this.app.use(helmet());
      this.app.use(morgan("combined"));
      this.app.use(cors({ origin: "domain.com", credentials: true }));
    } else {
      this.app.use(morgan("dev"));
      this.app.use(cors({ origin: true, credentials: true }));
    }
  }

  private connectToDatabase() {
    const connectionString = process.env.MONGODB_URI;
    if (!connectionString) {
      Logger.error("Connection string is invalid: ", connectionString);
      return;
    }
    mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
      .catch((reason) => {
        Logger.error(reason);
      });
    Logger.info("Connected to DB.");
  }
}

export default App;
