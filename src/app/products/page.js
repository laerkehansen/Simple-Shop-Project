import Image from "next/image";
import Link from "next/link";
import Star from "../img/star.svg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Products = async ({}) => {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return (
    <section className="grid grid-cols-[0.2fr_0.5fr_2fr_0.2fr] gap-6 mt-4">
      <section className="col-start-2 flex flex-col gap-2">
        <div className="bg-primary-black rounded-2xl h-fit py-6">
          <div className="flex items-center justify-between pr-4">
            <h2 className="pl-4 text-2xl">Kategori</h2>
            <IoIosArrowDown />
          </div>
          <ul className="pl-7">
            <li>Beauty</li>
            <li>Furniture</li>
            <li>Food</li>
            <li>Parfume</li>
          </ul>
        </div>
        <div className="flex items-center justify-between pr-4 bg-primary-black rounded-2xl h-fit py-6">
          <h2 className="pl-4 text-2xl">Kategori</h2>
          <IoIosArrowForward className="" />
        </div>
        <div className="flex items-center justify-between pr-4 bg-primary-black rounded-2xl h-fit py-6">
          <h2 className="pl-4 text-2xl">Kategori</h2>
          <IoIosArrowForward className="" />
        </div>
        <div className="flex items-center justify-between pr-4 bg-primary-black rounded-2xl h-fit py-6">
          <h2 className="pl-4 text-2xl">Kategori</h2>
          <IoIosArrowForward className="" />
        </div>
      </section>
      <section className="grid grid-cols-[repeat(2,minmax(0,450px))] justify-center gap-8 col-start-3">
        {data.products.map((product) => (
          <div
            key={product.id}
            className="bg-secondary-gray text-orange-950 rounded-3xl grid pt-6"
          >
            <Link
              href={`/products/${product.id}`}
              className="justify-self-center"
            >
              <Image
                src={`${product.thumbnail}`}
                alt={product.title}
                width={250}
                height={250}
              ></Image>
            </Link>
            <div className="grid grid-rows-[0.2fr_1fr_0.5fr] p-6">
              <Image src={Star} />
              <div className="flex justify-between">
                <div className="">
                  <h1 className="text-xl font-bold w-64">{product.title}</h1>
                  <h2 className="font-thin">{product.brand}</h2>
                </div>
                <p>{product.price}$</p>
              </div>
              <div className="flex justify-end">
                <button className="bg-primary-blue rounded-xl px-3 py-2 w-fit text-white">
                  Tilføj til kurv
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Products;
