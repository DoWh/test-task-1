import { FC } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import rootRouter from './rootRouter'
import setupStore from './store/store'

const store = setupStore()

const App: FC = () => {
	return (
		<Provider store={store}>
			<RouterProvider router={rootRouter} />
		</Provider>
	)
}

export default App
