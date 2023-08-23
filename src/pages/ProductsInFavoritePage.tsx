import { FC } from 'react'
import ProductCardList from '../components/ProductCardList'
import { useAppSelector } from '../hooks/useAppSelector'

const ProductsInFavoritePage: FC = () => {
	const ProductList = useAppSelector(state => state.ProductCardsReducer.items)

	return (
		<main>
			<ProductCardList ProductList={ProductList} />
		</main>
	)
}

export default ProductsInFavoritePage
