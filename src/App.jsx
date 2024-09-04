import KrakenDisplay from "./components/KrakenDisplay";
import Settings from "./components/Settings";

const App = () => {
  const inKraken = window.location.search.includes("kraken=1");

  return <>{inKraken ? <KrakenDisplay /> : <Settings />}</>;
};

export default App;
