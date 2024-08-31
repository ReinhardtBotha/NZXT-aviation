import ReactApexChart from "react-apexcharts";
import React from "react";

// eslint-disable-next-line react/display-name
const RadialGauge = React.memo((props) => {
  const options = {
    theme: {
      mode: "dark",
    },
    tooltip: {
      enabled: false,
    },
    chart: {
      background: "transparent",
      sparkline: {
        enabled: false,
      },
    },
    grid: {
      padding: {
        left: -10,
        right: 0,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -45,
        endAngle: 90,
        dataLabels: {
          name: {
            fontSize: "2rem",
            color: "white",
            offsetY: -48,
          },
          value: {
            offsetY: 0,
            fontSize: "4rem",
            color: "white",
            formatter: function (val) {
              return val + "°C";
            },
          },
        },
        hollow: {
          size: "55%",
        },
        track: {
          show: true,
          background: "#f2f2f2",
          strokeWidth: "20%",
          opacity: 1,
          margin: 15,
        },
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

    labels: [props.label],
  };

  const series = [[props?.data || 0]];

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height="350px"
      />
    </>
  );
})

export default RadialGauge;
