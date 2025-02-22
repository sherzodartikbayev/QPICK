import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/root-layout'
import { Cart, Checkout, Contact, Favorite, Home, ServiceTerms } from './pages'

const App = () => {
	const route = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: '/favorites',
					element: <Favorite />,
				},
				{
					path: '/cart',
					element: <Cart />,
				},
				{
					path: '/service-terms',
					element: <ServiceTerms />,
				},
				{
					path: '/contact',
					element: <Contact />,
				},
				{
					path: '/check-out',
					element: <Checkout />
				}
			],
		},
	])

	return <RouterProvider router={route}></RouterProvider>
}

export default App
