import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article
      className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
       w-[500px] h-[500px] md:w-[600px] md:h-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100
       opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
    >
      {/* <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image src='/logo-bird.jpg' width={128} height={128} alt='logo'
          className='rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        />
      </motion.div> */}

      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }} src='/logo-bird.jpg' alt='logo'
        className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Work Title (CEO OF PAPAFAM)</h4>
        <p className='font-bold text-2xl mt-1'>Company name (PAPAFAM)</p>
        <div className='flex space-x-2 my-2'>
          <img src='/js-logo.png' alt='tech' className='rounded-full h-10 w-10' />
          <Image src='/js-logo.png' alt='tech' width={40} height={10} className='rounded-full h-10 w-10' />
          <Image src='/js-logo.png' alt='tech' width={40} height={10} className='rounded-full h-10 w-10' />
          <Image src='/js-logo.png' alt='tech' width={40} height={40} className='rounded-full h-10 w-10' />
        </div>
        <p className='uppercase py-5 text-gray-300'>
          (Dates): Started work... - Ended...
        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary points Summary points Summary points Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points Summary points Summary points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard