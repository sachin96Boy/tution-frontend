import React from "react";
import { BsCart } from "react-icons/bs";
import { GoBell } from "react-icons/go";

function Navbar() {
  return (
    <>
      <div className=" grid-cols-4 flex justify-center sm">
        <div className="w-full border-b-2 border-black-200">
          <div className="bg-white h-16  items-center px-9 flex justify-between">
            <div>
              <img
                src="https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png"
                className="block btn- h-8 w-auto"
                alt=""
              />
            </div>
            <div className="lg:block mr-auto ml-40 relative w-[40rem]">
              <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0
                      11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </p>
              <input
                placeholder="Type to search"
                type="search"
                className="border border-gray-300 focus:ring-red-600 focus:border--600 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-8 py-8"
              />
            </div>

            {/* cart */}

            <div className="grid grid-cols-4 place-content-center ">
              <div className="">
                <BsCart className="h-8 w-8 items-center justify-center" />
              </div>
              {/* message */}

              <div className="grid grid-cols-4 justify-center place-content-center">
                <GoBell className="h-8 w-8 bg-center" />
              </div>
            </div>
            <div className="justify-center items-center flex relative">
              <img
                src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
                className="object-cover btn- h-9 w-9  mr-2 bg-gray-300"
                alt=""
              />
              <p className="font-semibold text-sm">S</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
