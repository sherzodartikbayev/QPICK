import { useEffect, useState } from 'react'
import { CarouselProps } from '../types'

const Carousel = ({ slides, interval = 3000 }: CarouselProps) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prev) =>
				prev === slides.length - 1 ? 0 : prev + 1
			)
		}, interval)

		return () => clearInterval(timer)
	}, [slides, interval])

	return (
		<div className='max-w-[1110px] h-48 bg-black rounded-[30px] mt-6 px-14 flex-between overflow-hidden max-md:px-6'>
			<div className='max-w-72 max-md:w-60'>
				<p className='font-semibold text-3xl text-white leading-9 max-md:text-xl max-md:leading-6'>
					{slides[currentIndex].text}
				</p>
			</div>

			<div className='w-80 flex-center'>
				<img
					src={slides[currentIndex].image}
					alt='banner'
					className='pt-24 max-md:pt-0 size-full object-cover'
				/>
			</div>
		</div>
	)
}

export default Carousel
