import { Route } from "core/interfaces";
import express from "express";
import mongoose from "mongoose";

class App {
  public app: express.Application;
  public port: string | number;

  constructor(routes: Route[]) {
    this.app = express();
    this.port = process.env.PORT || 1912;

    this.initializeRoutes(routes);
    this.connectToDatabase();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }

  private initializeRoutes(routes: Route[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }

  private connectToDatabase() {
    try {
      const connectionString = process.env.MONGODB_URI;
      if (!connectionString) {
        console.log("Connection string is invalid.");
        return;
      }
      mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      });
      console.log("Connected to DB.");
    } catch (error) {
      console.log("Cannot connect to DB.");
    }
  }
}

export default App;
