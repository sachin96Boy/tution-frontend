import React from "react";
import "./revision.css";
import RevisionComponents from "../RevisionComponents";
import TemplateDashboard from "../TemplateDashboard";

function Revision() {
  return (
    <TemplateDashboard>
      
        <p className="text-2xl text-left pl-5 pt-2 pb-2">
          2022 Biology Revision
        </p>
        <h1 className="p-3">By Lusia Guer</h1>

        <div className=" inline-block  p-5 rounded-lg  pt-5 bg-slate-100 text-white w-full">
          <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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
