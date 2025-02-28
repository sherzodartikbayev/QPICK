import { Banner } from '../components'
import CategoryList from '../components/card-list'

const Home = () => {
	document.title = 'Интернет магазин аксессуаров для мобильных телефонов'

	return (
		<section className='max-w-7xl paddingX mx-auto'>
			<div className='container w-full h-auto pb-10'>
				{/* Advert Banner */}
				<Banner>
					Аксессуары для <br /> Iphone 13 Pro Max
				</Banner>

				<div className='my-10'>	
					<CategoryList title='Все аксессуары' />
				</div>
			</div>
		</section>
	)
}

export default Home
