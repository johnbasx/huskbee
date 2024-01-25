import React, { useState, PureComponent } from 'react';

import { FormatDate } from '@utils/index';
import { FundDonationsGraphProp } from '../../../pages/organiser/fundraiser-detail/[fundraiserId]';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const ChartAnalyticsOrganiserDonations = ({
  graphData,
}: {
  graphData: FundDonationsGraphProp[];
}) => {
  //   const [chartData, setChartData] = useState({
  //     labels: graphData.map((data) => FormatDate(data.created_at).slice(4)),
  //     datasets: [
  //       {
  //         label: 'Fund Donations',
  //         data: graphData.map((data) => data.total_donation),
  //         borderColor: 'rgb(53, 162, 235)',
  //         backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //         borderWidth: 2,
  //       },
  //     ],
  //   });
  return (
    <div
      className='chart-container border bg-white p-8 shadow sm:rounded-lg'
      id='donation-chart'
    >
      <h2 className='text-xl font-bold text-black'>Donation graph new</h2>
      {/* <ResponsiveContainer width='100%' height='100%'> */}
      <LineChart
        width={500}
        height={300}
        data={graphData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='amount' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='created_date'
          stroke='#8884d8'
          strokeWidth={4}
          activeDot={{ r: 16 }}
        />
        <Line
          type='monotone'
          dataKey='total_donation'
          stroke='#82ca9d'
          strokeWidth={4}
        />
      </LineChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default ChartAnalyticsOrganiserDonations;
