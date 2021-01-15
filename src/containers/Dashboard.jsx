import React from 'react';
import Table from '../components/Table';
import { Content, Header } from '../components/styled/Styled';
import CustomPieChart from './Charts';
import PropTypes from 'prop-types';

// charts needs { name, value } pairs.
// you'll hvae to transform the data provided into
// { [description type ex. threat]: sum total of all of that type }

// first pie chart
// breakdown of crime types in 2021

// second pie chart
// breakdown of crime types in 2020
const Dashboard = ({ chartData, data }) => {
  console.log({ wtf: chartData['data2021'] });
  return (
    <>
      <Header>
        <h2>Chicago Crime Data (2021)</h2>
      </Header>
      <Content>
        {/* <CustomPieChart data={chartData['data2020']} /> */}
        <CustomPieChart data={chartData['data2021']} />
      </Content>
      <Content>
        <Table data={data} />
      </Content>
    </>
  );
};

Dashboard.propTypes = {
  chartData: PropTypes.object,
  data: PropTypes.array,
};

Dashboard.defaultProps = {
  chartData: [],
  data: [],
};

export default Dashboard;
