import Image from "next/image";

const Product = async ({ params }) => {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let product = await response.json();
  return (
    <div>
      <a href="/products">Tilbage</a>
      <Image
        src={`${product.thumbnail}`}
        height={250}
        width={250}
        alt={product.title}
      ></Image>
      <ul className="flex gap-2">
        {product.images.map((image) => (
          <li key={product.id}>
            {" "}
            <Image
              src={`${image}`}
              height={100}
              width={100}
              alt={product.title}
            ></Image>
          </li>
        ))}
      </ul>
      {/* <div>{product.images}</div> */}
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
