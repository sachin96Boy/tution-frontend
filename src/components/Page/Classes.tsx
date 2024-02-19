import ClassComponent from "../ClassComponent";
import TemplateDashboard from "../TemplateDashboard";

function Classes() {
  return (
    <TemplateDashboard>
      <p className="text-left pl-2 pt-2 pb-3 font-bold  text-[#3B5079]  text-3xl">My Classes</p>
      <div className="p-2 rounded-[10px] bg-slate-100 w-auto">
        <div className="grid grid-cols sm:grid-cols-4 xl:grid-cols-6 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          <ClassComponent
            name="2020 Biology"
            Auther="by Lusiya Greer"
            subject={"Biology 2022"}
          />
          <ClassComponent
            name="2020 Biology"
            Auther="by Lusiya Greer"
            subject={"Chemestry 2022"}
          />
          <ClassComponent
            name="2020 Biology"
            Auther="by Lusiya Greer"
            subject={"English 2022"}
          />
          <ClassComponent
            name="2020 Biology"
            Auther="by Lusiya Greer"
            subject={"Physic 2022"}
          />
          <ClassComponent
            name="2020 Biology"
            Auther="by Lusiya Greer"
            subject={"Biology 2022"}
          />
          <ClassComponent
            name="2020 Biology"
            Auther="by Lusiya Greer"
            subject={"Biology 2022"}
          />
        </div>
      </div>
    </TemplateDashboard>
  );
}

export default Classes;
