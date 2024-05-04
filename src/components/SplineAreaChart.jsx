import ReactApexChart from "react-apexcharts";

const SplineAreaChart = (props) => {
  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "seconds",
      categories: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  const series = [
    {
      name: "CPU",
      data: props.cpuWatts ? props.cpuWatts.slice(0, 19) : [],
    },
    {
      name: "CPU",
      data: props.gpuWatts ? props.gpuWatts.slice(0, 19) : [],
    },
  ];

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height="100%"
      />
    </>
  );
};

export default SplineAreaChart;
