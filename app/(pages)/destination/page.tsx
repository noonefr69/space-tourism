"use client";

import { useState } from "react";
import datas from "../../../data.json";
import Image from "next/image";

export default function Destination() {
  const [filterd, setFilterd] = useState("Moon");
  const filterByCategory = datas.destinations.filter((d) => {
    return d.name === filterd;
  });
  return (
    <div className="bg-[url('/destination/background-destination-mobile.jpg')]  md:bg-[url('/destination/background-destination-tablet.jpg')] lg:bg-[url('/destination/background-destination-desktop.jpg')] min-h-screen bg-no-repeat bg-center bg-cover"></div>
  );
}
