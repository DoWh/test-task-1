import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initProductCards from '../../data/ProductList.json'
import { IProductCard } from '../../models/IProductCard'

const initialState: IProductCard[] = initProductCards

export const cardsSlice = createSlice({
	name: 'product_cards',
	initialState,
	reducers: {
		toggleFavoriteStatus: (state, action: PayloadAction<IProductCard>) => {
			const index = state.findIndex(item => action.payload.id === item.id)
			if (index !== -1) state[index].favorite = !state[index].favorite
		},
		SetAsPaid: (state, action: PayloadAction<IProductCard>) => {
			const index = state.findIndex(item => action.payload.id === item.id)
			if (index !== -1) state[index].payment = true
		},
		toggleDealStatus: (state, action: PayloadAction<IProductCard>) => {
			const index = state.findIndex(item => action.payload.id === item.id)
			if (index !== -1) state[index].deal = !state[index].deal
		},
	},
})

export const { reducer, actions } = cardsSlice
