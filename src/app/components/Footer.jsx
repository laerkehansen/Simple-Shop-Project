import Image from "next/image";
import logo from "../img/logo.svg";
const Footer = () => {
  return (
    <footer className="bg-[#292621] rounded-t-lg">
      <div className="flex justify-between pt-14 pb-14 pr-6 pl-6">
        <div>
          <Image src={logo} alt="hej" />
        </div>
        <div>
          <h2 className=" text-2xl">Contact us</h2>
          <p>Phone: 33113311</p>
          <p>Location: Copenhagen</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl">Website</h2>
          <a href="#">Home</a>
          <a href="#">Products</a>
        </div>
        <div>
          <h2 className="text-2xl">Newsletter</h2>

          <input type="text" />

          <div className="flex">
            <input type="checkbox" />
            <p>I accept the terms Read terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
