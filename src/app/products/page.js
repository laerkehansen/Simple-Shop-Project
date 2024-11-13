import Image from "next/image";
import Link from "next/link";
import Star from "../img/star.svg";
import Category from "../components/Category";
import Button from "../components/Button";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Basket from "../components/Basket";
import Header from "../components/Header";
import Card from "../components/Card";

const Products = async ({}) => {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();

  return (
    <>
      <Header></Header>
      <section className="grid grid-rows-[0.1fr_2fr] grid-cols-subgrid gap-4 xl:gap-6 mt-4 col-span-full lg:grid-rows-[2fr_0.1fr]">
        <Category />
        <section className="grid grid-cols-[repeat(2,minmax(0,325px))] justify-center gap-2 col-span-full mx-2  md:grid-cols-[repeat(3,minmax(0,325px))] md:col-span-full lg:col-start-2 lg:col-end-7 lg:row-start-1 ">
          <Card data={data}></Card>
        </section>
      </section>
    </>
  );
};

export default Products;
