import { useEffect, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

type TopProps = {
  setTodoTask: React.Dispatch<React.SetStateAction<string>>;
  setTodoArray: React.Dispatch<React.SetStateAction<[] | task[]>>;
  todoArray: [] | task[];
  todoTask: string;
};

type task = {
  id: number;
  title: string;
  completed: boolean;
};

const Top = ({ setTodoTask, setTodoArray, todoArray, todoTask }: TopProps) => {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setTodoTask(e.target.value);
  }

  function handleAddTodo() {
    const newTodo: task = {
      id: todoArray.length + 1,
      title: todoTask,
      completed: true,
    };
    todoTask !== "" && setTodoArray([...todoArray, newTodo]);
    setTodoTask("");
  }

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="top_container"
    >
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
          handleAddTodo();
        }}
        className="top_btn"
      >
        <AiOutlinePlus size={39} color="lightblue" strokeWidth={20} />
      </button>
    </form>
  );
};

export default Top;
