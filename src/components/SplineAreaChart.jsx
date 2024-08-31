import ReactApexChart from "react-apexcharts";
import React from "react";

// eslint-disable-next-line react/display-name
const SplineAreaChart = React.memo((props) => {
  const options = {
    animations: {
      enabled: false,
    },
    theme: {
      mode: "dark",
      palette: "palette1",
    },
    tooltip: {
      enabled: false,
    },
    chart: {
      toolbar: {
        show: false,
      },
      background: "transparent",
      sparkline: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    title: {
      text: "POWER (W)",
      offsetY: 10,
      floating: true,
      style: {
        fontSize: "1.2rem",
        fontWeight: "bold",
      },
    },
    legend: {
      show: true,
      offsetY: 10,
      fontSize: "25rem",
      floating: true,
    },
    grid: {
      show: false,
    },
    xaxis: {
      type: "numeric",
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  };
  const series = [
    {
      name: "CPU",
      data: props.cpuWatts ? props.cpuWatts : [],
    },
    {
      name: "GPU",
      data: props.gpuWatts ? props.gpuWatts : [],
    },
  ];

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height="100%"
        width="100%"
      />
    </>
  );
});

export default SplineAreaChart;
