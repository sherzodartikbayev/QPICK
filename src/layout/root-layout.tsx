import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'

const RootLayout = () => {
	return (
		<>
			<Navbar />
			<main className=''>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default RootLayout
