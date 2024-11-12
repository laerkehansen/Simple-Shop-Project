"use client";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Category = () => {
  return (
    <section className="flex flex-wrap gap-2 text-white col-span-full mx-2 justify-center lg:row-start-1 lg:col-start-1 lg:col-end-1 xl:col-end-3 lg:flex-col self-start">
      <div className="bg-primary-black rounded-lg py-2">
        <div className="flex items-center justify-between pr-4">
          <h2 className="pl-4 text-lg">Kategori</h2>
          <IoIosArrowDown />
        </div>
        {/* <ul className="pl-7">
          <li>Beauty</li>
          <li>Furniture</li>
          <li>Food</li>
          <li>Parfume</li>
        </ul> */}
      </div>
      <div className="flex items-center justify-between pr-4 bg-primary-black rounded-lg py-2 h-fit">
        <h2 className="pl-4 text-lg">Kategori</h2>
        <IoIosArrowForward className="" />
      </div>
      <div className="flex items-center justify-between pr-4 bg-primary-black rounded-lg py-2 h-fit">
        <h2 className="pl-4 text-lg">Kategori</h2>
        <IoIosArrowForward className="" />
      </div>
      <div className="flex items-center justify-between pr-4 bg-primary-black rounded-lg py-2 h-fit">
        <h2 className="pl-4 text-lg">Kategori</h2>
        <IoIosArrowForward className="" />
      </div>
    </section>
  );
};

export default Category;
