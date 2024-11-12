import Image from "next/image";
import Link from "next/link";
import Star from "../img/star.svg";
import Category from "../components/Category";
import Button from "../components/Button";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Products = async ({}) => {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return (
    <section className="grid grid-rows-[0.1fr_2fr] grid-cols-subgrid gap-4 xl:gap-6 mt-4 col-span-full lg:grid-rows-[2fr_0.1fr]">
      <Category />
      <section className="grid grid-cols-[repeat(2,minmax(0,325px))] justify-center gap-2 col-span-full mx-2  md:grid-cols-[repeat(3,minmax(0,325px))] md:col-span-full lg:col-start-2 lg:col-end-7 lg:row-start-1 ">
        {data.products.map((product) => (
          <div key={product.id} className="bg-secondary-gray text-orange-950 rounded-xl grid p-2 gap-4">
            <Link href={`/products/${product.id}`} className="justify-self-center">
              <Image src={`${product.thumbnail}`} alt={product.title} width={200} height={200}></Image>
            </Link>
            <div className="grid self-end">
              {/* <Image src={Star} /> */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, index) => {
                  if (index < Math.floor(product.rating)) {
                    return <FaStar key={index} color="#7790ed" size={20} />;
                  } else if (index < Math.floor(product.rating) + 1 && product.rating % 1 >= 0.5) {
                    return <FaStarHalfAlt key={index} color="#7790ed" size={20} />;
                  } else {
                    return <FaRegStar key={index} color="#7790ed" size={20} />;
                  }
                })}
              </div>
              <div className="flex justify-between items-start">
                <h1 className="text-xl font-bold max-w-[14rem] ">{product.title}</h1>
                {/* <h2 className="font-thin">{product.brand}</h2> */}
                <p className="">{product.price} $</p>
              </div>
              <ul className="flex gap-2 text-[0.85rem]">
                {product.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="grid justify-end">
                {/* <button className="bg-primary-blue rounded-xl px-3 py-2 text-white">Tilføj til kurv</button> */}
                <Button></Button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Products;
