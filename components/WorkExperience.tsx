import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
import { Carousel } from "flowbite-react";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left
      md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute phone-h:top-14 top-24 uppercase tracking-[20px] text-th-text-base text-2xl">
        Experience
      </h3>

      {/* 
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
        {experiences?.map((exp) => (
          <ExperienceCard key={exp._id} experience={exp} />
        ))}
      </div> */}
      <div className="w-full flex md:p-10 snap-x snap-mandatory">
        <Carousel slide={false}>
          {experiences?.map((exp) => (
            <ExperienceCard key={exp._id} experience={exp} />
          ))}
        </Carousel>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
