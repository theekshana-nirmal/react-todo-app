import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Drink water",
    "Write a book",
    "Watch TV",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    setTasks((t) => [...t, newTask]);
    setNewTask("");
  }

  function handleDeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function handleMoveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function handleMoveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <div className="container">
        <div className="add-todo-section">
          <h1>To-Do List</h1>
          <div className="input-section">
            <input type="text" onChange={handleInputChange} value={newTask} />
            <button className="add-btn" onClick={handleAddTask}>
              Add
            </button>
          </div>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-btn"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
              <button className="move-btn" onClick={() => handleMoveUp(index)}>
                ☝🏻
              </button>
              <button className="move-btn" onClick={() => handleMoveDown(index)}>
                👇🏻
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
