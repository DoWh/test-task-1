import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/rootLayout'
import ProductsInDealPage from './pages/ProductsInDealPage'
import ProductsInFavoritePage from './pages/ProductsInFavoritePage'
import ProductsInWarehousePage from './pages/ProductsInWarehousePage'

const rootRouter = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '',
				element: <ProductsInWarehousePage />,
			},
			{
				path: 'deals',
				element: <ProductsInDealPage />,
			},
			{
				path: 'favorites',
				element: <ProductsInFavoritePage />,
			},
		],
	},
])

export default rootRouter
