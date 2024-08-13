import React, {useState} from 'react';
import { AreaChart, Card } from "@tremor/react";

const Graph = () => {
 
  const chartdata = [
    { "no": 1, "value": 256 },
    { "no": 2, "value": 265 },
    { "no": 3, "value": 250 },
    { "no": 4, "value": 270 },
    { "no": 5, "value": 260 },
    { "no": 6, "value": 275 },
    { "no": 7, "value": 258 },
    { "no": 8, "value": 280 },
    { "no": 9, "value": 265 },
    { "no": 10, "value": 290 },
    { "no": 11, "value": 275 },
    { "no": 12, "value": 285 },
    { "no": 13, "value": 270 },
    { "no": 14, "value": 295 },
    { "no": 15, "value": 280 }
  ];
  const [intervals, setIntervals] = useState([
    { name: "1d", enabled: true, current: true },
    { name: "3d", enabled: true, current: false },
    { name: "1w", enabled: true, current: false },
    { name: "1m", enabled: true, current: false },
    { name: "1y", enabled: true, current: false },
    { name: "max", enabled: true, current: false }
  ]);
  const changeInterval = (name) => {
    setIntervals((prevIntervals) =>
      prevIntervals.map((interval) =>
        interval.name === name
          ? { ...interval, current: true }
          : { ...interval, current: false },
      ),
    );
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
  return (
    <div className="App">
      <Card className="my-5 sm:mx-auto sm:max-w-7xl">
      <div className="flex justify-between">
          <div>
            <h3 className="font-semibold text-tremor-content-strong">
              Full Screen
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Compare
            </p>
          </div>
          <div className="hidden sm:block">
            <nav className="flex space-x-2" aria-label="intervals">
              {intervals.map((interval) => (
                <span
                  key={interval.name}
                  onClick={
                    !interval.enabled
                      ? console.log("disabled interval")
                      : () => changeInterval(interval.name)
                  }
                  className={classNames(
                    interval.current ? "bg-indigo-100 text-indigo-700" : "",
                    interval.enabled
                      ? "text-gray-500 hover:text-gray-700"
                      : "text-gray-300",
                    "rounded-md px-3 py-2 text-xs font-normal capitalize cursor-pointer",
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
          colors={['indigo']}
        
      />
    </Card>
    </div>
  );
}

export default Graph;