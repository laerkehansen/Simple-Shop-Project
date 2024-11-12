import Accordion from "@/app/components/Acordian";
import Button from "@/app/components/Button";
import Gallery from "@/app/components/Gallery";

const Product = async ({ params }) => {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let product = await response.json();

  return (
    <section className="">
      <a href="/products">Tilbage</a>
      <div className="grid-cols-[2fr_1fr] grid gap-5">
        <Gallery thumbnail={product.thumbnail} images={product.images} title={product.title} />
        <div>
          <ul className="flex gap-2 text-gray-700 text-[16px]">
            {product.tags.map((tag) => (
              <li className="" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
          <h1 className="text-3xl">{product.title}</h1>
          <p className="text-[17px] text-gray-700">{product.brand} </p>
          <p>{product.price} kr</p>
          {/* <p>{product.discountPercentage}</p> */}
          <Button></Button>
          <p>{product.description}</p>

          <Accordion dimensions={product.dimensions} warrantyInformation={product.warrantyInformation} shippingInformation={product.shippingInformation} sku={product.sku} />
        </div>
      </div>
    </section>
  );
};

export default Product;
