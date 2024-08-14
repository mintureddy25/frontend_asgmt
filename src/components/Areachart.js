import React, { useState, useEffect } from "react";
import { AreaChart, Card } from "@tremor/react";
import { ArrowsExpandIcon } from "@heroicons/react/outline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Graph = ({ onSendMinMax, fullScreen, setFullScreen }) => {
  const [intervals, setIntervals] = useState([
    { name: "1d", current: false },
    { name: "3d", current: false },
    { name: "1w", current: false },
    { name: "1m", current: false },
    { name: "1y", current: false },
    { name: "max", current: true },
  ]);
  const changeInterval = (name) => {
    setIntervals((prevIntervals) =>
      prevIntervals.map((interval) =>
        interval.name === name
          ? { ...interval, current: true }
          : { ...interval, current: false }
      )
    );
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleFullScreenClick = () => {
    setFullScreen((prevState) => !prevState);
  };
  let buttonName = "Full Screen";

  useEffect(() => {
    if (fullScreen) {
      buttonName = "Exit";
    } else {
      buttonName = "Full Screen";
    }
  }, [fullScreen]);

  const sampleData = [
    { no: 1, value: 150 },
    { no: 2, value: 160 },
    { no: 3, value: 165 },
    { no: 4, value: 170 },
    { no: 5, value: 180 },
    { no: 6, value: 100 },
    { no: 7, value: 195 },
    { no: 8, value: 190 },
    { no: 9, value: 200 },
    { no: 10, value: 210 },
    { no: 11, value: 180 },
    { no: 12, value: 220 },
    { no: 13, value: 230 },
    { no: 14, value: 225 },
    { no: 15, value: 400 },
    { no: 16, value: 250 },
    { no: 17, value: 245 },
    { no: 18, value: 260 },
    { no: 19, value: 270 },
    { no: 20, value: 265 },
    { no: 21, value: 280 },
    { no: 22, value: 160 },
    { no: 23, value: 290 },
    { no: 24, value: 285 },
    { no: 25, value: 300 },
    { no: 26, value: 295 },
    { no: 27, value: 310 },
    { no: 28, value: 320 },
    { no: 29, value: 200 },
    { no: 30, value: 330 },
    { no: 31, value: 340 },
    { no: 32, value: 187 },
    { no: 33, value: 350 },
    { no: 34, value: 345 },
    { no: 35, value: 355 },
    { no: 36, value: 350 },
    { no: 37, value: 340 },
    { no: 38, value: 330 },
    { no: 39, value: 320 },
    { no: 40, value: 310 },
    { no: 41, value: 305 },
    { no: 42, value: 295 },
    { no: 43, value: 285 },
    { no: 44, value: 270 },
    { no: 45, value: 260 },
    { no: 46, value: 250 },
    { no: 47, value: 240 },
    { no: 48, value: 230 },
    { no: 49, value: 220 },
    { no: 50, value: 210 },
    { no: 51, value: 205 },
    { no: 52, value: 195 },
    { no: 53, value: 185 },
    { no: 54, value: 175 },
    { no: 55, value: 165 },
    { no: 56, value: 155 },
    { no: 57, value: 170 },
    { no: 58, value: 200 },
    { no: 59, value: 230 },
    { no: 60, value: 250 },
  ];
  const [chartdata, setChartdata] = useState(sampleData);
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
  }, [intervals]);

  useEffect(() => {
    if (chartdata.length > 0) {
      const min = chartdata[0].value;
      const max = chartdata[chartdata.length - 1].value;

      onSendMinMax(min, max);
    }
  }, [chartdata, onSendMinMax]);

  return (
    <div className="App">
      <Card className="my-5 sm:mx-auto sm:max-w-7xl">
        <div className="flex justify-between">
          <div>
            <div className="flex space-x-4">
              <button
                onClick={handleFullScreenClick}
                className="flex items-center space-x-2 p-2 text-gray-500 hover:text-gray-700"
              >
                <ArrowsExpandIcon className="h-6 w-6 rotate-45 transform" />
                <span className="text-sm font-medium">{buttonName}</span>
              </button>
              <button className="flex items-center space-x-2 p-2 text-gray-500 hover:text-gray-700">
                <div className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full">
                  <FontAwesomeIcon icon={faPlus} className="text-gray-500" />
                </div>
                <span className="text-sm font-medium">Compare</span>
              </button>
            </div>
          </div>
          <div className="hidden sm:block">
            <nav className="flex space-x-2" aria-label="intervals">
              {intervals.map((interval) => (
                <span
                  key={interval.name}
                  onClick={() => changeInterval(interval.name)}
                  className={classNames(
                    interval.current ? "bg-indigo-600 text-white" : "",
                    "rounded-md px-3 py-2 text-xs font-normal capitalize cursor-pointer"
                  )}
                  aria-current={interval.current ? "page" : undefined}
                >
                  {interval.name}
                </span>
              ))}
            </nav>
          </div>
        </div>
        <AreaChart
          className="mt-2 h-80"
          data={chartdata}
          index="no"
          categories={["value"]}
          showAnimation={true}
          animationDuration={300}
          connectNulls={true}
          allowDecimals={false}
          onValueChange={(v) => v}
          yAxisWidth={80}
          showXAxis={false}
          showYAxis={false}
          showLegend={false}
          colors={["indigo"]}
        />
      </Card>
    </div>
  );
};

export default Graph;
