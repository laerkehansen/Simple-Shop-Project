import Image from "next/image";
import Link from "next/link";

const Products = async ({}) => {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return (
    <ul>
      {data.products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>
            <Image
              src={`${product.thumbnail}`}
              alt={product.title}
              width={250}
              height={250}
            ></Image>
          </Link>
          <h1>{product.title}</h1>
          <h2>{product.brand}</h2>
          <p>{product.price}</p>
          <button>Tilføj til kurv</button>
        </li>
      ))}
    </ul>
  );
};

export default Products;
