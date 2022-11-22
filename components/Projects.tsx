import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  projects: Project[]
}

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left
      md:flew-row max-w-full justify-evenly mx-auto items-center z-0'>

      <h3 className='absolute top-24 uppercase tracking-[20px] text-th-text-base text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden
      snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>

        {projects?.map((project, i) => (
          <div
            key={i}
            className='w-screen flex-shrink-0 snap-center flex flex-col
            space-y-5 items-center justify-center p-20 md:p-44 h-screen'>

            <motion.div
              initial={{
                y: -300,
                opacity: 0
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                loader={() => urlFor(project?.image).url()}
                src={urlFor(project.image).url()}
                width={80}
                height={80}
                alt="Project Image"
              />
            </motion.div>

            <div className='sapce-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-th-highlight-50'>
                  Project {i + 1} of {projects.length}:
                </span>
                &nbsp; {project?.title}
              </h4>

              <div className='flex items-center justify-center space-x-2 my-4'>
                {project?.technologies.map(tech => (
                  <Image
                    key={tech._id}
                    loader={() => urlFor(tech.image).url()}
                    src={urlFor(tech.image).url()}
                    alt="tech"
                    width={40}
                    height={40}
                  />
                ))}
              </div>

              <p className='text-lg text-center md:text-left'>
                {project?.summary}
              </p>

              {/* Add link / url to project site */}
            </div>
          </div>
        ))}

      </div>

      <div className='w-full absolute top-[30%] bg-th-highlight-10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects