import React from 'react';
import { useStore } from './store';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

const App = () => {
  const { tasks, addTask, deleteTask } = useStore();

  return (
    <div>
      <h1>Task App</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;
