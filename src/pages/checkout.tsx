import { Link } from 'react-router-dom'
import { Button, Input } from '../components'
import Map from '../components/map'

const Checkout = () => {
	document.title = 'Оформление заказа'
		
	return (
		<section className='max-w-7xl mx-auto paddingX my-8'>
			<div className='container w-full min-h-screen'>
				<h1 className='font-semibold text-xl leading-6'>Оформление заказа</h1>

				<div className='flex-start md:gap-8 mt-3 max-md:flex-col max-md:gap-5 max-md:bg-white'>
					<div className='w-1/2 max-md:w-full rounded-[30px] py-6 px-9 bg-white'>
						<div className='flex-between'>
							<h1 className='font-semibold text-[17px] leading-5'>
								Доставка курьером
							</h1>

							<p className='font-medium text-base leading-5'>499 ₸</p>
						</div>

						<div className='my-5'>
							<Map height='146px' />
						</div>

						<div className='flex items-center gap-2'>
							<img
								src='/icons/location.svg'
								alt='location'
								loading='lazy'
								className='w-5 h-5'
							/>

							<p className='font-medium text-base leading-4'>Адрес доставки</p>
						</div>

						<div className='my-5 flex flex-wrap justify-between'>
							<select
								name=''
								id=''
								className='w-full bg-lightGray h-12 rounded-2xl px-4'
							>
								<option value=''>Шимкент</option>
								<option value=''>Нур-Султан</option>
								<option value=''>Алматы</option>
							</select>

							<div className='w-full mt-3'>
								<Input
									title='Улица / Район'
									width='max-w-full'
									icon='/icons/input-change.svg'
								/>
							</div>

							<div className='w-full flex-between gap-5'>
								<Input
									title='Дом'
									width='max-w-full'
									icon='/icons/input-change.svg'
								/>

								<Input
									title='Подъезд'
									width='max-w-full'
									icon='/icons/input-change.svg'
								/>
							</div>

							<div className='w-full'>
								<Input
									title='Квартира'
									width='max-w-full'
									icon='/icons/input-change.svg'
								/>
							</div>
						</div>
					</div>

					<div className='w-1/2 max-md:w-full'>
						<div className='w-full rounded-[30px] py-4 px-5 bg-white mb-3'>
							<h1 className='font-semibold text-xl leading-6 mb-6'>
								Ваш заказ
							</h1>

							<div className='flex-between'>
								<h1 className='font-medium text-base'>Доставка</h1>

								<p className='font-medium text-base'>₸ 2 927</p>
							</div>
						</div>

						<div className='w-full rounded-[30px] py-4 px-5 bg-white mb-3'>
							<h1 className='font-semibold text-xl leading-6 mb-6'>
								Способ оплаты
							</h1>

							<div className='flex-between'>
								<h1 className='font-medium text-base'>Счет на kaspi.kz</h1>

								<img
									src='/icons/down-back.svg'
									alt='down-back'
									loading='lazy'
									className='rotate-180'
								/>
							</div>
						</div>

						<div className='w-full rounded-[30px] py-4 px-5 bg-white mb-3'>
							<h1 className='font-semibold text-xl leading-6 mb-6'>
								Номер получателя
							</h1>

							<div>
								<Input
									width='max-w-full'
									title='+7 ___ ___ __ __'
									icon='/icons/input-change.svg'
								/>
							</div>
						</div>

						<Link to={'/order'} className='max-w-full mt-8'>
							<Button>Закончить оформление</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Checkout
