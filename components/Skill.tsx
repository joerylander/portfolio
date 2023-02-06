import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: SkillType;
};

const Skill = ({ skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="relative border border-th-border-base  w-14 h-14 sm:w-20 sm:h-20
        md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-out border-none"
        >
          <Image
            loader={() => urlFor(skill?.image).url()}
            src={urlFor(skill?.image).url()}
            alt="skill"
            fill
            className="rounded-full object-cover object-center border border-th-border-base"
          />
        </div>
      </motion.div>

      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
       group-hover:bg-white w-14 h-14 sm:w-20 sm:h-20
       md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className=" text-lg sm:text-3xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
