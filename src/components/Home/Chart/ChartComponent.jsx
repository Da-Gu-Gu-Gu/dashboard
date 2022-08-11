import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js",
    },
  },
};

const labels = ["Jy", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      redraw: true,
      fill: true,
      label: "GG",
      data: labels.map(() => Math.random() * 10 + Math.random()),
      borderColor: "rgba(0, 0, 244,0.3)",
      backgroundColor: "rgba(0, 0, 255, 0.1)",
    },
    {
      redraw: true,
      fill: false,
      label: "GG",
      data: labels.map(() => Math.random() * 10 + Math.random()),
      borderColor: "#adb5bd",
      backgroundColor: "#adb5bd",
    },
  ],
};

const ChartComponent = () => {
  return (
    <div className=" h-[100px] mt-5">
      <Line options={options} data={data} />
    </div>
  );
};

export default ChartComponent;
