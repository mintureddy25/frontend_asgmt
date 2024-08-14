import React, { useState } from "react";

import TabLayout from "./TabLayout";

const Dashboard = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [minValue, setMinValue] = useState(150);
  const [maxValue, setMaxValue] = useState(250);
  const handleMinMax = (min, max) => {
    setMinValue(min);
    setMaxValue(max);
  };

  return (
    <div className="mx-auto">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-28 lg:px-8 lg:py-36 -mt-8">
        {fullScreen === false && (
          <div>
            <div className="flex flex-col-reverse gap-y-4">
              <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                {maxValue}{" "}
                <span className="text-gray-400 text-sm align-super"> USD</span>
              </dd>
            </div>
            <div className="text-gray-900">
              <h className="text-green-500 text-2xl">{`+${
                maxValue - minValue
              } (${(((maxValue - minValue) / minValue) * 100).toFixed(
                3
              )}%)`}</h>
            </div>
          </div>
        )}
        <TabLayout
          handleMinMax={handleMinMax}
          fullScreen={fullScreen}
          setFullScreen={setFullScreen}
        />
      </div>
    </div>
  );
};

export default Dashboard;
