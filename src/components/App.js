import { elements } from "../../framework";
import { Header } from "./Header";
import { TodoInput } from "./TodoInput";

const { div } = elements;

export function App() {
  return div({ class: "todo-app" }, Header(), TodoInput());
}
