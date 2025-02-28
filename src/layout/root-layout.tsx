import { useEffect, useState } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Footer, Loader, Navbar } from '../components'

const RootLayout = () => {
	const navigation = useNavigation()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false) 
		}, 1000)
	}, [])

	useEffect(() => {
		if (navigation.state === 'loading') {
			setIsLoading(true) 
		} else {
			setTimeout(() => {
				setIsLoading(false)
			}, 500)
		}
	}, [navigation.state])

	return (
		<>
			{isLoading && (
				<div className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-md z-50'>
					<Loader />
				</div>
			)}
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default RootLayout
