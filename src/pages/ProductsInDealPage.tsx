import { FC } from 'react'
import ProductCardList from '../components/ProductCardList'
import { useAppSelector } from '../hooks/useAppSelector'

const ProductsInDealPage: FC = () => {
	let ProductList = useAppSelector(state => state.ProductCardsReducer.items)
	ProductList = ProductList.filter(item => item.deal !== false)

	return (
		<main>
			<ProductCardList ProductList={ProductList} />
		</main>
	)
}

export default ProductsInDealPage
