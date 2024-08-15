import React, { useEffect, useState } from "react";
import ChartWrapper from "./ChartWrapper";
import Graph from "./Graph";
import { sampleData } from "../../../utils/mockData";
import { getFromSessionStorage, storeInSessionStorage } from "../../../utils/helpers";
function ChartPanel(props) {
  const { onSendMinMax, setFullScreen } = props;

  const sessionStorageIntervals = getFromSessionStorage('intervals')

  const [chartdata, setChartdata] = useState(sampleData);
  const [intervals, setIntervals] = useState(sessionStorageIntervals ? sessionStorageIntervals :[
    { name: "1d", current: false },
    { name: "3d", current: false },
    { name: "1w", current: false },
    { name: "1m", current: false },
    { name: "1y", current: false },
    { name: "max", current: true },
  ]);
  useEffect(() => {
    if (intervals[0].current) {
      setChartdata(sampleData.slice(0, 9));
    } else if (intervals[1].current) {
      setChartdata(sampleData.slice(0, 18));
    } else if (intervals[2].current) {
      setChartdata(sampleData.slice(0, 30));
    } else if (intervals[3].current) {
      setChartdata(sampleData.slice(0, 39));
    } else if (intervals[4].current) {
      setChartdata(sampleData.slice(0, 50));
    } else {
      setChartdata(sampleData);
    }
    storeInSessionStorage('intervals',intervals);
  }, [intervals]);

  const changeInterval = (name) => {
    setIntervals((prevIntervals) =>
      prevIntervals.map((interval) =>
        interval.name === name
          ? { ...interval, current: true }
          : { ...interval, current: false }
      )
    );
  };
  useEffect(() => {
    if (chartdata.length > 0) {
      const min = chartdata[0].value;
      const max = chartdata[chartdata.length - 1].value;

      onSendMinMax(min, max);
    }
  }, [chartdata, onSendMinMax]);
  return (
    <ChartWrapper
      onSendMinMax={onSendMinMax}
      setFullScreen={setFullScreen}
      intervals={intervals}
      changeInterval={changeInterval}
    >
      <Graph chartdata={chartdata} />
    </ChartWrapper>
  );
}

export default ChartPanel;
