import { combineReducers } from '@reduxjs/toolkit'
import { reducer as ProductCardsReducer } from './ProductCardsSlice'

const rootReducer = combineReducers({
	ProductCardsReducer,
})

export default rootReducer
