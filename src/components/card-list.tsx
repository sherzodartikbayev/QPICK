import useFetch from '../hooks/use-fetch'
import { ErrorPage } from '../pages'
import { CategoryListProps, Product } from '../types'
import Card from './card'
import Loader from './loader'

const CategoryList = ({ title }: CategoryListProps) => {
	const { data, isLoading, error } = useFetch('http://localhost:3000/products')

	if (isLoading) return <Loader />
	if (error) return <ErrorPage />

	if (data)
		return (
			<div className='py-5'>
				<h2 className='font-semibold text-xl leading-6 text-gray mb-6'>
					{title}
				</h2>
				<div className='flex-center flex-wrap gap-7 max-md:justify-center'>
					{data.map((product: Product) => (
						<Card key={product.id} product={product} />
					))}
				</div>
			</div>
		)
}

export default CategoryList
