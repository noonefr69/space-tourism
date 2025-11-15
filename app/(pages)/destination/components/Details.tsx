"use client";
import { motion } from "framer-motion";

type D = {
  name: string;
  description: string;
  distance: string;
  travel: string;
};

export default function Details({ destination }: { destination: D }) {
  return (
    <div className="row-span-2">
      <motion.h1
        layout
        className="lg:text-8xl text-7xl text-center lg:text-start mb-7 font-serif text-white"
      >
        {destination.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.05 }}
        className="lg:max-w-2/3 text-gray-400 text-center lg:text-start lg:text-lg font-medium"
      >
        {destination.description}
      </motion.p>

      <div className="h-px w-full lg:max-w-2/3 rounded-full bg-[#ffffff1f] my-7" />

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="flex gap-5 pb-10 lg:gap-12 flex-col lg:flex-row items-center"
      >
        <div>
          <h3 className="uppercase text-center lg:text-start text-gray-400 font-medium">
            Avg. distance
          </h3>
          <h1 className="text-3xl text-white font-serif">
            {destination.distance}
          </h1>
        </div>
        <div>
          <h3 className="uppercase text-center lg:text-start text-gray-400 font-medium">
            Est. travel time
          </h3>
          <h1 className="text-3xl text-white font-serif">
            {destination.travel}
          </h1>
        </div>
      </motion.div>
    </div>
  );
}
