import { input, form, Signal, button } from "../../../framework";
import { todos } from "../main";

export function TodoInput() {
  const title = Signal("");
  const nextId = Signal(Math.max(...todos.value.map((todo) => todo.id), 0) + 1);

  const todoInput = input({
    type: "text",
    placeholder: "Add a new todo...",
    class: "todo-input",
    value: title.value,
    onInput: (e) => {
      title.value = e.target.value;
    },
  });

  const submitButton = button({ type: "submit", class: "btn" }, "Add");

  const todoForm = form(
    {
      class: "todo-form",
      onSubmit: (e) => {
        e.preventDefault();
        const newTitle = title.value.trim();
        if (!newTitle) return;

        const newTodo = {
          id: nextId.value,
          title: newTitle,
          completed: false,
        };

        todos.value = [...todos.value, newTodo];
        console.log("updated todos", todos.value);
        nextId.value = Math.max(...todos.value.map((todo) => todo.id), 0) + 1;
        title.value = "";
      },
    },
    todoInput,
    submitButton,
  );

  title.subscribe((sig) => {
    todoInput.value = sig.value;
  });

  return todoForm;
}
