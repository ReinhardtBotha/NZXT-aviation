import "./App.css";
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
          left: "41%",
        }}
      >
        <p className="indicator-label">LIQUID</p>
        <p>{kraken?.temperature}°C</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
          { label: "CPU", value: cpu?.frequency || "--", unit: "MHz" },
          { label: "PUMP", value: cpu?.fan || "--", unit: "RPM" },
          { label: "GPU", value: gpu?.frequency || "--", unit: "MHz" },
        ].map((item, index, array) => (
          <div className="label-data-container" key={index}>
            <p
              className="indicator-label"
              style={{
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
              className="indicator-unit"
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
