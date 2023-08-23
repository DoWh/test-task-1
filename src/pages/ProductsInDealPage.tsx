import { FC } from 'react'
import ProductCard from '../components/ProductCard'
import { useAppSelector } from '../hooks/useAppSelector'

const ProductsInDealPage: FC = () => {
	const ProductCards = useAppSelector(state => state.ProductCardsReducer)

	return (
		<main>
			{ProductCards.map(item => (
				<ProductCard
					data={item}
					key={item.id}
				/>
			))}
		</main>
	)
}

export default ProductsInDealPage
