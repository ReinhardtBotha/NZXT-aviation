import React from "react";

const useMonitoring = () => {
  const [cpu, setCpu] = React.useState();
  const [gpu, setGpu] = React.useState();
  const [ram, setRam] = React.useState();
  const [kraken, setKraken] = React.useState();

  React.useEffect(() => {
    const nzxtDefaults = window.nzxt?.v1;

    window.nzxt = {
      v1: {
        width: nzxtDefaults?.width ?? 0,
        height: nzxtDefaults?.height ?? 0,
        shape: nzxtDefaults?.shape ?? "circle",
        targetFps: nzxtDefaults?.targetFps ?? 10,
        onMonitoringDataUpdate: (data) => {
          const { cpus, gpus, ram, kraken } = data;

          console.log("cpus");

          const cpu = cpus.pop();

          let gpu;

          if (gpus.length > 1) {
            const [mainGpu] = gpus.filter(
              (card) => !card.name.includes("Graphics")
            );
            gpu = mainGpu;
          } else {
            gpu = gpus.pop();
          }

          setCpu({
            name: cpu?.name,
            load: Number(((cpu?.load ?? 1) * 100).toFixed(0)) ?? 0,
            temperature: Number(cpu?.temperature?.toFixed(0)),
            maxTemperature: Number(cpu?.maxTemperature),
            frequency: Number(cpu?.frequency),
            fan: Number(cpu?.fanSpeed),
            watts: Number(cpu?.power.toFixed(0)),
          });

          setGpu({
            name: gpu?.name,
            load: Number(((gpu?.load ?? 1) * 100).toFixed(0)) ?? 0,
            temperature: Number(gpu?.temperature?.toFixed(0)),
            maxTemperature: Number(gpu?.maxTemperature),
            frequency: Number(gpu?.frequency),
            fan: Number(gpu?.fanSpeed),
            watts: Number(gpu?.power.toFixed(0)),
          });

          setRam({
            inUse: Math.round((ram.inUse ?? 1) / 1024),
            inUsePercent: Math.round(
              ((ram.inUse ?? 1) / (ram.totalSize ?? 1)) * 100
            ),
            totalSize: Math.round((ram.totalSize ?? 1) / 1024),
          });

          setKraken({
            temperature: Number(kraken?.liquidTemperature.toFixed(0)),
          });
        },
      },
    };
  }, []);

  return { cpu, gpu, ram, kraken };
};

export default useMonitoring;
