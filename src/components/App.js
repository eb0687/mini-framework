import { elements } from "../../framework";
import { Header } from "./Header";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

const { div } = elements;

export function App() {
  return div({ class: "todo-app" }, Header(), TodoInput(), TodoList());
}
