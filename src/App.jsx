import "./App.css";

import BarGauge from "./components/BarGauge";

import useMonitoring from "./hooks/useMonitoring";

const App = () => {
  const { cpu, gpu, ram } = useMonitoring();

  return (
    <>
      <BarGauge data={cpu?.temperature} />
    </>
  );
};

export default App;
