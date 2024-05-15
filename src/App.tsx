import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Top from "./components/Top";

function App() {
  const [todoTask, setTodoTask] = useState<string>("");
  const [todoArray, setTodoArray] = useState<string[]>([]);

  return (
    <>
      {/* top */}
      <div className="Top">
        <Top
          setTodoTask={setTodoTask}
          todoTask={todoTask}
          todoArray={todoArray}
          setTodoArray={setTodoArray}
        />
      </div>
      <div className="todo_section">
        {todoArray.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todo={todo}
              todoArray={todoArray}
              index={index}
              setTodoArray={setTodoArray}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
