"use client";

import { useState } from "react";
import Tabs from "./Tabs";
import Image from "next/image";
import Details from "./Details";
import { motion, AnimatePresence } from "framer-motion";

export type TechContainerProps = {
  name: string;
  images: { landscape: string; portrait: string };
  description: string;
};

export default function TechContainer({
  techs,
}: {
  techs: TechContainerProps[];
}) {
  const [filterd, setFilterd] = useState("Launch vehicle");
  const filterdTech = techs.filter((tech) => {
    return tech.name === filterd;
  });
  return (
    <div className="grid lg:grid-cols-2 items-center lg:px-10 gap-16 duration-200">
      <div className="lg:flex items-center gap-5 hidden">
        <div className="flex flex-col gap-5">
          <Tabs techs={techs} filterd={filterd} setFilterd={setFilterd} />{" "}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filterd}
            initial={{ opacity: 0, x: -2 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -2 }}
            transition={{ duration: 0.35 }}
            className=""
          >
            <motion.h3
              initial={{ opacity: 0, x: -3 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 }}
              className="text-gray-400 font-semibold lg:text-xl uppercase font-mono"
            >
              The terminology...
            </motion.h3>
            <Details filterdTech={filterdTech} />
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35 }}
          key={filterd}
          className="hidden lg:flex pb-10"
        >
          {filterdTech.map((tech, i) => (
            <Image
              key={i}
              src={tech.images.portrait}
              alt={tech.name}
              width={500}
              height={500}
              className="rounded-2xl"
            />
          ))}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          key={filterd}
          className="flex lg:hidden relative w-full h-44"
        >
          {filterdTech.map((tech, i) => (
            <Image
              key={i}
              src={tech.images.landscape}
              alt={tech.name}
              // width={500}
              // height={500}
              fill
              // className="w-full "
            />
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col items-center gap-5 lg:hidden px-2 duration-200">
        <div className="flex gap-5">
          <Tabs techs={techs} filterd={filterd} setFilterd={setFilterd} />{" "}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            key={filterd}
            className="duration-200"
          >
            <motion.h3
              initial={{ x: -3 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.35 }}
              className="text-gray-400 mb-4 uppercase font-mono text-center"
            >
              The terminology...
            </motion.h3>
            <Details filterdTech={filterdTech} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
