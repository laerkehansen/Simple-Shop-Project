"use client";
import { useEffect } from "react";

const Basket = ({ isOpen, setIsOpen, cartItems }) => {
  // Luk kurven, når der klikkes udenfor den
  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (!e.target.closest("#basketModal")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, [setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="basketModal"
      className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-4 z-50"
    >
      <h2 className="text-lg font-bold">Kurv</h2>
      {cartItems.length > 0 ? (
        <ul className="mt-4">
          {cartItems.map((item, index) => (
            <li key={index} className="border-b py-2">
              <p>{item.title}</p>
              <p>{item.price} $</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Kurven er tom</p>
      )}
      <button
        onClick={() => setIsOpen(false)}
        className="mt-4 bg-primary-black text-white px-4 py-2 rounded"
      >
        Luk
      </button>
    </div>
  );
};

export default Basket;
