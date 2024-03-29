import { Line, Pie } from "react-chartjs-2";
import React, { useState } from "react";

import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { FormatDate } from "@utils/index";
import { HomeGraphType } from "../../../pages/organiser/home";

Chart.register(CategoryScale);

const FundraiserChart = ({ graphData }: { graphData: HomeGraphType[] }) => {
  const [chartData, setChartData] = useState({
    labels: graphData.map((data) => data.title),
    datasets: [
      {
        label: "Fund Donations",
        data: graphData.map((data) => data.total_donation),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div
      className="chart-container bg-white shadow sm:rounded-lg border p-8"
      id="donation-chart"
    >
      <h2 className="text-black text-xl font-bold">Donation graph</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Daily donations graph",
            },
          },
        }}
      />
    </div>
  );
};

export default FundraiserChart;
