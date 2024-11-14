"use client";
import BasketIcon from "../img/basket.svg";
import Basket from "./Basket";
import Link from "next/link";
import Image from "next/image";
import Logo from "../img/logo.svg";
import { useState } from "react";

const Header = ({ cartItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="col-start-3 col-end-6 grid grid-rows-1 mt-4">
      <nav className="flex bg-primary-black text-secondary-gray py-6 text-xl justify-between px-10 rounded-md">
        <Link href="/">
          <Image src={Logo} alt="logo af brandet" />
        </Link>
        <ul className="flex gap-4 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <button onClick={() => setIsOpen(!isOpen)} className="relative flex items-center">
            <Image src={BasketIcon} alt="illustration af kurv" />
            {/* Badge til antal af varer i kurven */}
            {cartItems.length > 0 && <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">{cartItems.length}</span>}
          </button>
        </ul>
      </nav>
      {/* Send cartItems som prop til Basket */}
      <Basket isOpen={isOpen} setIsOpen={setIsOpen} cartItems={cartItems} />
    </header>
  );
};

export default Header;
