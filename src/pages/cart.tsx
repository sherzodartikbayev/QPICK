import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCart } from '../cart-slice/cart-slice'
import { Button, CartCard } from '../components'
import Map from '../components/map'
import { Product } from '../types'

const Cart = () => {
	document.title = 'Корзина'

	const cart = useSelector(selectCart)

	const navigate = useNavigate()

	console.log(logger)

	return (
		<section className='max-w-7xl mx-auto paddingX my-7'>
			<div className='container w-full min-h-[100vh]'>
				<h1 className='font-semibold text-xl leading-6'>Корзина</h1>

				{cart.length !== 0 ? (
					<div className='flex justify-between items-start w-full max-md:flex-col'>
						<div className='w-4/5	max-md:w-full'>
							<div className='mb-3'>
								{cart.map((product: Product) => (
									<CartCard key={product.id} product={product} />
								))}
							</div>

							<div className='max-w-[633px] rounded-xl bg-white py-5 px-5'>
								<h1 className='font-semibold text-xl leading-6 mb-4'>
									Доставка
								</h1>
								<div className='rounded-xl mb-5'>
									<Map height={'173px'} />
								</div>
								<div className='flex-between'>
									<div className='flex-center gap-3'>
										<img
											src='/icons/delivery.svg'
											alt='delivery'
											className='w-5 h-5'
										/>
										<p className='font-medium text-[15px] leading-4'>
											Доставка курьером
										</p>
									</div>
									<div>
										<p className='font-semibold text-[15px] leading-4'>499 ₸</p>
									</div>
								</div>
							</div>
						</div>

						<div className='md:mt-5 max-md:hidden bg-white rounded-[30px]'>
							<div className='w-96 px-5 py-5'>
								<div className='flex-between'>
									<p className='font-semibold text-[15px] leading-5'>ИТОГО</p>

									<div>
										<p className='font-bold text-[16px] mt-4'>
											{cart
												.map(
													product =>
														+product.price
															.replace(/ /g, '')
															.replace('₸', '')
															.trim()
												)
												.reduce((sum, price) => sum + price, 0)
												.toLocaleString()}
											₸
										</p>
									</div>
								</div>
							</div>

							<div onClick={() => navigate('/check-out')}>
								<Button>Перейти к оформлению</Button>
							</div>
						</div>

						<div className='relative w-full mt-10 md:hidden'>
							<div className='w-full bg-white rounded-[30px]'>
								<div className='px-5 py-5'>
									<div className='flex-between'>
										<p className='font-semibold text-[15px] leading-5'>ИТОГО</p>

										<div>
											<p className='font-bold text-[16px] mt-4'>
												{cart
													.map(
														product =>
															+product.price
																.replace(/ /g, '')
																.replace('₸', '')
																.trim()
													)
													.reduce((sum, price) => sum + price, 0)
													.toLocaleString()}
												₸
											</p>
										</div>
									</div>
								</div>

								<div onClick={() => navigate('/check-out')}>
									<Button>Перейти к оформлению</Button>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className='flex-center flex-col min-h-[80vh]'>
						<div className='flex-center flex-col max-md:h-full'>
							<div className='max-w-[400px] mb-7 max-md:w-64 max-md:mb-5'>
								<img
									src='/images/favorites/favorites-cart.svg'
									alt='favorites cart'
									className='size-full object-contain'
									loading='lazy'
								/>
							</div>
							<h1 className='font-medium text-3xl leading-9 max-md:text-xl max-md:font-medium max-md:leading-6 max-md:mb-2'>
								Корзина пуста
							</h1>
							<p className='font-normal text-xl text-gray leading-7 mb-7 max-md:text-[15px] max-md:font-semibold max-md:leading-5'>
								Но это никогда не поздно исправить :)
							</p>
						</div>
						<Button link='/' className='max-w-[540px]'>
							В каталог товаров
						</Button>
					</div>
				)}
			</div>
		</section>
	)
}

export default Cart
