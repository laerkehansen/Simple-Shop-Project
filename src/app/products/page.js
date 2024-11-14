"use client";
import { useState, useEffect } from "react";
import Category from "../components/Category";
import Header from "../components/Header";
import Card from "../components/Card";

const Products = () => {
  // State til at holde produktdata
  const [data, setData] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Funktion til at hente produktdata
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setData(data); // Opdater state med produktdata
    };
    fetchData(); // Kalder funktionen for at hente data, når komponenten indlæses
  }, []);

  // Funktion til at tilføje produkter til kurven
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Render kun komponenten, når data er hentet
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Header cartItems={cartItems} />
      <section className="grid grid-rows-[0.1fr_2fr] grid-cols-subgrid gap-4 xl:gap-6 mt-4 col-span-full lg:grid-rows-[2fr_0.1fr]">
        <Category />
        <section className="grid grid-cols-[repeat(2,minmax(0,325px))] justify-center gap-2 col-span-full mx-2  md:grid-cols-[repeat(3,minmax(0,325px))] md:col-span-full lg:col-start-2 lg:col-end-7 lg:row-start-1 ">
          <Card data={data} setCartItems={setCartItems} addToCart={addToCart} />
        </section>
      </section>
    </>
  );
};

export default Products;
