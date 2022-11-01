import React from 'react'
import Image from 'next/image'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
	const [text, count] = useTypewriter({
		words: [
			'Hi, the name is Jojo',
			'Guy-who-loves-Coffee.tsx',
			'<ButLovesToCodeMore />'
		],
		loop: true,
		delaySpeed: 2000
	})
	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircle />
			<Image src='/joeviking.jpg' width={128} height={128} alt='Picture of the author' className='relative rounded-full mx-auto object-cover' />

			<div className='z-20'>
				<h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
					Software Engineer
				</h2>
				<h1 className='text-5xl lg:text-6xl font-semibold px-10'>
					<span className='mr-3'>{text}</span>
					<Cursor cursorColor='#F7AB0A' />
				</h1>
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
	)
}

export default Hero