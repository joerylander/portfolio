import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Welcome!",
      `The name is ${pageInfo?.name || "Joe Rylander"}`,
      "<Coder />",
      "Life long Nerd",
      "Coffee lover!",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <div className="relative h-24 w-24 sm:h-40 sm:w-40 ">
        <Image
          loader={() => urlFor(pageInfo?.heroImage).url()}
          src={urlFor(pageInfo?.heroImage).url()}
          priority
          fill
          alt="Author Image"
          className="rounded-full object-cover"
        />
      </div>

      <div className="z-20">
        <h2 className="uppercase text-gray-500 pb-2 tracking-[15px] text-xs sm:text-sm lg:text-base">
          {pageInfo?.role}
        </h2>

        <h1 className="text-2xl m-0 sm:my-2 sm:text-4xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="text-skin-highlight" />
        </h1>

        <div className="flex flex-col sm:block">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
