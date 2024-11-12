import Image from "next/image";
import Link from "next/link";
import Background from "../app/img/background.svg";
export default function Home() {
  return (
    <section className="col-start-2 h-full col-end-6 grid grid-rows-[repeat(4,auto)] grid-cols-[0.2fr_3fr]">
      <Image
        src={Background}
        alt="squiggle baggrund"
        className="col-start-1 col-end-6 row-start-1 row-end-5"
      />
      <h1 className="col-end-6 text-8xl font-bold row-start-2 col-start-2">
        Welcome to bloom
      </h1>

      <Link
        href="/products"
        className="bg-primary-blue text-4xl rounded-xl px-3 py-2 w-fit text-white col-start-2 row-start-3 border-black border-2"
      >
        Gå til produkter
      </Link>
    </section>
  );
}
