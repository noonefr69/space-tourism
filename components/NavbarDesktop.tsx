import Image from "next/image";
import Link from "next/link";

export default function NavbarDesktop() {
  return (
    <div className="md:flex items-center justify-between absolute w-full pt-10 hidden">
      <Link className="ml-7 lg:ml-10 shrink-0" href={`/`}>
        <Image src={`/shared/logo.svg`} alt="logo.svg" width={50} height={50} />
      </Link>
      <div className="h-px w-full z-10 rounded-2xl relative left-10 bg-[#ffffff3c]"></div>
      <div className="shrink-0 backdrop-blur-sm px-7 lg:px-10 flex items-center text-white lg:gap-4">
        <Link
          className="p-8 lg:p-10 lg:text-lg duration-200 border-b-2 border-transparent hover:border-white"
          href={`/`}
        >
          <span className="font-bold">00</span> HOME
        </Link>
        <Link
          className="p-8 lg:p-10 lg:text-lg duration-200 border-b-2 border-transparent hover:border-white"
          href={`/destination`}
        >
          <span className="font-bold">01</span> DESTINATION
        </Link>
        <Link
          className="p-8 lg:p-10 lg:text-lg duration-200 border-b-2 border-transparent hover:border-white"
          href={`/crew`}
        >
          <span className="font-bold">02</span> CREW
        </Link>
        <Link
          className="p-8 lg:p-10 lg:text-lg duration-200 border-b-2 border-transparent hover:border-white"
          href={`/technology`}
        >
          <span className="font-bold">03</span> TECHNOLOGY
        </Link>
      </div>
    </div>
  );
}
