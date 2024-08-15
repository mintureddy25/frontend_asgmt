import React, { useState, useEffect } from "react";
import ChartPanel from "./Chart/ChartPanel";
import Summary from "./Summary/Summary";
import {
  classNames,
  getFromSessionStorage,
  storeInSessionStorage,
} from "../../utils/helpers";
import Statistics from "./Statistics";
import Analysis from "./Analysis";
import Settings from "./Settings";

const TabLayout = ({ handleMinMax, fullScreen, setFullScreen }) => {
  const getInitialTabs = () => {
    let sessionStorageCurrentTabName = getFromSessionStorage("currentTabName");

    const tabs = [
      { name: "Summary", href: "#", current: false, content: <Summary /> },
      {
        name: "Chart",
        href: "#",
        current: false,
        content: (
          <ChartPanel
            onSendMinMax={handleMinMax}
            setFullScreen={setFullScreen}
          />
        ),
      },
      {
        name: "Statistics",
        href: "#",
        current: false,
        content: <Statistics />,
      },
      { name: "Analysis", href: "#", current: false, content: <Analysis /> },
      { name: "Settings", href: "#", current: false, content: <Settings /> },
    ];

    if (!sessionStorageCurrentTabName) {
      sessionStorageCurrentTabName = "Chart";
    }

    return tabs.map((tab) => ({
      ...tab,
      current: tab.name === sessionStorageCurrentTabName,
    }));
  };

  const [tabs, setTabs] = useState(getInitialTabs());

  const updateTabs = (name) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.name === name
          ? { ...tab, current: true }
          : { ...tab, current: false }
      )
    );
  };
  const [currentTab, setCurrentTab] = useState(tabs.find((tab) => tab.current));
  useEffect(() => {
    setCurrentTab(tabs.find((tab) => tab.current));
  }, [tabs]);
  useEffect(() => {
    storeInSessionStorage("currentTabName", currentTab.name);
  }, [currentTab]);

  return (
    <>
      {fullScreen === false && (
        <>
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>

            <select
              id="tabs"
              name="tabs"
              defaultValue={tabs.find((tab) => tab.current).name}
              onChange={(e) => updateTabs(e.target.value)}
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
        </>
      )}
      {currentTab.content}
    </>
  );
};

export default TabLayout;
