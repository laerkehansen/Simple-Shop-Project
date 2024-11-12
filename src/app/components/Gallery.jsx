"use client";
import Image from "next/image";
import { useState } from "react";

const Gallery = ({ thumbnail, images, title }) => {
  const [selectedProduct, setSelectedProduct] = useState(thumbnail);
  return (
    <div className="grid gap-4">
      <div className="bg-[--dark-grey] grid place-content-center rounded-xl">
        <Image src={selectedProduct} height={250} width={250} alt={title}></Image>
      </div>
      <ul className="flex gap-2">
        {images.map((image, id) => (
          <li key={id} className="bg-[--dark-grey] rounded-sm">
            <button onClick={() => setSelectedProduct(image)}>
              <Image src={image} height={100} width={100} alt={title} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
