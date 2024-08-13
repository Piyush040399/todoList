import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("allows users to add a task - high", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Add a new task");
  fireEvent.change(input, { target: { value: "New Task" } });

  const select = screen.getByDisplayValue("Medium");
  fireEvent.change(select, { target: { value: "High" } });

  const addButton = screen.getByText(/Add Task/i);
  fireEvent.click(addButton);

  expect(screen.getByText("New Task")).toBeInTheDocument();

  const highPriorityLabel = screen
    .getAllByText("High")
    .find((el) => el.tagName === "SPAN" && el.className.includes("bg-red-500"));

  expect(highPriorityLabel).toBeInTheDocument();
});

test("allows users to add a task - low", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Add a new task");
  fireEvent.change(input, { target: { value: "New Task" } });

  const select = screen.getByDisplayValue("Medium");
  fireEvent.change(select, { target: { value: "Low" } });

  const addButton = screen.getByText(/Add Task/i);
  fireEvent.click(addButton);

  expect(screen.getByText("New Task")).toBeInTheDocument();

  const highPriorityLabel = screen
    .getAllByText("Low")
    .find((el) => el.tagName === "SPAN" && el.className.includes("bg-green-500"));

  expect(highPriorityLabel).toBeInTheDocument();
});
