"use client";
import Image from "next/image";
import Star from "../img/star.svg";

const Basket = ({ isOpen, setIsOpen }) => {
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
              }}
            >
              click mig!
            </button>

            <ul>
              <li className="flex justify-around">
                <Image src={Star} alt="stjerne" />
                <div>
                  <h2 className="text-2xl">Apple Watch </h2>
                  <p>Brand</p>
                  <p className="pt-2">Price</p>
                </div>
                <div
                  className="flex justify-center gap-2 bg-white rounded-xl
             w-fit h-fit py-0 px-3"
                >
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Basket;
