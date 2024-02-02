import React from "react";
import "./revision.css";
import RevisionComponents from "../RevisionComponents";
import TemplateDashboard from "../TemplateDashboard";

function Revision() {
  return (
    <TemplateDashboard>
    <form>
      <p className="text-2xl text-left pl-5 pt-2 pb-2">2022 Biology Revision</p>
      <h1 className="p-3">By Lusia Guer</h1>
    
      <div className=" inline-block  p-5 rounded-lg  pt-5 bg-slate-100 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <RevisionComponents Month="January" name="2022 Biology Revision "  Auther="by doe" price="LKR2500"  Bname="Buy Now" Bbname="Add to Cart" />
        <RevisionComponents Month="January" name="2022 Biology Revision "  Auther="by doe" price="LKR2500"   Bname="Buy Now" Bbname="Add to Cart" />
        <RevisionComponents Month="January" name="2022 Biology Revision "  Auther="by doe" price="LKR2500"  Bname="Buy Now" Bbname="Add to Cart" />
        <RevisionComponents Month="January" name="2022 Biology Revision "  Auther="by doe" price="LKR2500"  Bname="Buy Now" Bbname="Add to Cart" />
        <RevisionComponents Month="January" name="2022 Biology Revision "  Auther="by doe" price="LKR2500"  Bname="Buy Now" Bbname="Add to Cart" />
        <RevisionComponents Month="January" name="2022 Biology Revision "  Auther="by doe" price="LKR2500"  Bname="Buy Now" Bbname="Add to Cart" />

        </div>
        </div>

    </form>
    </TemplateDashboard>
  );
}

export default Revision;
