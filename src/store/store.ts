import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		devTools: true,
	})
}

export default setupStore
