import React from 'react';
import PropTypes from 'prop-types';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const CustomPieChart = ({ data }) => (
  <ResponsiveContainer width='70%' aspect={1.5} height='90%'>
    <PieChart>
      <Pie
        data={data}
        dataKey='value'
        nameKey='name'
        cx='50%'
        cy='50%'
        outerRadius={50}
        fill='#8884d8'
      />
    </PieChart>
  </ResponsiveContainer>
);

CustomPieChart.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  }),
};

export default CustomPieChart;
