import React from 'react';
import Main from '../../components/Main';
import MenuBar from '../../components/MenuBar';
import SideBar from '../../components/SideBar';

const Dashboard: React.FC = () => {
  return (
    <div className="ui container">
      <MenuBar />
      <Main />
      <SideBar />
    </div>
  );
};

export default Dashboard;
