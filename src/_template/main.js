import { router } from "../../framework/router";
import { App } from "./components/App";

const home = App();

window.routes = {
  "/": home,
  "/404": pageNotFound,
};
router();
