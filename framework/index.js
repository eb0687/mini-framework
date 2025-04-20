import { create } from "./element";

// add more tags if needed here
const tags = [
  "a",
  "div",
  "span",
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "ul",
  "li",
  "ol",
  "table",
  "tr",
  "td",
  "th",
  "thead",
  "tbody",
  "tfoot",
  "form",
  "input",
  "button",
  "label",
  "select",
  "option",
  "textarea",
  "img",
  "nav",
  "header",
  "footer",
  "section",
  "article",
  "aside",
  "main",
];

export const elements = Object.fromEntries(
  tags.map((tag) => [
    tag,
    (props, ...children) => create(tag, props, ...children),
  ]),
);
