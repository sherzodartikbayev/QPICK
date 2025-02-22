import { Button } from '../components'

const Cart = () => {
	document.title = 'Корзина'

	return (
		<section className='max-w-7xl mx-auto paddingX py-10'>
			<div className='container w-full h-[80vh] flex-center flex-col'>
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
				<Button link='/'>В каталог товаров</Button>
			</div>
		</section>
	)
}

export default Cart
