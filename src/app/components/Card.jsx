"use client";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Button from "./Button";
import { useState } from "react";

const Card = ({ data }) => {
  const [items, setItems] = useState([]);

  function addItem(product) {
    // Create new item structure with a unique ID
    const newItem = {
      id: product.id,
      text: product.title, // or any other property you want
      completed: false,
      price: product.price,
    };

    // Update state with new item added to items array
    setItems((prevItems) => [...prevItems, newItem]);
    console.log("Added item:", newItem);
    console.log("new item:", items);
  }
  //   console.log(completedTasks, "pls");

  return (
    <>
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
              <button onClick={() => addItem(product)} className="px-8 py-2 bg-[--purple] text-white rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
