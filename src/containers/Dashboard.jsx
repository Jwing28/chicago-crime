import React from 'react';

import { Content, Header } from '../components/styled/Styled';
/*
    <>
        <Header /> - Simple logo
            <Content> - Smart, controls state and passes it down to the other components
                <ControlPanel />
                <Charts /> -> pie, table, trend
                <Table /> 
            </Content>
        <Footer /> - info about me and/or the app
    </>
*/
const Dashboard = () => {
  return (
    <>
      <Header>
        <h2>Chicago Crime Data</h2>
      </Header>
      <Content>Test</Content>
    </>
  );
};

export default Dashboard;
