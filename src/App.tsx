import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/root-layout'
import {
	Cart,
	Checkout,
	Contact,
	Favorite,
	Home,
	Order,
	ProductPage,
	ServiceTerms,
} from './pages'

const App = () => {
	const route = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{
					path: '/',
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
					path: '/:id',
					element: <ProductPage />,
				},
				{
					path: '/check-out',
					element: <Checkout />,
				},
				{
					path: '/order',
					element: <Order />
				}
			],
		},
	])

	return <RouterProvider router={route}></RouterProvider>
}

export default App
