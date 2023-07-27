import React from 'react';
import { useStore } from './store';
import Task from './Task';

const TaskList = () => {
  const tasks = useStore((state) => state.tasks);
  const deleteTask = useStore((state) => state.deleteTask);

  return (
    <div>
      <h2>Task List</h2>
      {Array.from(tasks).map((task) => (
        <Task key={task.id} task={task} onDelete={() => deleteTask(task.id)} />
      ))}
    </div>
  );
};

export default TaskList;
