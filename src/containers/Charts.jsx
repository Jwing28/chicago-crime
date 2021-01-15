import React from 'react';
import PropTypes from 'prop-types';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const CustomPieChart = ({ data }) => {
  return (
    <PieChart margin={100} height={500} width={900}>
      <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />
      <Legend height={36} />
      <Pie
        data={data}
        dataKey='value'
        nameKey='name'
        cx='50%'
        cy='50%'
        innerRadius={60}
        outerRadius={100}
        fill='#8884d8'
        legendType='diamond'
      />
    </PieChart>
  );
};

CustomPieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

export default CustomPieChart;
