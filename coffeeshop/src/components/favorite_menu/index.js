import React from "react";

import { AiOutlineCheck, AiOutlineHeart } from "react-icons/ai";
import product from "../../assets/images/product-placeholder.jpg";

const FavoriteMenu = () => {
  return (
    <div>
      <section className="mt-10">
        <div className="mt-20 flex items-center justify-evenly">
          <div className="flex flex-col items-center border-2 px-5  border-pale rounded-lg w-64 h-[70vh]">
            <img src={product} className="rounded-full  -mt-16" />
            <p className="font-bold mt-20">Hazelnut Latte</p>
            <div className="">
              <span className="flex items-center py-3 text-text">
                <AiOutlineCheck color="#2FAB73" className="h-5 w-5 font-bold" />
                <p className="ml-4">HazelnutSyrup</p>
              </span>
              <span className="flex items-center py-3 text-text">
                <AiOutlineCheck color="#2FAB73" className="h-5 w-5 font-bold" />
                <p className="ml-4">Wanilla Whipped Cream</p>
              </span>
              <span className="flex items-center py-3 text-text">
                <AiOutlineCheck color="#2FAB73" className="h-5 w-5 font-bold" />
                <p className="ml-4">Ice/Hot</p>
              </span>
              <span className="flex items-center py-3 text-text">
                <AiOutlineCheck color="#2FAB73" className="h-5 w-5 font-bold" />
                <p className="ml-4">Sliced Banana on Top</p>
              </span>
            </div>
            <div className="flex flex-col items-center bottom-3">
              <p className="text-title font-bold">IDR 25.000</p>
              <button className="px-20 py-3 rounded-3xl mt-3 bg-transparent border-2 font-bold border-secondary text-secondary hover:bg-primary hover:border-secondary ease-in-out duration-300 ">
                Select
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FavoriteMenu;
