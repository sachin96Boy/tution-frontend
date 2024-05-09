import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-[13px] margin-[5px]  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        {/* <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
          
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div> */}
        <ul>
        <li >
            <a href="#" className="flex items-center p-3 rounded-lg dark:text-white hover:bg-red-500 dark:hover:bg-red-500 group">
            <img
            src="./src/assets/men.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
            </a>
         </li>
         <li >
            <a href="#" className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-red-500 dark:hover:bg-red-500 group">
            <img
            src="./src/assets/Tv.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
            </a>
         </li>
         <li >
            <a href="#" className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white  hover:bg-red-500 dark:hover:bg-red-500 group">
            <img
            src="./src/assets/tt.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
            </a>
         </li>
         <li >
            <a href="#" className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white  hover:bg-red-500 dark:hover:bg-red-500 group">
            <img
            src="./src/assets/cart.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
            </a>
         </li>
         <li >
            <a href="#" className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-red-500 dark:hover:bg-red-500 group">
            <img
            src="./src/assets/message.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
            </a>
         </li>

         <li className="mt-12  mb-4"> 
            <a href="#" className="flex items-center p-6 text-gray-900 rounded-lg dark:text-white hover:bg-red-500 dark:hover:bg-red-500 group">
            <img
            src="./src/assets/logout.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
            </a>
         </li>
      </ul>

      </div>

    </div>
  );
};
export default Sidebar