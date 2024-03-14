import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={` ${
        open ? "w-50" : "w-20 "
      } bg-dark-purple margin-[5px] relative duration-300 `}
    >
      <img
        src="./src/assets/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <ul>
        <li>
          <Link
            to={"/Teachers"}
            className="flex items-center p-3 rounded-lg dark:text-white hover:bg-red-500 dark:hover:bg-red-500 group"
          >
            <img
              src="./src/assets/men.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
          </Link>
        </li>
        <li>
          <Link
            to={"/Classes"}
            className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-red-500 dark:hover:bg-red-500 group"
          >
            <img
              src="./src/assets/Tv.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
          </Link>
        </li>
        <li>
          <Link
            to={"/Revision"}
            className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white  hover:bg-red-500 dark:hover:bg-red-500 group"
          >
            <img
              src="./src/assets/tt.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
          </Link>
        </li>
        <li>
          <Link
            to={"/ShoppingCart"}
            className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white  hover:bg-red-500 dark:hover:bg-red-500 group"
          >
            <img
              src="./src/assets/cart.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
          </Link>
        </li>
        <li>
          <Link
            to={"/RevitionLimit"}
            className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-red-500 dark:hover:bg-red-500 group"
          >
            <img
              src="./src/assets/message.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
          </Link>
        </li>
        <li>
          <Link
            to={"/Profile"}
            className="flex items-center p-3 rounded-lg dark:text-white hover:bg-red-500 dark:hover:bg-red-500 group"
          >
            <img
              src="./src/assets/men.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
          </Link>
        </li>{" "}
        <li>
          <Link
            to={"/Note"}
            className="flex items-center p-3 rounded-lg dark:text-white hover:bg-red-500 dark:hover:bg-red-500 group"
          >
            <img
              src="./src/assets/men.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
          </Link>
        </li>
        <li className="mt-12  mb-4">
          <Link
            to={"/"}
            className="flex items-center p-6 text-gray-900 rounded-lg dark:text-white hover:bg-red-500 dark:hover:bg-red-500 group"
          >
            <img
              src="./src/assets/logout.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
