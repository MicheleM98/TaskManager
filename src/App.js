import React from 'react';
import { useStore } from './store';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import { Layout, Typography} from 'antd';

const App = () => {
  const { tasks, addTask, deleteTask } = useStore();
  const { Header, Footer, Sider, Content } = Layout;
  const { Title } = Typography;
  const headerStyle = {
    textAlign: 'center',
    height: 100,
    paddingInline: 100,
    lineHeight: '30px',
    backgroundColor: '#108ee9',
  };
  const contentStyle = {
    textAlign: 'center',
    minHeight: 150,
    lineHeight: '10px',
    backgroundColor: '#7dbcea',
  };
  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    backgroundColor: '#fff',
  };
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#108ee9',
  };
  const titleStyle = {
    color: '#fff',
  }
  return (
    <div>
      <Layout>
        <Sider style={siderStyle}></Sider>
        <Layout>
          <Header style={headerStyle}><Title style={titleStyle}>Task App</Title></Header>
          <Content style={contentStyle}><AddTaskForm onAddTask={addTask} /></Content>
          <Footer style={footerStyle}><TaskList tasks={tasks} onDelete={deleteTask} /></Footer>
        </Layout>
        <Sider style={siderStyle}></Sider>
      </Layout>
    </div>
  );
};

export default App;
