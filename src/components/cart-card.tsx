import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../cart-slice/cart-slice'
import { decrement, increment } from '../counter-slice/counter-slice'
import { RootState } from '../store/store'
import { Product } from '../types'

const CartCard = ({ product }: { product: Product }) => {
	const dispatch = useDispatch()
	const count = useSelector((state: RootState) => state.counter.count)

	// Price tozalanadi va numberga o'tkaziladi
	const productPrice = +product.price.replace(/ /g, '').replace('₸', '').trim()
	const total = productPrice * count

	return (
		<div className='max-w-[633px] py-5 px-5 bg-white rounded-xl drop-shadow-lg shadow-black mt-5 relative'>
			<div
				className='absolute top-5 right-7 cursor-pointer'
				onClick={() => dispatch(removeFromCart(product.id))}
			>
				<img src='/icons/remove-cart.svg' alt='remove cart' />
			</div>

			<div className='flex gap-6 mb-4'>
				<div className='w-40 h-40 cursor-pointer'>
					<img
						src={product.image}
						alt={product.title}
						className='size-full object-contain'
					/>
				</div>

				<div className='flex-start flex-col gap-3'>
					<h1 className='font-medium text-[17px] leading-5'>{product.title}</h1>
					<p className='font-medium text-[15px] leading-4 text-gray'>
						{product.price}
					</p>
				</div>
			</div>

			<div className='flex-between'>
				<div className='flex-center gap-6'>
					<button
						className='w-8 h-8 bg-orange text-white rounded-full select-none'
						onClick={() => dispatch(increment())}
					>
						+
					</button>
					<p className='font-semibold text-[17px] text-black'>{count}</p>
					<button
						className={`w-8 h-8 bg-orange text-white rounded-full select-none ${count === 0 && 'hidden'}`}
						onClick={() => dispatch(decrement())}
					>
						-
					</button>
				</div>

				<p className='font-semibold text-[15px] leading-4'>
					{total.toLocaleString()} ₸
				</p>
			</div>
		</div>
	)
}

export default CartCard
