import { Link } from 'react-router-dom'
import { Button } from '../components'
import { ServiceTermsData } from '../constants'

const ServiceTerms = () => {
	document.title = 'Условия сервиса'

	return (
		<section className='max-w-7xl mx-auto paddingX max-md:pb-8'>
			<div className='container w-full h-screen max-md:h-auto mt-10'>
				{ServiceTermsData.map(({ id, title, descr }) => (
					<div
						key={id}
						className='w-full rounded-[20px] bg-white py-4 px-7 shadow-md shadow-gray mb-9'
					>
						<h1 className='font-semibold text-[17px] leading-5 mb-3'>
							{title}
						</h1>
						<p className='font-normal text-[17px] leading-5 px-3'>{descr}</p>
					</div>
				))}

				<Link to='/' className='md:hidden'>
					<Button>На главную</Button>
				</Link>
			</div>
		</section>
	)
}

export default ServiceTerms
