/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { cn } from "@/lib/utils";

function LineChart({
  data = {
    jumlah: [],
    label: [],
  },
  className,
}) {
  const [colorLine, setColorLine] = useState("#fff");
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    const updatedSeries = getSeries();
    const updatedOptions = getOption();
    setSeries(updatedSeries);
    setOptions(updatedOptions);
  }, [data]);

  const getSeries = () => {
    return [
      {
        name: "Jumlah",
        data: data?.jumlah,
        color: colorLine,
      },
    ];
  };

  const getOption = () => {
    return {
      chart: {
        fontFamily: "Poppins, sans-serif",
        foreColor: "#fff",
        toolbar: {
          show: false,
        },
        type: "line",
      },
      tooltip: {
        theme: "dark",
      },
      markers: {
        size: 4,
        color: colorLine,
      },
      dataLabels: {
        enabled: false,
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
      fill: {
        show: false,
      },
      stroke: {
        show: true,
        curve: "monotoneCubic",
        lineCap: "butt",
        colors: [colorLine],
        width: 2,
        dashArray: 0,
      },
      legend: {
        show: false,
      },
      xaxis: {
        type: "category",
        categories: data?.label,
        labels: {
          colors: "#fff",
          cssClass: "text-white",
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val.toFixed(0);
          },
        },
      },
    };
  };

  return (
    <div
      className={cn(
        "w-full h-[250px] pr-3 pl-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl",
        className
      )}
    >
      <Chart
        options={options}
        series={series}
        type="line"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default LineChart;
