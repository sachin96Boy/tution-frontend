// ShoppingCart.js

import TemplateDashboard from "../TemplateDashboard";
import ShoppingCartComponents from "../ShoppingCartComponent";
import TotalComponents from "../TotalComponent";

function ShoppingCart() {
  return (
    <TemplateDashboard>
      <form>
        <p className="text-left pl-5 pt-2 pb-2 font-bold  text-[#3B5079]  text-3xl">Shopping Cart</p>
        <h1 className="p-3 text-[#7383A1] font-bold  text-2xl">02 courses in Cart</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-5 rounded-lg pt-5 bg-slate-100 text-white">
          <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-3">
            <ShoppingCartComponents
              name={"2022 Biology Revision"}
              name1={"15.2 Total Hours:102 Video"}
              name2={"38 Downloadable Resources"}
              Auther={"by gueer"}
              Month={"January"}
              price={"LKR 3000"}
            />
            <ShoppingCartComponents
              name={"2022 Biology Revision"}
              name1={"15.2 Total Hours:102 Video"}
              name2={"38 Downloadable Resources"}
              Auther={"by gueer"}
              Month={"January"}
              price={"LKR 2000"}
            />
            <ShoppingCartComponents
              name={"2022 Biology Revision"}
              name1={"15.2 Total Hours:102 Video"}
              name2={"38 Downloadable Resources"}
              Auther={"by gueer"}
              Month={"January"}
              price={"LKR 2000"}
            />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <TotalComponents Title="Total" Total="LKR 4000" TTbutton="Checkout" />
          </div>
        </div>
      </form>
    </TemplateDashboard>
  );
}

export default ShoppingCart;
