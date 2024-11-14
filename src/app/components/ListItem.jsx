import Image from "next/image";
const ListItem = ({ title, price, tag, image }) => {
  return (
    <li className="flex justify-around">
      <Image width={150} height={150} src={image} alt={title} />
      <div>
        <h2 className="text-2xl">{title} </h2>
        <p>{tag}</p>
        <p className="pt-2">{price}</p>
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
  );
};

export default ListItem;
