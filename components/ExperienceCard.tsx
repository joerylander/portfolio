import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  console.log(experience);

  return (
    <article
      className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
       w-[500px] h-[500px] md:w-[600px] md:h-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100
       opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        alt='logo'
        className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience?.company}</p>

        <div className='flex space-x-2 my-2'>
          {experience?.technologies.map((tech) => (
            <img
              key={tech._id}
              src={urlFor(tech?.image).url()}
              alt='techStack'
              className='rounded-full h-10 w-10' />
            // <Image
            //   key={tech._id}
            //   src={urlFor(tech?.image).url()}
            //   alt='techStack'
            //   width={40}
            //   height={10}
            //   className='rounded-full h-10 w-10' />

          ))}
        </div>

        <p className='uppercase py-5 text-gray-300'>
          {new Date(experience.dateStarted).toDateString()}
          &nbsp; &#8212; &nbsp; {experience.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg overflow-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 max-h-96'>
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard