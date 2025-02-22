import { Link } from 'react-router-dom'
import { Button } from '../components'
import Map from '../components/map'
import { ContactSocialMedias } from '../constants'

const Contact = () => {
	document.title = 'Контакты'

	return (
		<section className='max-w-7xl mx-auto paddingX'>
			<div className='container w-full py-10'>
				<div className='flex-start max-md:flex-col max-md:gap-5 mb-12'>
					<div className='w-9/12 py-7 px-7 bg-white rounded-[30px] drop-shadow-lg shadow-black max-md:w-full'>
						<p className='font-semibold text-[17px] leading-5 mb-5'>Наш офис</p>
						<div className='rounded-[30px] mb-5'>
							<Map />
						</div>

						<div className='flex items-center gap-3'>
							<div className='w-6 h-6'>
								<img
									src='/icons/location.svg'
									alt='location'
									className='size-full object-contain'
									loading='lazy'
								/>
							</div>

							<div className=''>
								<h1 className='font-medium text-[15px] leading-5'>
									Uzbekistan, Tashkent
								</h1>
								<p className='font-medium text-[13px] leading-4 text-gray'>
									3 этаж 35 кабинет
								</p>
							</div>
						</div>
					</div>

					<div className='w-1/4 max-md:w-full flex-center md:flex-col flex-wrap gap-4'>
						{ContactSocialMedias.map(({ id, src, alt, href }) => (
							<Link
								to={href}
								key={id}
								className='w-24 h-24 rounded-[30px] bg-white flex-center drop-shadow-lg shadow-black'
							>
								<img src={src} alt={alt} className='w-12 object-contain' />
							</Link>
						))}
					</div>
				</div>

				<div className='flex items-center gap-7 max-md:justify-center mb-8'>
					<img
						src='/icons/contact.svg'
						alt='phone'
						className='w-7 max-md:w-6'
					/>
					<p className='font-semibold text-2xl leading-7'>+7 777 777 77 77</p>
				</div>

				<Link to='/' className='md:hidden'>
					<Button>На главную</Button>
				</Link>
			</div>
		</section>
	)
}

export default Contact
