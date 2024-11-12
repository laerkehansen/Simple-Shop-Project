import Image from "next/image";
import Accordion from "@/app/components/Acordian";
const Product = async ({ params }) => {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let product = await response.json();
  return (
    <section className="grid-cols-2 grid">
      <div className="">
        <a href="/products">Tilbage</a>
        <div className="bg-indigo-300">
          <Image
            src={`${product.thumbnail}`}
            height={250}
            width={250}
            alt={product.title}
          ></Image>{" "}
        </div>
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
      </div>
      {/* <div>{product.images}</div> */}
      <div>
        <h1>{product.title}</h1>
        <p>{product.brand} </p>
        <p>{product.price}</p>
        <p>{product.discountPercentage}</p>
        <p>{product.description}</p>

        <Accordion
          dimensions={product.dimensions}
          warrantyInformation={product.warrantyInformation}
          shippingInformation={product.shippingInformation}
          sku={product.sku}
        />
      </div>
    </section>
  );
};

export default Product;
