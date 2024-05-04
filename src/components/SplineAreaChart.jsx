import ReactApexChart from "react-apexcharts";

const SplineAreaChart = (props) => {
  const options = {
    theme: {
      mode: "dark",
      palette: 'palette1', 
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
      curve: "smooth",
    },
    title: {
      text: "POWER (W)",
      offsetY: 10,
      floating: true,
      style: {
        fontSize: "1.2rem",
        fontWeight:  'bold',
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
