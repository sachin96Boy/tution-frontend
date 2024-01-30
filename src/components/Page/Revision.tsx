import React from "react";
import "./revision.css";
import RevisionComponents from "../RevisionComponents";

function Revision() {
  return (
    <form>
      <p className="text-2xl text-left pl-7 pt-5 pb-5">2022 Biology Revision</p>
      <h1 className="p-5">By Lusia Guer</h1>
    
      <div className=" inline-block  p-5 rounded-lg  pt-5 bg-slate-100 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
        <RevisionComponents Month="January" name="Biology "  Auther="by doe" price="LKR2500"  Bname="by cart" Bbname="save" />
        <RevisionComponents Month="January" name="Biology "  Auther="by doe" price="LKR2500"   Bname="by cart" Bbname="save" />
        <RevisionComponents Month="January" name="Biology "  Auther="by doe" price="LKR2500"  Bname="by cart" Bbname="save" />
        <RevisionComponents Month="January" name="Biology "  Auther="by doe" price="LKR2500"  Bname="by cart" Bbname="save" />
        <RevisionComponents Month="January" name="Biology "  Auther="by doe" price="LKR2500"  Bname="by cart" Bbname="save" />
        <RevisionComponents Month="January" name="Biology "  Auther="by doe" price="LKR2500"  Bname="by cart" Bbname="save" />

        </div>
        </div>

    </form>
  );
}

export default Revision;
