import CardComponent from "../CardComponents";
import TemplateDashboard from "../TemplateDashboard";

function Teachers() {
  return (
    <TemplateDashboard>
      <form>
        <p className="text-2xl text-left pl-3 pt-2 pb-2">Teachers</p>
        <div className="p-2 rounded-lg space-x-4 bg-slate-100 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-5 xl:grid-cols-6 2xl:grid-cols-6 lg:grid-cols-4">
            <CardComponent
              imageUrl={"./src/assets/bio.png"}
              name={"John Doe"}
              possiotion={"Architect & Engineer"}
            />
            <CardComponent
              imageUrl={"./src/assets/bio.png"}
              name={"Hello Doe"}
              possiotion={"Teacher6"}
            />
            <CardComponent
              imageUrl={"./src/assets/bio.png"}
              name={"Hello Doe"}
              possiotion={"Teacher7"}
            />
            <CardComponent
              imageUrl={"./src/assets/bio.png"}
              name={"Hello Doe"}
              possiotion={"Teacher4"}
            />
            <CardComponent
              imageUrl={"./src/assets/bio.png"}
              name={"Hello Doe"}
              possiotion={"Teacher1"}
            />
            <CardComponent
              imageUrl={"./src/assets/bio.png"}
              name={"Hello Doe"}
              possiotion={"Teacher2"}
            />
            <CardComponent
              imageUrl={"./src/assets/bio.png"}
              name={"Hello Doe"}
              possiotion={"Teacher9"}
            />
          </div>
        </div>
      </form>
    </TemplateDashboard>
  );
}

export default Teachers;
