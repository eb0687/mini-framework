import { div } from "../../../framework";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TodoList } from "./TodoList";
import { ToggleButton } from "./ToggleButton";

export function App() {
  return div(
    { class: "todo-app" },
    Header(),
    ToggleButton(),
    TodoList(),
    Footer(),
  );
}
