import React from "react";
import TabItems from "./TabItems";
import SectionHeading from "../SectionHeading";

const DoctorsSpecialistsTabs = () => {
  return (
    <section className="pb-12 pt-20 bg-green-50">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-5 text-start">
              <SectionHeading title="Top-rated online doctors & specialists available now." />
              <p className="text-base md:text-lg ">
                Choose from thousands of providers at every day affordable
                prices. Book online today.
              </p>
            </div>
          </div>
        </div>
        <TabItems />
      </div>
    </section>
  );
};

export default DoctorsSpecialistsTabs;
