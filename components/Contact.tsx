import React, { useState } from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"
import { getErrorMessage, reportError } from '../utils/errorHandler'
import axios from 'axios'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      const config = {
        method: 'post',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: formData
      }
      const response = await axios(config)

      if (response.status === 200) {
        setSubmitted(true)
        reset()
      }
      return
    } catch (err) {
      // reportError({ message: getErrorMessages({ error: err }) })
      if (err instanceof Error)
        console.error(err.message)
    }
  }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-th-text-base text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-base sm:text-2xl md:text-4xl font-semibold text-center'>
          I have got just what you need.
          <span className='underline decoration-th-highlight-50'> Let&apos;s talk.</span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5'>
            <PhoneIcon className='text-th-highlight h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-sm sm:text-lg md:text-2xl'>+46761842847</p>
          </div>

          <div className='flex items-center space-x-5'>
            <EnvelopeIcon className='text-th-highlight h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-sm sm:text-lg md:text-2xl'>rylander.j92@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5'>
            <MapPinIcon className='text-th-highlight h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-sm sm:text-lg md:text-2xl'>Lysviksgatan 40 | 123 42 | Stockholm, Sweden</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col flex-wrap space-y-2 w-fit mx-auto'>
          <div className='flex flex-col sm:flex-row space-x-0 space-y-2 sm:space-x-3 sm:space-y-0'>
            <input {...register('name')} placeholder='Name' name='name' className='contactInput' type="text" required />
            <input {...register('email')} placeholder='Email' name='email' className='contactInput' type="email" required />
          </div>

          <input {...register('subject')} placeholder='Subject' name='subject' className='contactInput' type="text" required />
          <textarea {...register('message')} placeholder='Message' name='message' className='contactInput' required />
          <button
            type='submit'
            disabled={submitted}
            className={`${!submitted ? 'bg-th-highlight' : 'bg-green-500'} py-5 px-10 rounded-md text-black font-bold text-lg`}>
            {!submitted ? 'Submit' : 'Sent'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
