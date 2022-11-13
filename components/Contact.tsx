import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = formData => {
    const { name, email, subject, message } = formData
    window.location.href = `mailto:rylander.j92@gmail.com?subject=${subject}&body=Hi, my name is ${name}, ${message}
    (${email})`
  }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-th-text-base text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need.
          <span className='underline decoration-th-highlight-50'> Let&apos;s talk.</span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5'>
            <PhoneIcon className='text-th-highlight h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+46761842847</p>
          </div>

          <div className='flex items-center space-x-5'>
            <EnvelopeIcon className='text-th-highlight h-7 w-7 animate-pulse' />
            <p className='text-2xl'>rylander.j92@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5'>
            <MapPinIcon className='text-th-highlight h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Lysviksgatan 40 | 123 42 | Stockholm, Sweden</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
            <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
          </div>

          <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

          <textarea {...register('message')} placeholder='Message' className='contactInput' />
          <button
            type='submit'
            className='bg-th-highlight py-5 px-10 rounded-md text-black font-bold text-lg'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact