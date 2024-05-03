import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../featuers/todolist";

export default function InputTodo() {
  const [todoInput, setTodoInput] = useState<string>("");
  const dispatch = useDispatch();
  const handeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(todoInput));
    setTodoInput("");
  };

  return (
    <div className="">
      <form className="grid grid-cols-[1fr_auto] gap-4" onSubmit={handeSubmit}>
        <input
          type="text"
          placeholder="Type your todo here"
          className="input input-bordered w-full "
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
