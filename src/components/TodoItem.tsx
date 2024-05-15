import React from "react";

type TodoItemProps = {
  todo: string;
  index: number;
  setTodoArray: React.Dispatch<React.SetStateAction<string[]>>;
  todoArray: string[];
};

const TodoItem = ({ todo, index, setTodoArray, todoArray }: TodoItemProps) => {
  function handleDelete(index: number): void {
    setTodoArray(todoArray.filter((el, T_index) => index !== T_index));
  }

  return (
    <div className="todo_item">
      <div className="todo_task">
        <div className="todoContent">
          <div onClick={() => {}} className="completedTask"></div>
          <h3>{todo}</h3>
        </div>
      </div>
      <h3
        onClick={() => {
          handleDelete(index);
        }}
        className="delete_btn"
      >
        X
      </h3>
    </div>
  );
};

export default TodoItem;
