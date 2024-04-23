import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const BarGauge = (props) => {
  const options = {
    tooltip: {
      enabled: false,
    },
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      min: 0,
      max: 100,
      categories: [1991],
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      row: {
        colors: ["#e5e5e5", "transparent"],
        opacity: 0.5,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "100%",
      },
    },
    dataLabels: {
      enabled: false,
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      width="100%"
      height={220}
    />
  );
};

export default BarGauge;
