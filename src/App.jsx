import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import MainLayout from './layout/MainLayout'
import Pages from './pages/Pages'
import AboutDetelis from './pages/about/aboutDetelis/AboutDetelis'
import Products from './pages/catigories/products/Products'

function App() {
	const routes = createBrowserRouter([
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{
					index: true,
					element: <Pages />,
				},
				{
					path: '/products',
					element: <Products />,
				},
				{
					path: '/about/details',
					element: <AboutDetelis />,
				},
			],
		},
	])
	return <RouterProvider router={routes} />
}

export default App
