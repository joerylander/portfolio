import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen 
      text-center md:text-left md:flex-row max-w-7xl
      px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute phone-h:top-14 top-24 uppercase tracking-[20px] text-th-text-base text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Image
          loader={() => urlFor(pageInfo?.profilePic).url()}
          src={urlFor(pageInfo?.profilePic).url()}
          alt="profile image"
          width={100}
          height={100}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
         md:rounded-lg md:w-64 md:h-95 xl:w-[900px] xl:h-[600px]"
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold bg-highlight">
          Here is a{" "}
          <span className="underline decoration-th-highlight">little</span>{" "}
          background
        </h4>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;
