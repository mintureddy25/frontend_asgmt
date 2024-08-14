import React from "react";

export default function Summary() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Sai Teja Reddy
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          View my github repo here:
        </p>
        <a
          href="https://github.com/mintureddy25/frontend_asgmt"
          className="font-semibold text-indigo-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/mintureddy25/frontend_asgmt
        </a>
        <p className="mt-6 text-lg leading-8 text-gray-600">Contact me:</p>

        <div>
          <dt className="sr-only">Email</dt>
          <dd>
            <a
              href="mailto:chappetasaitejareddy@gmail.com"
              className="font-semibold text-indigo-600"
            >
              chappetasaitejareddy@gmail.com
            </a>
          </dd>
        </div>
      </div>
    </div>
  );
}
