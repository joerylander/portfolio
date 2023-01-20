import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      className="w-full flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
       snap-center p-5 bg-th-bg-secondary hover:opacity-100
       opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          loader={() => urlFor(experience?.companyImage).url()}
          src={urlFor(experience?.companyImage).url()}
          alt="logo"
          width={96}
          height={96}
          className="h-24 w-24 sm:h-32 sm:w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">
          {experience?.jobTitle}
        </h4>
        <p className="font-bold md:text-2xl mt-1">{experience?.company}</p>

        <div className="hidden sm:flex flex-wrap space-x-2 my-2">
          {experience?.technologies.map((tech) => (
            <Image
              key={tech._id}
              loader={() => urlFor(tech?.image).url()}
              src={urlFor(tech?.image).url()}
              alt="tech"
              width={40}
              height={10}
              className="rounded-full h-10 w-10"
            />
          ))}
        </div>

        <p className="text-sm sm:text-base uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()}
          &nbsp; &#8212; &nbsp;{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg overflow-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 max-h-96">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
