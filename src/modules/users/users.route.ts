import { Route } from "@core/interfaces";
import { Router } from "express";
import UserController from "./users.controller";

export default class UserRoute implements Route {
  public path = "/api/users";
  public router = Router();

  public userController = new UserController();

  constructor() {
    this.initializeRoute();
  }

  private initializeRoute() {
    this.router.post(this.path, this.userController.register);
  }
}
