import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const BarGauge = (props) => {
  const options = {
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [1991],
    },
    plotOptions: {
      bar: {
        horizontal: true,
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
