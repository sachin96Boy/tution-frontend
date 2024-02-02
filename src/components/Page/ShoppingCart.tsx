import React from "react";
import TemplateDashboard from "../TemplateDashboard";
import ShoppingCartComponents from "../ShoppingCartComponent";

function ShoppingCart() {
  return (
    <TemplateDashboard>
      <form>
        <p className="text-2xl text-left pl-5 pt-2 pb-2">
          2022 Biology Revision
        </p>
        <h1 className="p-3">By Lusia Guer</h1>

        <div className=" inline-block p-5 rounded-lg  pt-5 bg-slate-100 text-white">
          <div className=" ">
            <ShoppingCartComponents
              name={"2022 Biology Revision"}
              name1={"15.2 Total Hours:102 Vedio"}
              name2={"38 Downloadble Resorces"}
              Auther={"by gueer"}
              Month={"January"}
              price={"LKR 2000"}
            />
             <ShoppingCartComponents
              name={"2022 Biology Revision"}
              name1={"15.2 Total Hours:102 Vedio"}
              name2={"38 Downloadble Resorces"}
              Auther={"by gueer"}
              Month={"January"}
              price={"LKR 2000"}
            />
          </div>
        </div>
      </form>
    </TemplateDashboard>
  );
}

export default ShoppingCart;
