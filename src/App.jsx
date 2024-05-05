import RadialGauge from "./components/RadialGauge";
import BarGauge from "./components/BarGauge";

import useMonitoring from "./hooks/useMonitoring";
import SplineAreaChart from "./components/SplineAreaChart";

const App = () => {
  const { cpu, gpu, ram, kraken, cpuWatts, gpuWatts } = useMonitoring();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          width: "112px",
          left: "264px",
        }}
      >
        <p
          style={{
            fontSize: "1.1rem",
          }}
        >
          LIQUID
        </p>
        <p>{kraken?.temperature || 0}°C</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: "247px"
        }}
      >
        <RadialGauge data={cpu?.temperature} label={"CPU"} />
        <RadialGauge data={gpu?.temperature} label={"GPU"} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            height: "200px",
            width: "280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <SplineAreaChart cpuWatts={cpuWatts} gpuWatts={gpuWatts} />
        </div>

        <div
          style={{
            width: "280px",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <BarGauge data={cpu?.load} label={"CPU Load"} />
          <BarGauge data={gpu?.load} label={"GPU Load"} />
          <BarGauge data={ram?.inUsePercent} label={"RAM Load"} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "3.2rem",
        }}
      >
        {[
          { label: "CPU", value: cpu?.frequency || "0", unit: "MHz" },
          { label: "PUMP", value: cpu?.fan || "0", unit: "RPM" },
          { label: "GPU", value: gpu?.frequency || "0", unit: "MHz" },
        ].map((item, index, array) => (
          <div
            className="label-data-container"
            style={{
              width: "90px",
              marginTop: "1.5rem",
            }}
            key={index}
          >
            <p
              style={{
                fontSize: "1.1rem",
                textAlign:
                  index === 0
                    ? "right"
                    : index === array.length - 1
                    ? "left"
                    : "center",
              }}
            >
              {item.label}
            </p>
            <p>{item.value}</p>
            <p
              style={{
                fontSize: "1.1rem",
                textAlign:
                  index === 0
                    ? "right"
                    : index === array.length - 1
                    ? "left"
                    : "center",
              }}
            >
              {item.unit}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
