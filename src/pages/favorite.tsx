import { useSelector } from 'react-redux'
import { Card } from '../components'
import { selectFavorites } from '../favorites-slice/favorites-slice'
import { Product } from '../types'

const Favorite = () => {
	document.title = 'Избранное'

	const favorites = useSelector(selectFavorites)

	return (
		<section className='max-w-7xl mx-auto paddingX my-7'>
			<div className='container w-full min-h-[80vh]'>
				<h1 className='font-semibold text-xl leading-6'>Избранное</h1>

				{selectFavorites.length && (
					<div className='flex items-center flex-wrap gap-4 max-md:justify-center mt-8'>
						{favorites.map((product: Product) => (
							<Card key={product.id} product={product} />
						))}
					</div>
				)}

				{favorites.length === 0 && (
					<div className='flex-center flex-col gap-5 min-h-[80vh]'>
						<h1 className='font-semibold text-3xl text-black leading-8 max-md:font-medium max-md:text-xl max-md:leading-6'>
							Избранное пуста
						</h1>
						<p className='font-normal text-xl text-gray leading-7 max-md:text-[15px] max-md:font-semibold max-md:leading-5'>
							Но это никогда не поздно исправить :)
						</p>
					</div>
				)}
			</div>
		</section>
	)
}

export default Favorite
