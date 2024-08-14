import React from "react";

export default function Summary() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          Assignment
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Sai Teja Reddy
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          The frontend interface for visualizing amounts over specific time
          intervals has been implemented. The UI now includes dynamic graph
          rendering, allowing users to view data for selected time periods
          effectively. This feature enables users to analyze and interpret
          financial or quantitative data visually.
        </p>
      </div>
    </div>
  );
}
