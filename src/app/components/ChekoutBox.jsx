const ChekOutBox = () => {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <ul className="grid grid-cols-1 min-w-16  bg-neutral-100 p-2">
          <li className="flex flex-row  justify-between p-2">
            <p>Items total</p>
            <p>133kr</p>
          </li>
          <li className="flex flex-row  justify-between p-2">
            <p>Discount</p>
            <p className="text-red-600">-33kr</p>
          </li>
          <li className="flex flex-row  justify-between p-2">
            <p>Standart shipping total</p>
            <p>49 kr</p>
          </li>
        </ul>
        <ul className=" bg-neutral-100">
          <li className="flex flex-row  justify-between  px-2 py-4 ">
            <p className="pl-2">Total </p>
            <p>149kr </p>
          </li>
        </ul>
        <div className="  bg-neutral-100 flex justefiy-center ">
          <button className="bg-sky-700 py-2 px-5 ">Chekout</button>
        </div>
      </div>
    </section>
  );
};

export default ChekOutBox;
