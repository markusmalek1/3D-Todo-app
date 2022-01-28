import React, { useEffect, useState } from "react";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";

export default function MyTodos() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Build a special todo app",
      class: "todo-completed",
      completed: false,
    },
    {
      id: 2,
      task: "Set up the 3D environement",
      class: "todo-completed",
      completed: false,
    },
    {
      id: 3,
      task: "Finish the app",
      class: "todo-completed",
      completed: false,
    },
  ]);

  const taskCompleted = (e) => {
    let id = e.target.id;
    const updatedTasks = tasks.map((item) =>
      item.id.toString() === id ? { ...item, completed: true } : item
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todos-container">
      <h1 className="todos-title">Todos</h1>
      <ul className="todos-list-container">
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              className={
                task.completed
                  ? "todo-item-container todo-completed"
                  : "todo-item-container"
              }
              onClick={taskCompleted}
            >
              <div className="todo-item">
                <span className="todo-item--icon">
                  <CheckOutlined />
                </span>
                <span className="todo-item--item" id={task.id}>
                  {task.task}
                </span>
              </div>
              <div className="todo-actions">
                <DeleteOutlined />
              </div>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
