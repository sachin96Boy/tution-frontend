import RevisionLimitComponents from "../RevitionLimitComponents";
import TemplateDashboard from "../TemplateDashboard";

function RevitionLimit() {
  return (
    <TemplateDashboard>
      <form>
        <h2 className="p-2 font-bold  text-[#3B5079]  text-3xl">
          2022 Biology Revision{" "}
          <span className="ml-3 text-[#7383A1] font-bold  text-2xl">
            By Gueera
          </span>{" "}
        </h2>

        <div className="p-2 rounded-lg  pt-5 bg-slate-100 text-white w-auto">
          <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-2s lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
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
