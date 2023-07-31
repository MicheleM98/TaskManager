import React, { useState } from 'react';
import { useStore } from './store';
import { Button, Space, Typography } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const addTask = useStore((state) => state.addTask);
  const [size] = useState('large');
  const { Title } = Typography;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    addTask(title, description);
    setTitle('');
    setDescription('');
  };
  const titleStyle = {
    color: '#fff',
    marginBottom: '0px',
  }
  
  return (
    <form>
      <Space size={size} direction='vertical'>
        <Title level={3} style={titleStyle}>Nuovo Task</Title>
        <Title level={4} style={titleStyle}>Titolo:</Title>
        <input type="text" placeholder='Inserisci un titolo' value={title} onChange={(e) => setTitle(e.target.value)} />
        <Title level={4} style={titleStyle}>Description:</Title>
        <input type="text" placeholder='Inserisci una descriscione' value={description} onChange={(e) => setDescription(e.target.value)} />
        <Button onClick={handleSubmit}>Crea <CheckOutlined /></Button>
      </Space>
    </form>
  );
};

export default AddTaskForm;
