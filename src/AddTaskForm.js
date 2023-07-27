import React, { useState } from 'react';
import { useStore } from './store';
import { Button, Space } from 'antd';

const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const addTask = useStore((state) => state.addTask);
  const [size] = useState('large');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    addTask(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form>
      <Space size={size} direction='vertical'>
        <h2>Nuovo Task</h2>
        <div>
            <label>Titolo:</label>
            <br />
            <input type="text" placeholder='Inserisci un titolo' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
            <label>Description:</label>
            <br />
            <input type="text" placeholder='Inserisci una descriscione' value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <Button onClick={handleSubmit}>Crea</Button>
      </Space>
    </form>
  );
};

export default AddTaskForm;
