import { AreaChart } from "@tremor/react/dist";
import React from "react";

function Graph(props) {
  const { chartdata } = props;
  return (
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
  );
}

export default Graph;
