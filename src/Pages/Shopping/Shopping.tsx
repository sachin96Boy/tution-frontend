import CartItem from "../../Components/CartItem";

const Shopping = () => {
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full min-w-fit pr-2">
      <h1 className="text-[30px] font-[700] text-prime">Shopping Cart</h1>
      <h2 className="text-[20px] font-[500] text-prime-alt mt-4">
        2 items in cart
      </h2>
      <div className="flex flex-row justify-start gap-8 items-start h-full w-full mt-12 flex-wrap">
        <div className="flex flex-col w-[60%] max-md:w-full gap-y-4">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="min-w-[385px] h-[240px] max-md:h-fit bg-white rounded-[10px] shadow-md p-4 max-md:min-w-full">
          <h2 className="text-[20px] font-[500] text-prime">Total</h2>
          <h1 className="text-[40px] font-[700] text-prime">LKR 4000.00</h1>
          <button className="w-full h-[52px] bg-tertiary-alt text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200 mt-16">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Shopping;
