import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordionitem = ({
  isOpen,
  setIsOpen,
  question,

  item,
  textOne,
  textTwo,
  textThree,
}) => {
  return (
    <li>
      <button
        onClick={() => {
          isOpen == item ? setIsOpen(0) : setIsOpen(item);
        }}
        className=" flex items-center justify-between border-white w-[20rem] p-2 border-b-2"
      >
        <p className="text-black font-sans font-semibold ">{question}</p>
        {isOpen == item ? (
          <IoIosArrowDown className="place-items-center  text-stone-950 w-7 h-7" />
        ) : (
          <IoIosArrowUp className=" text-stone-950 w-7 h-7" />
        )}
        {/* hvad med transition her  */}
      </button>
      {isOpen == item && (
        <div className="p-2">
          <p className="font-sans text-gray-950"> {textOne}</p>
          <p className="font-sans text-gray-950"> {textTwo}</p>
          <p className="font-sans text-gray-950"> {textThree}</p>
        </div>
      )}
    </li>
  );
};

export default Accordionitem;
