import { IProductCard } from '../models/IProductCard'
import { useAppSelector } from './useAppSelector'

const useFilteredProductBySearch = (ProductList: IProductCard[]) => {
	const searchValue = useAppSelector(
		state => state.ProductCardsReducer.search_filter
	)
	return ProductList.filter(item =>
		item.name.toLowerCase().includes(searchValue.toLowerCase())
	)
}

export default useFilteredProductBySearch
