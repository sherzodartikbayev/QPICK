import { Link } from 'react-router-dom'
import { Button } from '../components'

const Order = () => {
	document.title = 'Заказ оформлен'

	const num = Math.floor(Math.random() * 999999)

	return (
		<section className='max-w-7xl mx-auto paddingX py-10'>
			<div className='container w-full h-[80vh] flex justify-center max-md:flex-col max-md:justify-between'>
				<div className='max-w-[730px] h-24 rounded-[30px] bg-white flex-center w-full px-10'>
					<p className='font-semibold text-[17px] leading-5 text-center'>
						Заказ размещен. Номер вашего заказа №{num}, с Вами свяжется наш
						менеджер.
					</p>
				</div>

				<Link to='/' className='md:hidden '>
					<Button>На главную</Button>
				</Link>
			</div>
		</section>
	)
}

export default Order