import { router } from "../../framework/router";
import { div, h1, p, button } from "../../framework/";

export function homePage() {
  return div(
    { class: "home" },
    h1({}, "Welcome to the App"),
    p({}, "This is a paragraph."),
    button({ onClick: () => alert("Clicked!") }, "Click Me"),
  );
}

const page = homePage();

const pageNotFound = div({ class: "not-found" }, "Page Not Found");

window.routes = {
  "/": page,
  "/404": pageNotFound,
};
router();
