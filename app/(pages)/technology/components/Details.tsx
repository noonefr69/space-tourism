"use client";

import { TechContainerProps } from "./TechContainer";
import { motion } from "framer-motion";

export default function Details({
  filterdTech,
}: {
  filterdTech: TechContainerProps[];
}) {
  return (
    <>
      {filterdTech.map((tech, i) => (
        <div className="lg:pb-0 pb-10" key={i}>
          <motion.h1
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 }}
            className="text-5xl lg:text-start text-center font-serif text-white mb-7"
          >
            {tech.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 }}
            className="text-gray-400 lg:text-start text-center "
          >
            {tech.description}
          </motion.p>
        </div>
      ))}
    </>
  );
}
