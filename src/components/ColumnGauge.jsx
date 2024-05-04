import ReactApexChart from "react-apexcharts";

const ColumnGauge = (props) => {
  const options = {
    theme: {
      mode: "dark",
    },
    tooltip: {
      enabled: false,
    },
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      categories: [1],
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
    xaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      row: {
        colors: ["#e5e5e5", "transparent"],
        opacity: 0.2,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "100%",
      },
    },
    fill: {
      colors: [
        function ({ value }) {
          if (value < 60) {
            return "#00FF00";
          } else if (value >= 60 && value < 80) {
            return "#FFA500";
          } else {
            return "#FF0000";
          }
        },
      ],
      opacity: 1,
    },
  };
  const series = [
    {
      // eslint-disable-next-line react/prop-types
      data: [props?.data || 0],
    },
  ];

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        width={20}
        height="100%"
      />
    </>
  );
};

export default ColumnGauge;
