import React, { useState } from 'react';
import { TaskCards } from './TaskCards';

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 123, name: 'Record Book', completed: true },
    { id: 456, name: 'Atomic habits', completed: false },
    { id: 789, name: 'Think Again', completed: false }
  ]);
  const [show, setShow] = useState(false);

  // Use setTasks to filter out the task by id when deleting the task
  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id));
    console.log(id);
  }
  return (
    <div>
      <h2>My Task</h2>
      <ul>
        <button className='triggle' onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map(task => (
            <TaskCards key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>
    </div>
  );
};
