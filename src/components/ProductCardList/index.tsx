import { FC } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import AppWidgetBar from '../AppWidgetBar'
import ProductCard from '../ProductCard'

const ProductCardList: FC = () => {
	const ProductCardList = useAppSelector(
		state => state.ProductCardsReducer.items
	)

	return (
		<>
			<AppWidgetBar />
			{ProductCardList.map(ProductData => (
				<ProductCard
					data={ProductData}
					key={ProductData.id}
				/>
			))}
		</>
	)
}

export default ProductCardList
