import React from 'react';
import { Button } from 'antd';
import { useStore } from './store';

const Task = ({ task }) => {
  const deleteTask = useStore((state) => state.deleteTask);

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <Button danger onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default Task;
