import React, { useState } from "react";
import Example from "./tabs";
import Graph from "./Areachart";

const MainPage = () => {
  const tabs = [
    { name: "Summary", href: "#", current: false },
    { name: "Chart", href: "#", current: false },
    { name: "Statistics", href: "#", current: true },
    { name: "Analysis", href: "#", current: false },
    { name: "Settings", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const currentTab = useState(tabs[1]);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div>
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
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
        <Graph />
      </div>
    </div>
  );
};
export default MainPage;
