import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Top from "./components/Top";

type task = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todoTask, setTodoTask] = useState<string>("");
  const [todoArray, setTodoArray] = useState<task[] | []>([]);

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
        {todoArray.map((todo: task, index: number) => {
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
      <div className="CompletedcountsBox"></div>
    </>
  );
}

export default App;
