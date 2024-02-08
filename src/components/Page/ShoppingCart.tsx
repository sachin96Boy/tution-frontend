import React from "react";
import TemplateDashboard from "../TemplateDashboard";
import ShoppingCartComponents from "../ShoppingCartComponent";
import TotalComponents from "../TotalComponent";

function ShoppingCart() {
  return (
    <TemplateDashboard>
      <form>
        <p className="text-2xl text-left pl-5 pt-2 pb-2">Shopping Cart</p>
        <h1 className="p-3">02 course in Cart</h1>

        <div className="grid grid-cols-2 grid-flow-col md:grid-cols-2 gap-4 p-5 rounded-lg  pt-5 bg-slate-100 text-white w-full">
          <div className="row-span-1 col-span-1	">
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
          <div className="col-span-2 gap-8">
          <TotalComponents Title="Totle" Total="LKR 4000" TTbutton="Checkout" />
          </div>
        </div>
      </form>
    </TemplateDashboard>
  );
}

export default ShoppingCart;
