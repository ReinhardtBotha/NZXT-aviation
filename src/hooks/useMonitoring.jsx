import React from 'react';

const useMonitoring = () => {
  const [cpu, setCpu] = React.useState(null);
  const [gpu, setGpu] = React.useState(null);
  const [ram, setRam] = React.useState(null);
  const [kraken, setKraken] = React.useState(null);
  const [cpuWatts, setCpuWatts] = React.useState(
    Array(60).fill(0)
  );
  const [gpuWatts, setGpuWatts] = React.useState(
    Array(60).fill(0)
  );

  React.useEffect(() => {
    const nzxtDefaults = window.nzxt?.v1;

    const updateMonitoringData = (data) => {
      const { cpus, gpus, ram, kraken } = data;

      const cpu = cpus.pop();

      let gpu;

      if (gpus.length > 1) {
        const [mainGpu] = gpus.filter(card => !card.name.includes('Graphics'));
        gpu = mainGpu;
      } else {
        gpu = gpus.pop();
      }

      setCpu({
        load: Number(((cpu?.load ?? 1) * 100).toFixed(0)) ?? 0,
        temperature: Number(cpu?.temperature?.toFixed(0)),
        frequency: Number(cpu?.frequency),
        fan: Number(cpu?.fanSpeed),
      });

      setCpuWatts(prevCpuWatts => [
        ...prevCpuWatts.slice(1),
        Number(cpu?.power?.toFixed(0)) || 0,
      ]);

      setGpuWatts(prevGpuWatts => [
        ...prevGpuWatts.slice(1),
        Number(gpu?.power?.toFixed(0)) || 0,
      ]);

      setGpu({
        load: Number(((gpu?.load ?? 1) * 100).toFixed(0)) ?? 0,
        temperature: Number(gpu?.temperature?.toFixed(0)),
        frequency: Number(gpu?.frequency),
      });

      setRam({
        inUse: Math.round((ram.inUse ?? 1) / 1024),
        inUsePercent: Math.round(((ram.inUse ?? 1) / (ram.totalSize ?? 1)) * 100),
        totalSize: Math.round((ram.totalSize ?? 1) / 1024),
      });

      setKraken({
        temperature: Number(kraken?.liquidTemperature?.toFixed(0)),
      });
    };

    window.nzxt = {
      v1: {
        width: nzxtDefaults?.width ?? 0,
        height: nzxtDefaults?.height ?? 0,
        shape: nzxtDefaults?.shape ?? 'circle',
        targetFps: nzxtDefaults?.targetFps ?? 10,
        onMonitoringDataUpdate: updateMonitoringData,
      },
    };
  }, []);

  return {
    cpu,
    gpu,
    ram,
    kraken,
    cpuWatts,
    gpuWatts,
  };
};

export default useMonitoring;
