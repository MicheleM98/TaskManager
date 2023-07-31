import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { useStore } from './store';
import { CloseOutlined } from '@ant-design/icons';

const Task = ({ task }) => {
  const deleteTask = useStore((state) => state.deleteTask);
  const [size] = useState('large');

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div>
      <Space size={size} direction='vertical'>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <Button danger onClick={handleDelete}>Elimina <CloseOutlined /></Button>
      </Space>
    </div>
  );
};

export default Task;
