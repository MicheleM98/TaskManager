import React from 'react';
import { useStore } from './store';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import { Layout } from 'antd';

const App = () => {
  const { tasks, addTask, deleteTask } = useStore();
  const { Sider, Content } = Layout;
  const contentStyle = {
    textAlign: 'left',
    minHeight: 120,
    lineHeight: '12px',
    backgroundColor: '#fff',
  };
  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    backgroundColor: '#fff',
  };
  return (
    <div>
      <Layout hasSider>
        <Sider style={siderStyle}></Sider>
        <Content style={contentStyle}>
          <h1>Task App</h1>
          <AddTaskForm onAddTask={addTask} />
          <TaskList tasks={tasks} onDelete={deleteTask} />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
