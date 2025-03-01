import { useEffect, useState } from 'react'

interface CarouselProps {
	items: { image: string; text: string }[]
}

const Carousel = ({ items }: CarouselProps) => {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % items.length)
		}, 3000)

		return () => clearInterval(interval)
	}, [items])

	return (
		<div className='max-w-[1110px] h-48 bg-black rounded-[30px] mt-6 px-14 flex-between overflow-hidden max-md:px-6'>
			<div className='w-72 max-md:w-60'>
				<p className='font-semibold text-3xl text-white leading-9 max-md:text-xl max-md:leading-6'>
					{items[index].text}
				</p>
			</div>

			<div className='w-80 max-md:flex-center'>
				<img
					src={items[index].image}
					alt={items[index].text}
					className='w-full pt-24 max-md:pt-5 object-cover'
				/>
			</div>
		</div>
	)
}

export default Carousel
