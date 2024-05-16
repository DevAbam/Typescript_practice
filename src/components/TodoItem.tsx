import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
type task = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoItemProps = {
  todo: task;
  index: number;
  setTodoArray: React.Dispatch<React.SetStateAction<[] | task[]>>;
  todoArray: [] | task[];
};

const TodoItem = ({ todo, index, setTodoArray, todoArray }: TodoItemProps) => {
  function handleDelete(index: number): void {
    setTodoArray(todoArray.filter((el, T_index) => index !== T_index));
  }
  function handleCompleted() {
    setCompleteSctive(!completeActive);
  }
  const [completeActive, setCompleteSctive] = useState(false);
  const isActive = todo.completed === completeActive;

  return (
    <div className="todo_item">
      <div className="todo_task">
        <div className="todoContent">
          <div
            className="completedTask"
            onClick={() => {
              handleCompleted();
            }}
            style={{ borderColor: isActive ? "green" : "" }}
          ></div>
          <h3 style={{ textDecoration: isActive ? "line-through" : "" }}>
            {todo.title}
          </h3>
        </div>
      </div>
      <h3
        onClick={() => {
          handleDelete(index);
        }}
        className="delete_btn"
      >
        <AiFillDelete size={25} color="white" />
      </h3>
    </div>
  );
};

export default TodoItem;
