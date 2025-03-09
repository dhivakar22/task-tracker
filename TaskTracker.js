import React, { useState } from "react"

const TaskTracker = () => {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  const handleInputChange = e => {
    setTask(e.target.value)
  }

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { task: task, completed: false }])
      setTask("")
    }
  }

  const handleDeleteTask = index => {
    const updatedTodos = todos.filter((todo, i) => i !== index)
    setTodos(updatedTodos)
  }

  const handleToggleComplete = index => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className="todo-container">
      <header className="App-header">
        <h1>Task Tracker</h1>
      </header>
      <div className="input-section">
        <input type="text" value={task} onChange={handleInputChange} placeholder="Add a new task..." />
        <button onClick={handleAddTask}> + Add Task</button>
      </div>

      <div className="todo-list">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <div key={index} className="todo-item">
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "gray" : "black"
                }}
                onClick={() => handleToggleComplete(index)}
              >
                {todo.task}
              </span>
              <button onClick={() => handleDeleteTask(index)} className="delete-button">
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No tasks added yet! Add one to get!...</p>
        )}
      </div>
    </div>
  )
}

export default TaskTracker
