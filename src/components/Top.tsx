import { useEffect, useRef } from "react";

type TopProps = {
  setTodoTask: React.Dispatch<React.SetStateAction<string>>;
  setTodoArray: React.Dispatch<React.SetStateAction<string[]>>;
  todoArray: string[];
  todoTask: string;
};
const Top = ({ setTodoTask, setTodoArray, todoArray, todoTask }: TopProps) => {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setTodoTask(e.target.value);
  }

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className="top_container">
      <input
        ref={inputRef}
        value={todoTask}
        onChange={(e) => {
          handleInputChange(e);
        }}
        type="text"
        placeholder="Enter task.."
        className="top_input"
      />
      <button
        onClick={() => {
          todoTask !== "" && setTodoArray([...todoArray, todoTask]);
          setTodoTask("");
        }}
        className="top_btn"
      >
        +
      </button>
    </div>
  );
};

export default Top;
