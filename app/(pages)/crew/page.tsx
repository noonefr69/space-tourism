"use client";

import { useState } from "react";
import data from "../../../data.json";
import Image from "next/image";
import CrewContainer from "./components/CrewContainer";

export default function Crew() {
  const crews = data.crew;
 

  return (
    <div className="bg-[url('/crew/background-crew-mobile.jpg')]  md:bg-[url('/crew/background-crew-tablet.jpg')] lg:bg-[url('/crew/background-crew-desktop.jpg')] min-h-screen bg-no-repeat bg-center bg-cover">
      <div className="min-h-screen lg:px-10 px-2 pt-32 md:pt-48 lg:pt-52 container gap-16 mx-auto grid lg:grid-cols-2">
       <CrewContainer crews={crews}/>
      </div>
    </div>
  );
}
