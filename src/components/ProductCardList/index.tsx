import { FC } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import ProductCard from '../ProductCard'

const ProductCardList: FC = () => {
	const ProductCardList = useAppSelector(state => state.ProductCardsReducer)

	return (
		<>
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
