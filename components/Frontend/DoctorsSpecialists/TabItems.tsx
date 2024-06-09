"use client";
import { useState } from "react";
import { tabs } from "@/constants/tabContent";
import ServicesList from "./ServicesList";

const TabItems: React.FC = () => {
  const [tabSwitch, setTabSwitch] = useState<number>(tabs[0]?.id);

  return (
    <>
      <div className="lg:w-3/5 md:1/3 w-full mb-7">
        <div className="relative right-0">
          <ul
            className="relative flex flex-wrap p-1 list-none rounded-lg bg-gray-50/60"
            role="list">
            {tabs.map((item) => (
              <li key={item.id} className="flex lg:flex-grow text-center z-20">
                <button
                  onClick={() => setTabSwitch(item.id)}
                  className={`flex items-center w-auto justify-center px-2 py-1 mb-0 transition-all ease-in-out duration-500 border-0 rounded-lg cursor-pointer ${
                    tabSwitch === item.id
                      ? "text-blue-700 font-bold shadow-md shadow-purple-600"
                      : " hover:text-slate-900 font-semibold bg-inherit"
                  }`}
                  role="tab"
                  aria-selected={tabSwitch === item.id}>
                  <item.icons className="w-4 h-4" />
                  <span className="px-2 gap-6">{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {tabs.map(
        (item) =>
          tabSwitch === item.id && (
            <ServicesList
              key={item.id}
              content={item.content}
              className={item.className}
            />
          )
      )}
    </>
  );
};

export default TabItems;
