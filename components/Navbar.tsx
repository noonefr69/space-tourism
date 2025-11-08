import Image from "next/image";
import Link from "next/link";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  );
}
