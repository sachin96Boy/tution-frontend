import React from "react";
import RevisionLimitComponents from "../RevitionLimitComponents";
import TemplateDashboard from "../TemplateDashboard";

function RevitionLimit() {
  return (
    <TemplateDashboard>
      <form>
      <h2 className="p-2 font-bold  text-[#3B5079]  text-3xl">
        2022 Biology Revision{" "}
        <span className="ml-3 text-[#7383A1] font-bold  text-2xl">By Gueera</span>{" "}
      </h2>

      <div className=" inline-flex  p-5 rounded-lg  pt-5 bg-slate-100 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
          <RevisionLimitComponents
            name="2022 Biology Revision"
            Auther="By Lusia Gueera"
            Month="January"
            presentage="50%"
          />
          <RevisionLimitComponents
            name="2022 Biology Revision"
            Auther="By Lusia Gueera"
            Month="January"
            presentage="50%"
          />
          <RevisionLimitComponents
            name="2022 Biology Revision"
            Auther="By Lusia Gueera"
            Month="January"
            presentage="50%"
          />
          <RevisionLimitComponents
            name="2022 Biology Revision"
            Auther="By Lusia Gueera"
            Month="January"
            presentage="50%"
          />
          <RevisionLimitComponents
            name="2022 Biology Revision"
            Auther="By Lusia Gueera"
            Month="January"
            presentage="50%"
          />
        </div>
      </div>
      </form>
    </TemplateDashboard>
  );
}

export default RevitionLimit;
