/* eslint-disable react/prop-types */
// import React from "react";
import Chart from "react-apexcharts";
import { cn } from "@/lib/utils";

const chartOptions = {
  plotOptions: {
    bar: {
      columnWidth: "10px",
      borderRadius: 5,
      // borderRadiusApplication: 'end',
      // borderRadiusWhenStacked: 'last',
    },
  },
  chart: {
    fontFamily: "Poppins, sans-serif",
    foreColor: "#fff",
    toolbar: {
      show: false,
    },
    type: "bar",
  },
  grid: {
    show: true,
    borderColor: "#ffffff40",
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
};

const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91],
    color: "#fff",
  },
];

function BarChart({ className }) {
  return (
    <div
      className={cn(
        "w-full h-[250px] pr-3 pl-1 py-3 bg-gradient-to-r from-[#D63484] to-[#D24545] rounded-xl",
        className
      )}
    >
      <Chart
        options={chartOptions}
        series={series}
        type="bar"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default BarChart;
