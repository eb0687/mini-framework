import { create } from "./element";

export const a = (props, ...children) => create("a", props, ...children);
export const div = (props, ...children) => create("div", props, ...children);
export const span = (props, ...children) => create("span", props, ...children);
export const p = (props, ...children) => create("p", props, ...children);
export const h1 = (props, ...children) => create("h1", props, ...children);
export const h2 = (props, ...children) => create("h2", props, ...children);
export const h3 = (props, ...children) => create("h3", props, ...children);
export const h4 = (props, ...children) => create("h4", props, ...children);
export const h5 = (props, ...children) => create("h5", props, ...children);
export const h6 = (props, ...children) => create("h6", props, ...children);
export const ul = (props, ...children) => create("ul", props, ...children);
export const li = (props, ...children) => create("li", props, ...children);
export const ol = (props, ...children) => create("ol", props, ...children);
export const table = (props, ...children) =>
  create("table", props, ...children);
export const tr = (props, ...children) => create("tr", props, ...children);
export const td = (props, ...children) => create("td", props, ...children);
export const th = (props, ...children) => create("th", props, ...children);
export const thead = (props, ...children) =>
  create("thead", props, ...children);
export const tbody = (props, ...children) =>
  create("tbody", props, ...children);
export const tfoot = (props, ...children) =>
  create("tfoot", props, ...children);
export const form = (props, ...children) => create("form", props, ...children);
export const input = (props, ...children) =>
  create("input", props, ...children);
export const button = (props, ...children) =>
  create("button", props, ...children);
export const label = (props, ...children) =>
  create("label", props, ...children);
export const select = (props, ...children) =>
  create("select", props, ...children);
export const option = (props, ...children) =>
  create("option", props, ...children);
export const textarea = (props, ...children) =>
  create("textarea", props, ...children);
export const text = (props, ...children) => create("text", props, ...children);
export const type = (props, ...children) => create("type", props, ...children);
export const placeholder = (props, ...children) =>
  create("placeholder", props, ...children);
export const img = (props, ...children) => create("img", props, ...children);
export const nav = (props, ...children) => create("nav", props, ...children);
export const header = (props, ...children) =>
  create("header", props, ...children);
export const footer = (props, ...children) =>
  create("footer", props, ...children);
export const section = (props, ...children) =>
  create("section", props, ...children);
export const article = (props, ...children) =>
  create("article", props, ...children);
export const aside = (props, ...children) =>
  create("aside", props, ...children);
export const main = (props, ...children) => create("main", props, ...children);
export const value = (props, ...children) =>
  create("value", props, ...children);

export { Signal } from "./signal";
