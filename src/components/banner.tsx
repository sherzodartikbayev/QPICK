const Banner = () => {
	return (
		<div className='max-w-[1110px] h-48 bg-black rounded-[30px] mt-6 px-14 flex-between overflow-hidden max-md:px-6'>
			<div>
				<p className='font-semibold text-3xl text-white leading-9 max-md:text-xl max-md:leading-6'>
					Аксессуары для <br /> Iphone 13 Pro Max
				</p>
			</div>

			<div className=''>
				<img src='/icons/iphone-13.png' alt='' className='w-80 pt-24 size-full object-cover' />
			</div>
		</div>
	)
}

export default Banner
