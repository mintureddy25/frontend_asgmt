import React from 'react';
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
  return (
    <div className="App">
      <Card className="my-5 sm:mx-auto sm:max-w-7xl">
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