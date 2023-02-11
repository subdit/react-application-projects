import './App.css';
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 123, name: 'Record Book', completed: true },
    { id: 456, name: 'Atomic habits', completed: false },
    { id: 789, name: 'Think Again', completed: false }
  ]);

  // Use setTasks to filter out the task by id when deleting the task

  function handleDelete(id) {
    setTasks(tasks.filter(task => id !== task.id));
    console.log(id);
  }

  return (
    <div className='App'>
      <h2>My Task</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span>
              {task.id} - {task.name}
            </span>
            <button onClick={() => handleDelete(task.id)} className='delete'>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
