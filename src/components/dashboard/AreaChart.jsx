/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { cn } from "@/lib/utils";

function AreaChart({
  data = {
    data: [],
  },
  className,
}) {
  const preprocessedData = data?.data?.map((entry) => ({
    x: new Date(entry.x).getTime(), // Convert string date to milliseconds since Unix epoch
    y: entry.y,
  }));

  const [colorLine, setColorLine] = useState("#FFCA57");
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const updatedSeries = getSeries();
    const updatedOptions = getOption();
    setSeries(updatedSeries);
    setOptions(updatedOptions);
  }, [data]);

  const getSeries = () => {
    return [
      {
        name: "Value",
        data: data.data,
        color: colorLine,
      },
    ];
  };

  const getOption = () => {
    return {
      chart: {
        toolbar: {
          show: false,
        },
        foreColor: "#999",
        type: "line",
      },
      tooltip: {
        theme: "dark",
        x: {
          format: "dd MMM yyyy",
          // formatter: function (val) {
          //   return val;
          // },
        },
      },
      markers: {
        size: 0,
        color: colorLine,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      fill: {
        colors: colorLine,
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: [colorLine],
        width: 4,
        dashArray: 0,
      },
      legend: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        labels: {
          // format: "dd/MM",
          // formatter: function (val) {
          //   return new Date(val).toLocaleDateString().split("/")[1];
          // },
        },
        // labels: {
        //   format: "dd/MM",
        //   datetimeFormatter: {
        //     year: "yyyy",
        //     month: "MMM 'yy",
        //     day: "dd MMM",
        //   },
        // },
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

  const [options, setOptions] = useState(getOption());

  return (
    <div
      className={cn(
        "w-full h-[350px] pr-3 pl-1 py-3 rounded-xl shadow-md border",
        className
      )}
    >
      <Chart
        options={options}
        series={series}
        type="area"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default AreaChart;
