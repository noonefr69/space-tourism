import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavbarMobile() {
  return (
    <div className="flex items-center justify-between absolute top-0 left-0 w-full z-50 md:hidden p-10">
      <Link className="shrink-0" href={`/`}>
        <Image src={`/shared/logo.svg`} alt="logo.svg" width={50} height={50} />
      </Link>
      <Sheet>
        <SheetTrigger className="cursor-pointer">
          <Image
            src={`/shared/icon-hamburger.svg`}
            alt="menu"
            width={50}
            height={50}
          />
        </SheetTrigger>
        <SheetContent className="backdrop-blur-md bg-transparent outline-0 border-0">
          <div className="sr-only">
            <SheetTitle>Menu</SheetTitle>
          </div>
          <div className="shrink-0 backdrop-blur-sm px-4 lg:px-10 flex flex-col mt-20 text-white lg:gap-4">
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
        </SheetContent>
      </Sheet>
    </div>
  );
}
