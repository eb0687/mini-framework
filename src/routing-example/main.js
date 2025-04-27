import { div, h1, li, p, ul } from "../../framework";
import { link, router } from "../../framework/router";
import "./styles.css";

const homePage = div(
  { class: "page" },
  h1({}, "Welcome to the home page"),
  ul(
    {},
    li({ class: "list-item" }, link("/about", "About Page")),
    li({ class: "list-item" }, link("/other", "Another Page")),
  ),
);

const aboutPage = div(
  { class: "page" },
  h1({}, "Welcome to the about page"),
  ul(
    {},
    li({ class: "list-item" }, link("/", "Home")),
    li({ class: "list-item" }, link("/other", p({}, "Some other page..."))),
  ),
);

const otherPage = div(
  { class: "page" },
  h1({}, "Welcome to yet another page"),
  ul({}, li({ class: "list-item" }, link("/", "Home"))),
);

const pageNotFound = div(
  { class: "page" },
  h1({}, "Page Not Found"),
  ul({}, li({ class: "list-item" }, link("/", "Home"))),
);

window.routes = {
  "/": homePage,
  "/about": aboutPage,
  "/other": otherPage,
  "/404": pageNotFound,
};

router();
