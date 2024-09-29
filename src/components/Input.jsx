import { useState } from "react";

export default function Input({ taskList, setTaskList }) {
  const [todoInput, setTodoInput] = useState("");

  const addTaskHandler = (e) => {
    e.preventDefault();
    if (todoInput) setTaskList([...taskList, todoInput]);
    else alert("404: ToDo Not Found");
    setTodoInput("");
  };

  return (
    <>
      <form className="flex flex-row items-center gap-2">
        <input
          className="border rounded-lg px-3 py-2"
          type="text"
          placeholder="Enter new task here..."
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
        />
        <button
          className="bg-violet-500 border rounded-lg mx-5 py-2 px-3 text-white hover:bg-violet-600 font-semibold"
          onClick={addTaskHandler}
        >
          Add ToDo
        </button>
      </form>
    </>
  );
}
