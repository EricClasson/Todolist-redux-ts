import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import todolist, {
  markCompleted,
  removeTodo,
  editedTodo,
} from "../featuers/todolist";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../main";

export default function Todolist() {
  const todos = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  const [update, setUpdate] = useState<string>("");
  const [editId, setEditId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    dispatch(editedTodo({ id: id, newtext: update }));
    setEditId(null);
    setUpdate("");
  };

  return (
    <div className="">
      <ul className="grid gap-2">
        {todos.map((todo) => (
          <li
            className="grid grid-cols-[_auto_1fr_auto_auto] gap-3 items-center"
            key={todo.id}
          >
            <button
              className="btn btn-outline btn-success"
              onClick={() => dispatch(markCompleted(todo.id))}
            >
              {todo.completed ? <FaCheck /> : <ImCross />}
            </button>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  placeholder="Update your todo"
                  className="input input-bordered input-secondary w-full "
                  onChange={(e) => setUpdate(e.target.value)}
                  value={update}
                />
                <button
                  className="btn btn-outline btn-success"
                  onClick={() => handleEdit(todo.id)}
                >
                  Update
                </button>
              </>
            ) : (
              <div className="text">
                <h2
                  className={`text-lg todo ${
                    todo.completed ? "todo-completed" : ""
                  }`}
                >
                  {" "}
                  {todo.text}
                </h2>
              </div>
            )}{" "}
            {editId !== todo.id && (
              <button
                className="btn btn-outline btn-warning"
                onClick={() => setEditId(todo.id)}
              >
                <FaEdit />
              </button>
            )}
            <button
              className="btn btn-outline btn-error"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
