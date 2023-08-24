import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initProductCards from '../../data/ProductList.json'
import { IProductCard } from '../../models/IProductCard'

type initialStateType = {
  items: IProductCard[]
  type_filter: string
  search_filter: string
}

const initialState: initialStateType = {
  items: initProductCards,
  type_filter: 'Все типы',
  search_filter: '',
}

export const cardsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleFavoriteStatus: (state, action: PayloadAction<IProductCard>) => {
      const index = state.items.findIndex(item => action.payload.id === item.id)
      if (index !== -1)
        state.items[index].favorite = !state.items[index].favorite
    },
    SetAsPaid: (state, action: PayloadAction<IProductCard>) => {
      const index = state.items.findIndex(item => action.payload.id === item.id)
      if (index !== -1) state.items[index].payment = true
    },
    toggleDealStatus: (state, action: PayloadAction<IProductCard>) => {
      const index = state.items.findIndex(item => action.payload.id === item.id)
      if (index !== -1) state.items[index].deal = !state.items[index].deal
    },
    changeSearchValue: (state, action: PayloadAction<string>) => {
      if (state.search_filter === action.payload) {
        return state
      } else state.search_filter = action.payload
    },
    changeFilterValue: (state, action: PayloadAction<string>) => {
      if (state.type_filter === action.payload) {
        return state
      } else state.type_filter = action.payload
    },
  },
})

export const { reducer, actions } = cardsSlice
