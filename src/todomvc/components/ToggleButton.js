import { button } from "../../../framework";
import { todos } from "../main";

export function ToggleButton() {
  const toggle = button(
    {
      class: "toggle-btn",
      onClick: () => {
        const allCompleted = todos.value.every((todo) => todo.completed);
        todos.value = todos.value.map((t) => ({
          ...t,
          completed: !allCompleted,
        }));
      },
    },
    "Select All",
  );
  return toggle;
}
