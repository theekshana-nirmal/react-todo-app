import { useState } from "react";

function ToDoList(){
  const [tasks, setTasks] = useState(["Drink water", "Write a book", "Watch TV"])
  const [newTask, setNewTask] = useState("")

  function handleInputChange(event) {}

  function handleAddTask(){}

  function handleDeleteTask(index) {}

  function handleMoveUp(index) {}

  function handleMoveDown(index) {}

  return(
    <div>
      <h1>To-Do List</h1>
      <input type="text" />
    </div>
  );
}

export default ToDoList;