import { div, button } from "../../../framework";
import { filter, todos } from "../main";

export function Footer() {
  const filters = ["all", "active", "completed"];

  const buttons = filters.map((name) =>
    button(
      {
        class: "btn",
        onClick: () => {
          filter.value = name;
        },
      },
      name[0].toUpperCase() + name.slice(1),
    ),
  );

  const clearButton = button(
    {
      class: "btn",
      onClick: () => {
        todos.value = todos.value.filter((todo) => !todo.completed);
      },
    },
    "Clear completed",
  );

  return div({ class: "footer" }, ...buttons, clearButton);
}
