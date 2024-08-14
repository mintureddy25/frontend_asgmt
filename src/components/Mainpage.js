import React, { useState, useEffect } from "react";
import Graph from "./Areachart";
import Summary from "./Summary";

const MainPage = () => {
  const handleMinMax = (min, max) => {
    setMinValue(min);
    setMaxValue(max);
  };

  const [fullScreen, setFullScreen] = useState(false);

  const [tabs, setTabs] = useState([
    { name: "Summary", href: "#", current: false, content: <Summary /> },
    {
      name: "Chart",
      href: "#",
      current: true,
      content: (
        <Graph
          onSendMinMax={handleMinMax}
          fullScreen={fullScreen}
          setFullScreen={setFullScreen}
        />
      ),
    },
    { name: "Statistics", href: "#", current: false, content: <></> },
    { name: "Analysis", href: "#", current: false, content: <></> },
    { name: "Settings", href: "#", current: false, content: <></> },
  ]);
  const [currentTab, setCurrentTab] = useState(tabs[1]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const updateTabs = (name) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.name === name
          ? { ...tab, current: true }
          : { ...tab, current: false }
      )
    );
  };

  useEffect(() => {
    setCurrentTab(tabs.find((tab) => tab.current));
  }, [tabs]);

  const [minValue, setMinValue] = useState(150);
  const [maxValue, setMaxValue] = useState(250);

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

            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>

              <select
                id="tabs"
                name="tabs"
                defaultValue={tabs.find((tab) => tab.current).name}
                className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                {tabs.map((tab) => (
                  <option key={tab.name}>{tab.name}</option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="border-b border-gray-200">
                <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                  {tabs.map((tab) => (
                    <a
                      key={tab.name}
                      href={tab.href}
                      aria-current={tab.current ? "page" : undefined}
                      onClick={() => updateTabs(tab.name)}
                      className={classNames(
                        tab.current
                          ? "border-indigo-500 text-indigo-600"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                        "whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
                      )}
                    >
                      {tab.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
        {currentTab.content}
      </div>
    </div>
  );
};
export default MainPage;
