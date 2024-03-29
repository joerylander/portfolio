import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left
      md:flew-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute phone-h:top-14 top-24 uppercase tracking-[20px] text-th-text-base text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden
      snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]"
      >
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col
            space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                loader={() => urlFor(project?.image).url()}
                src={urlFor(project.image).url()}
                width={320}
                height={240}
                alt="Project Image"
                className="rounded-2xl h-48 w-60 sm:h-[280px] sm:w-[400px] md:h-[350px] md:w-[500px] mb-2 shadow-2xl"
              />
            </motion.div>

            <div className="space-y-7 px-0 md:px-10 max-w-5xl">
              <h4 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-center">
                <span className="underline decoration-th-highlight-50">
                  Project {i + 1} / {projects.length}:
                </span>
                &nbsp; {project?.title}
              </h4>

              <div className="flex flex-col items-center justify-evenly sm:flex-row">
                <div className="flex items-center justify-center space-x-2 my-4">
                  <SocialIcon
                    key={project?._id}
                    url={project?.linkToBuild}
                    fgColor="gray"
                    bgColor="transparent"
                    style={{ height: 55, width: 55 }}
                  />
                  <Link
                    href={project?.linkToSite}
                    as={project?.linkToSite}
                    legacyBehavior
                  >
                    <a target="_blank">
                      <FontAwesomeIcon
                        style={{ height: 30, width: 30 }}
                        icon={faEye}
                      />
                    </a>
                  </Link>
                </div>

                <div className="flex items-center justify-center space-x-2 my-4">
                  {project?.technologies.map((tech) => (
                    <Image
                      key={tech?._id}
                      loader={() => urlFor(tech.image).url()}
                      src={urlFor(tech.image).url()}
                      alt="tech"
                      width={40}
                      height={40}
                      className="rounded-full border border-th-border-base object-cover"
                    />
                  ))}
                </div>
              </div>

              <p className="text-base sm:text-lg text-center xl:m-24 md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-th-highlight-10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
