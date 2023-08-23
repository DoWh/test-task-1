import { IProductCard } from '../models/IProductCard'
import { useAppSelector } from './useAppSelector'

const useFilteredProductByType = (ProductList: IProductCard[]) => {
	const filterValue = useAppSelector(
		state => state.ProductCardsReducer.type_filter
	)
	return filterValue === 'Все типы'
		? ProductList
		: ProductList.filter(item => item.sell_type === filterValue)
}

export default useFilteredProductByType
