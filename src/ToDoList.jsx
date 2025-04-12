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
    setTasks(t => [...t, newTask]);
    setNewTask("")
  }

  function handleDeleteTask(index) {}

  function handleMoveUp(index) {}

  function handleMoveDown(index) {}

  return (
    <>
      <div>
        <h1>To-Do List</h1>
        <input type="text" onChange={handleInputChange} value={newTask} />
        <button className="add-btn" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => handleDeleteTask(index)}>Delete</button>
            <button className="move-btn" onClick={() => handleMoveUp(index)}>☝🏻</button>
            <button className="move-btn" onClick={() => handleMoveDown(index)}>👇🏻</button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ToDoList;
