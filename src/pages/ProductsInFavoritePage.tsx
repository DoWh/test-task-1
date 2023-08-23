import { FC } from 'react'
import ProductCardList from '../components/ProductCardList'
import { useAppSelector } from '../hooks/useAppSelector'

const ProductsInFavoritePage: FC = () => {
	let ProductList = useAppSelector(state => state.ProductCardsReducer.items)
	ProductList = ProductList.filter(item => item.favorite !== false)

	return (
		<main>
			<ProductCardList ProductList={ProductList} />
		</main>
	)
}

export default ProductsInFavoritePage
