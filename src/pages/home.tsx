import { Banner } from '../components'

const Home = () => {
	document.title = 'Интернет магазин аксессуаров для мобильных телефонов'

	return (
		<section className='max-w-7xl paddingX mx-auto'>
			<div className='container w-full h-screen'>
				{/* Advert Banner */}
				<Banner>Аксессуары для <br /> Iphone 13 Pro Max</Banner>

				
			</div>
		</section>
	)
}

export default Home
 