import "./revision.css";
import RevisionComponents from "../RevisionComponents";
import TemplateDashboard from "../TemplateDashboard";

function Revision() {
  return (
    <TemplateDashboard>
      
        <p className=" text-left pl-5 pt-2 pb-2 font-bold  text-[#3B5079]  text-3xl">
          2022 Biology Revision
        </p>
        <h1 className="p-3 text-[#7383A1] font-bold  text-2xl ">By Lusia Guer</h1>

        <div className="p-3 rounded-[10px] bg-slate-100 text-white w-auto mr-2 ">
          <div className="grid grid-cols xl:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
            <RevisionComponents
              Month="January"
              name="2022 Biology Revision "
              Auther="by doe"
              price="LKR2500"
              Bname="Buy Now"
              Bbname="Add to Cart"
            />
            <RevisionComponents
              Month="January"
              name="2022 Biology Revision "
              Auther="by doe"
              price="LKR2500"
              Bname="Buy Now"
              Bbname="Add to Cart"
            />
            <RevisionComponents
              Month="January"
              name="2022 Biology Revision "
              Auther="by doe"
              price="LKR2500"
              Bname="Buy Now"
              Bbname="Add to Cart"
            />
            <RevisionComponents
              Month="January"
              name="2022 Biology Revision "
              Auther="by doe"
              price="LKR2500"
              Bname="Buy Now"
              Bbname="Add to Cart"
            />
            <RevisionComponents
              Month="January"
              name="2022 Biology Revision "
              Auther="by doe"
              price="LKR2500"
              Bname="Buy Now"
              Bbname="Add to Cart"
            />
            <RevisionComponents
              Month="January"
              name="2022 Biology Revision "
              Auther="by doe"
              price="LKR2500"
              Bname="Buy Now"
              Bbname="Add to Cart"
            />
          </div>
        </div>
      
    </TemplateDashboard>
  );
}

export default Revision;
