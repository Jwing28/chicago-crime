import React from 'react';
import Table from '../components/Table';
import { Content, Header } from '../components/styled/Styled';
import { CustomPieChart } from './Charts';
import PropTypes from 'prop-types';

const Dashboard = ({ data }) => {
  return (
    <>
      <Header>
        <h2>Chicago Crime Data</h2>
      </Header>
      <Content buffer='100px'>
        <CustomPieChart />
        <CustomPieChart />
      </Content>
      <Content>
        <Table data={data} />
      </Content>
    </>
  );
};

Dashboard.propTypes = {
  data: PropTypes.array,
};

export default Dashboard;
