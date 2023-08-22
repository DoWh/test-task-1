import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initProductCards from '../../data/ProductList.json'
import { IProductCard } from '../../models/IProductCard'

const initialState: IProductCard[] = initProductCards

export const cardsSlice = createSlice({
	name: 'product_cards',
	initialState,
	reducers: {
		toggleFavoriteStatus: (state, action: PayloadAction<IProductCard>) => {},
		togglePaymentStatus: (state, action: PayloadAction<IProductCard>) => {},
		toggleOfferStatus: (state, action: PayloadAction<IProductCard>) => {},
	},
})

export const { reducer, actions } = cardsSlice
