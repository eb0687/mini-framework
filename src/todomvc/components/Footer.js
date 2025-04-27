import { div, button } from "../../../framework";
import { navigate } from "../../../framework/router";
import { filter, todos } from "../main";

export function Footer() {
  const filters = ["all", "active", "completed"];

  const buttons = filters.map((name) =>
    button(
      {
        class: "btn",
        onClick: () => {
          filter.value = name;
          const url = name === "all" ? "/" : `/${name}`;
          navigate(url);
        },
      },
      name[0].toUpperCase() + name.slice(1),
    ),
  );
  const container = div({ class: "footer" }, ...buttons);

  // This handles the clearButton visiblity
  function updateClearButton() {
    const completedTodos = todos.value.filter((todo) => todo.completed);
    const isCompleted = completedTodos.length > 0;

    const existingClearButton = container.querySelector(".clear-completed");

    if (isCompleted && !existingClearButton) {
      const clearButton = button(
        {
          class: "btn clear-completed",
          onClick: () => {
            todos.value = todos.value.filter((todo) => !todo.completed);
          },
        },
        "Clear completed",
      );
      container.append(clearButton);
    } else if (!isCompleted && existingClearButton) {
      // Remove the button if no completed todos exist
      existingClearButton.remove();
    }
  }

  todos.subscribe(updateClearButton);
  filter.subscribe(updateClearButton);

  // Initial check for clear button visibility
  updateClearButton();

  return container;
}
