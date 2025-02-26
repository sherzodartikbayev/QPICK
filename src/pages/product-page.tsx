import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components'
import { toggleFavorite } from '../favorites-slice/favorites-slice'
import useFetch from '../hooks/use-fetch'
import { RootState } from '../store/store'

const ProductPage = () => {
	const [isOpenDetail, setIsOpenDetail] = useState(true)

	const { id } = useParams()
	const dispatch = useDispatch()
	const favorites = useSelector((state: RootState) => state.favorites)
	const { data, isLoading, error } = useFetch(
		`http://localhost:3000/products/${id}`
	)

	// Ensure hooks are always called before returning JSX
	if (!data) {
		return <h2>Mahsulot topilmadi</h2>
	}

	const isFavorite = favorites.some(item => item.id === data.id)

	return (
		<section className='max-w-7xl mx-auto paddingX my-7'>
			<div className='container w-full min-h-screen'>
				<h1 className='font-semibold text-xl leading-6 text-gray mb-5'>
					{data.type}
				</h1>

				<div className='w-full relative bg-white rounded-[30px] py-5 px-10 mb-6'>
					<div
						className='absolute top-4 right-6 w-5 h-5 cursor-pointer'
						onClick={() => dispatch(toggleFavorite(data))}
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

					<div className='flex-center max-md:mb-10 select-none'>
						<img src={data.image} alt={data.title} />
					</div>

					<div className='flex-between'>
						<p className='font-semibold text-2xl max-md:text-[17px]'>
							{data.title}
						</p>

						<div className='md:flex-center flex-start gap-5'>
							<div className='text-center'>
								<p className='font-semibold text-[28px] leading-5 text-orange md:mb-2 mb-1 max-md:text-[17px]'>
									{data.price}
								</p>
								<p className='font-semibold text-sm text-red line-through max-md:text-[13px]'>
									{data.oldPrice}
								</p>
							</div>

							{data.discount && (
								<div>
									<p className='font-semibold text-xl leading-5 text-red max-md:text-[13px]'>
										{data.discount}
									</p>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className='flex justify-between items-start gap-5 w-full max-md:mb-5'>
					<div className='w-3/4 rounded-[30px] bg-[#F9F9F9] max-md:w-full'>
						<div className='w-full flex-between rounded-xl px-6 py-5 bg-white drop-shadow-lg shadow-black'>
							<p className='font-semibold text-xl leading-6'>
								Описание и характеристики
							</p>

							<div>
								<img
									src='/icons/down-back.svg'
									alt='down-back'
									className={`w-4 h-4 ${
										isOpenDetail ? 'rotate-0' : 'rotate-180'
									}`}
									onClick={() => setIsOpenDetail(!isOpenDetail)}
								/>
							</div>
						</div>

						<div className={`px-6 py-5 ${isOpenDetail ? 'block' : 'hidden'}`}>
							<p>{data.descr}</p>

							{data.details && Array.isArray(data.details) ? (
								<ul>
									{data.details.map((item, index) => (
										<li
											className='font-medium text-[15px] leading-5 mb-2'
											key={index}
										>
											{item}
										</li>
									))}
								</ul>
							) : (
								<p></p>
							)}
						</div>
					</div>

					<div className='w-3/12 flex flex-col gap-5 max-md:hidden'>
						<Button>Купить!</Button>
						<Button>
							<span className='flex-center gap-3'>
								<img
									src='/icons/add-cart.svg'
									alt=''
									className='flex w-6 h-6'
								/>
								<p className='font-medium text-[15px]'>Добавить в корзину</p>
							</span>
						</Button>
					</div>
				</div>

				<div className='w-full flex-between md:hidden'>
					<button className='w-32 h-14 bg-black rounded-2xl flex-center mr-10'>
						<img
							src='/icons/add-cart.svg'
							alt='cart'
							className='w-6 h-6 object-contain'
						/>
					</button>

					<Button className='max-w-16 h-16'>Купить сейчас!</Button>

					<Link to='https://www.whatsapp.com/' className='w-32 h-14 bg-black rounded-2xl flex-center ml-10'>
						<img
							src='/icons/whatsapp-mobile.gif'
							alt='cart'
							className='w-8 h-8 object-contain'
						/>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default ProductPage
