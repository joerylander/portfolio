import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen 
      text-center md:text-left md:flew-row max-w-7xl
      px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.5
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src='/joeviking.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background
        </h4>
        <p className='text-base'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, ad asperiores explicabo facere cum animi nisi dolores inventore sunt cumque quod distinctio quam cupiditate excepturi neque veniam obcaecati reprehenderit architecto eum doloremque, mollitia iste ex impedit est. Alias necessitatibus ipsam facilis officia qui sint? Sunt rem ullam consequatur suscipit hic magnam illo facere distinctio quibusdam voluptate minus voluptatum id natus consectetur velit, nemo placeat debitis quo autem repellendus mollitia amet laboriosam. Architecto beatae repudiandae natus quisquam distinctio dolores, deserunt eos?
        </p>
      </div>
    </motion.div>
  )
}

export default About