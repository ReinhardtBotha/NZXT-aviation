import "./App.css";
import RadialGauge from "./components/RadialGauge";
import BarGauge from "./components/BarGauge";

import useMonitoring from "./hooks/useMonitoring";
import SplineAreaChart from "./components/SplineAreaChart";

{
  /* <h2>CPU Temp: {cpu?.temperature}</h2>
<h2>Liquid Temp: {kraken?.temperature}</h2>
<h2>GPU Temp: {gpu?.temperature}</h2>
<h2>AIO Pump: {cpu?.fan}</h2>
<h2>GPU Fan: {gpu?.fan}</h2>
<h2>CPU Freq: {cpu?.frequency}</h2>
<h2>GPU Freq: {gpu?.frequency}</h2>
<h2>RAM total: {ram?.totalSize}</h2>
<h2>CPU Load: {cpu?.load}</h2>
<h2>GPU Load: {gpu?.load}</h2>
<h2>RAM Load: {ram?.inUsePercent}</h2>
<h2>CPU Watt: {cpu?.watts}</h2>
<h2>GPU Watt: {gpu?.watts}</h2>  */
}

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
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingLeft: "3rem",
          }}
        >
          <SplineAreaChart cpuWatts={cpuWatts} gpuWatts={gpuWatts} />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            paddingRight: "3rem",
            paddingLeft: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>
              <BarGauge data={cpu?.load} />
              <h3>CPU Load</h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "40px",
                marginLeft: "1.5rem"
              }}
            >
              <p style={{
                  marginTop: "-0.7rem"
                }}>{cpu?.load || "00"}</p>
              <p
                style={{
                  marginTop: "-0.5rem",
                  fontSize: "1.1rem",
                }}
              >
                %
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>
              <BarGauge data={gpu?.load} />
              <h3>GPU Load</h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "40px",
                marginLeft: "1.5rem"
              }}
            >
              <p style={{
                  marginTop: "-0.7rem"
                }}>{cpu?.load || "00"}</p>
              <p
                style={{
                  marginTop: "-0.5rem",
                  fontSize: "1.1rem",
                }}
              >
                %
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>
              <BarGauge data={ram?.inUsePercent} />
              <h3>CPU Load</h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "40px",
                marginLeft: "1.5rem"
              }}
            >
              <p style={{
                  marginTop: "-0.7rem"
                }}>{ram?.inUsePercent || "00"}</p>
              <p
                style={{
                  marginTop: "-0.5rem",
                  fontSize: "1.1rem",
                }}
              >
                %
              </p>
            </div>
          </div>

          {/* <div>
            <BarGauge data={gpu?.load} />
            <h3>GPU Load</h3>
          </div>
          <div>
            <BarGauge data={ram?.inUsePercent} />
            <h3>RAM Load</h3>
          </div> */}

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
