import { Line, Pie } from 'react-chartjs-2';
import React, { useState } from 'react';

import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { FormatDate } from '@utils/index';
import { FundDonationsGraphProp } from '../../../pages/organiser/fundraiser-detail/[fundraiserId]';

Chart.register(CategoryScale);

const ChartAnalytic = ({
  graphData,
}: {
  graphData: FundDonationsGraphProp[];
}) => {
  const [chartData, setChartData] = useState({
    labels: graphData.map((data) => FormatDate(data.created_at).slice(4)),
    datasets: [
      {
        label: 'Fund Donations',
        data: graphData.map((data) => data.total_donation),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 2,
      },
    ],
  });
  return (
    <div
      className='chart-container border bg-white p-8 shadow sm:rounded-lg'
      id='donation-chart'
    >
      <h2 className='text-xl font-bold text-black'>Donation graph</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Daily donations graph',
            },
          },
        }}
      />
    </div>
  );
};

export default ChartAnalytic;
