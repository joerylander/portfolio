import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
	pageInfo: PageInfo
}

const Hero = ({ pageInfo }: Props) => {
	const [text, count] = useTypewriter({
		words: [
			`Hi, the name is ${pageInfo?.name || 'Joe Rylander'}`,
			'Guy-who-loves-Coffee',
			'<Coder />'
		],
		loop: true,
		delaySpeed: 2000
	})

	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircle />
			{/* <Image src={urlFor(pageInfo?.heroImage).url()} width={128} height={128} alt='Picture of the author' className='relative rounded-full mx-auto object-cover' /> */}
			<img
				src={urlFor(pageInfo?.heroImage).url()}
				alt="hero"
				className='w-32 h-32 relative rounded-full mx-auto object-cover'
			/>
			<div className='z-20'>

				<h2 className='uppercase text-gray-500 pb-2 tracking-[15px] text-xs sm:text-sm lg:text-base'>
					{pageInfo?.role}
				</h2>

				<h1 className='text-2xl m-0 sm:my-2 sm:text-4xl md:text-5xl lg:text-6xl font-semibold px-10'>
					<span className='mr-3'>{text}</span>
					<Cursor cursorColor='text-skin-highlight' />
				</h1>

				<div className='flex flex-col sm:block'>
					<Link href='#about'>
						<button className='heroButton'>About</button>
					</Link>

					<Link href='#experience'>
						<button className='heroButton'>Experience</button>
					</Link>

					<Link href='#skills'>
						<button className='heroButton'>Skills</button>
					</Link>

					<Link href='#projects'>
						<button className='heroButton'>Projects</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero