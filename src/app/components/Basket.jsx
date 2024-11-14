"use client";
import Image from "next/image";
import Star from "../img/star.svg";
import List from "./List";
import { useState } from "react";

const Basket = ({ isOpen, setIsOpen, cartItems }) => {
  return (
    <>
      {isOpen && (
        <section className="bg-tertier-blue">
          <div>
            <h1 className="text-3xl">Your Chart</h1>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                console.log("isOpen", isOpen);
                console.log("basket New item", cartItems);
              }}
            >
              click mig!
            </button>
            <List cartItems={cartItems}></List>
          </div>
        </section>
      )}
    </>
  );
};

export default Basket;
