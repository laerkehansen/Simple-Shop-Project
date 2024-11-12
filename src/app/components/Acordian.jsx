"use client";
import Accordionitem from "./Acordianitem";
import { useState } from "react";
const Accordion = ({
  dimensions,
  sku,
  warrantyInformation,
  shippingInformation,
}) => {
  const [isOpen, setIsOpen, item] = useState(0);
  return (
    <div>
      <ul className=" list-none max-w-3xl  p-4 rounded-lg">
        <Accordionitem
          item={1}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          question="andet information"
          textOne={sku}
          textTwo={warrantyInformation}
          textThree={shippingInformation}
        />
        <Accordionitem
          item={2}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          textOne={` Depth: ${dimensions.depth}`}
          textTwo={`Height: ${dimensions.height}`}
          textThree={`Width ${dimensions.width}`}
          question="produkt mål"
        />
      </ul>
    </div>
  );
};

export default Accordion;
