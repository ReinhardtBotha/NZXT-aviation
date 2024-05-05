import React from "react";

const useMonitoring = () => {
  const [monitoringData, setMonitoringData] = React.useState({
    cpu: null,
    gpu: null,
    ram: null,
    kraken: null,
    cpuWatts: Array.from({ length: 60 }, (_, index) => index + 1),
    gpuWatts: Array.from({ length: 60 }, (_, index) => index + 1),
  });

  React.useEffect(() => {
    const nzxtDefaults = window.nzxt?.v1;

    const updateMonitoringData = (data) => {
      const { cpus, gpus, ram, kraken } = data;

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

      setMonitoringData((prevData) => ({
        ...prevData,
        cpu: {
          // name: cpu?.name,
          load: Number(((cpu?.load ?? 1) * 100).toFixed(0)) ?? 0,
          temperature: Number(cpu?.temperature?.toFixed(0)),
          // maxTemperature: Number(cpu?.maxTemperature),
          frequency: Number(cpu?.frequency),
          fan: Number(cpu?.fanSpeed),
        },
        cpuWatts: [
          ...prevData.cpuWatts.slice(1),
          Number(cpu?.power.toFixed(0)),
        ],
        gpu: {
          // name: gpu?.name,
          load: Number(((gpu?.load ?? 1) * 100).toFixed(0)) ?? 0,
          temperature: Number(gpu?.temperature?.toFixed(0)),
          // maxTemperature: Number(gpu?.maxTemperature),
          frequency: Number(gpu?.frequency),
        },
        gpuWatts: [
          ...prevData.gpuWatts.slice(1),
          Number(gpu?.power.toFixed(0)),
        ],
        ram: {
          inUse: Math.round((ram.inUse ?? 1) / 1024),
          inUsePercent: Math.round(
            ((ram.inUse ?? 1) / (ram.totalSize ?? 1)) * 100
          ),
          totalSize: Math.round((ram.totalSize ?? 1) / 1024),
        },
        kraken: {
          temperature: Number(kraken?.liquidTemperature.toFixed(0)),
        },
      }));
    };

    window.nzxt = {
      v1: {
        width: nzxtDefaults?.width ?? 0,
        height: nzxtDefaults?.height ?? 0,
        shape: nzxtDefaults?.shape ?? "circle",
        targetFps: nzxtDefaults?.targetFps ?? 10,
        onMonitoringDataUpdate: updateMonitoringData,
      },
    };
  }, []);

  return monitoringData;
};

export default useMonitoring;
