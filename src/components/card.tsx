import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toggleFavorite } from '../favorites-slice/favorites-slice'
import { RootState } from '../store/store'
import { Product } from '../types'

const Card = ({ product }: { product: Product }) => {
	const dispatch = useDispatch()
	const favorites = useSelector((state: RootState) => state.favorites)
	const isFavorite = favorites.some(item => item.id === product.id)

	const navigate = useNavigate()

	return (
		<div className='relative w-[340px] h-[400px] max-ss:w-full bg-white rounded-[20px] drop-shadow-lg shadow-black'>
			<div
				className='absolute top-4 right-6 w-5 h-5 cursor-pointer'
				onClick={() => dispatch(toggleFavorite(product))}
			>
				<img
					src={
						isFavorite
							? '/icons/remove-favorite.svg'
							: '/icons/add-favorite.svg'
					}
					alt='add favorite'
					className='size-full object-contain select-none'
				/>
			</div>

			<div className='py-5 px-5 flex items-center justify-between flex-col gap-6 h-full' onClick={() => navigate(`/${product.id}`)}>
				<div className='max-w-[219px] h-full select-none cursor-pointer'>
					<img
						src={product.image}
						alt={product.title}
						className='size-full object-contain'
					/>
				</div>

				<div className='flex justify-between items-start flex-wrap w-full'>
					<div>
						<p className='font-semibold text-[17px] leading-5 mb-6'>
							{product.title}
						</p>

						{product.star && (
							<div className='flex items-center gap-2'>
								<img src='/icons/star.svg' alt='star' className='w-[22px]' />
								<p className='font-semibold text-[17px] leading-5'>
									{product.star}
								</p>
							</div>
						)}
					</div>

					<div>
						<p className='font-semibold text-[17px] leading-5 text-orange'>
							{product.price}
						</p>
						<p className='font-semibold text-sm text-red line-through'>
							{product.oldPrice}
						</p>
					</div>

					{product.discount && (
						<div>
							<p className='font-semibold text-base leading-5 text-red'>
								{product.discount}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Card
