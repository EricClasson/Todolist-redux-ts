import "./App.css";
import InputTodo from "./components/InputTodo";
import Todolist from "./components/Todolist";

function App() {
  return (
    <>
      <div className="max-w-screen-sm mx-auto py-8 grid gap-6 ">
        <h1 className="text-center">Todolist app</h1>
        <InputTodo />
        <Todolist />
      </div>
    </>
  );
}

export default App;
