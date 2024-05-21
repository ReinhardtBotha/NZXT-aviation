import ReactApexChart from "react-apexcharts";

const SplineAreaChart = (props) => {
  const options = {
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
      width: 1.5,
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
      type: "category",
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
      data: props.cpuWatts ? props.cpuWatts.slice(0, 59) : [],
    },
    {
      name: "GPU",
      data: props.gpuWatts ? props.gpuWatts.slice(0, 59) : [],
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
};

export default SplineAreaChart;
