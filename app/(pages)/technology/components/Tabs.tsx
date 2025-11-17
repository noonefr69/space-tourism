"use client";

import { TechContainerProps } from "./TechContainer";
import { motion } from "framer-motion";

export default function Tabs({
  techs,
  filterd,
  setFilterd,
}: {
  techs: TechContainerProps[];
  filterd: string;
  setFilterd: (name: string) => void;
}) {
  return (
    <>
      {techs.map((tech, i) => (
        <motion.button
          initial={{ opacity: 0, x: (i + 1) * -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={() => setFilterd(tech.name)}
          className={`${
            tech.name === filterd
              ? "bg-white text-black"
              : "text-white bg-black hover:outline-white"
          } active:scale-95 h-16 text-4xl w-16 font-serif duration-200 flex items-center justify-center cursor-pointer rounded-full outline-2 outline-[#ffffff34]`}
          key={i}
        >
          {i + 1}
        </motion.button>
      ))}
    </>
  );
}
