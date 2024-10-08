import React, { useState } from "react";
import { ArrowsExpandIcon } from "@heroicons/react/outline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { classNames, getFromSessionStorage } from "../../../utils/helpers";
import { Card } from "@tremor/react/dist";

const ChartWrapper = (props) => {
  const { setFullScreen, intervals, changeInterval } = props;
  const sessionStorageFullScreen = getFromSessionStorage("fullScreen");

  const [buttonName, setButtonName] = useState(
    sessionStorageFullScreen ? "Exit" : "Full Screen"
  );

  const handleFullScreenClick = () => {
    setFullScreen((prevState) => {
      if (!prevState) {
        setButtonName("Exit");
      } else {
        setButtonName("Full Screen");
      }
      return !prevState;
    });
  };

  return (
    <div>
      <Card className="my-5 sm:mx-auto">
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
          <div className="sm:hidden">
            <label htmlFor="intervals" className="sr-only">
              Select a tab
            </label>

            <select
              id="intervals"
              name="intervals"
              defaultValue={intervals.find((interval) => interval.current).name}
              onChange={(e) => changeInterval(e.target.value)}
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {intervals.map((interval) => (
                <option key={interval.name}>{interval.name}</option>
              ))}
            </select>
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
        {props.children}
      </Card>
    </div>
  );
};

export default ChartWrapper;
