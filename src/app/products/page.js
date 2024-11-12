import Image from "next/image";
import Link from "next/link";
import Star from "../img/star.svg";

const Products = async ({}) => {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return (
    <section className="grid grid-cols-[repeat(2,minmax(0,450px))] justify-center gap-8">
      {data.products.map((product) => (
        <div
          key={product.id}
          className="bg-orange-200 text-orange-950 rounded-3xl grid pt-6"
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
              <button className="bg-red-400 rounded-xl px-3 py-2 w-fit text-white">
                Tilføj til kurv
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;
