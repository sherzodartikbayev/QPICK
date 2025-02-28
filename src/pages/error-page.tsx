import { Link, useRouteError } from 'react-router-dom'
import { Button } from '../components'

const ErrorPage = () => {
	document.title = 'Ошибка | Страница временно недоступна'

	const error = useRouteError()

	if (error instanceof Response && error.status === 404) {
		return (
			<section className='max-w-7xl mx-auto paddingX'>
				<div className='container w-full min-h-[80vh] flex-center flex-col'>
					<img src='/icons/404.gif' alt='404' className='mb-5' />

					<h1 className='font-semibold text-xl leading-6 mb-2'>
						404 - Страница не найдена
					</h1>

					<p className='font-medium text-lg text-gray text-center mb-4'>
						Возможно, она переехала или никогда не существовала
					</p>

					<Link to='/' className='w-full'>
						<Button>Go to Home</Button>
					</Link>
				</div>
			</section>
		)
	}

	return (
		<div className='max-w-7xl mx-auto paddingX'>
			<div className='container w-full min-h-screen flex-center flex-col'>
				<img src='/icons/error.gif' alt='error' className='w-[300px] mb-5' />

				<h1 className='font-semibold text-xl leading-6 text-center mb-2'>
					Упс! Мы искали эту страницу, но не нашли... 😢
				</h1>

				<p className='font-medium text-lg text-gray text-center mb-10'>
					Возможно, вы искали что-то особенное. Попробуйте снова!
				</p>

				<Link to='/' className='w-full'>
					<Button>Go to Home</Button>
				</Link>
			</div>
		</div>
	)
}

export default ErrorPage
