import { FC } from 'react'
import cardPNG from '../../assets/CardImg.png'
import { IProductCard } from '../../models/IProductCard'
import ImageSection from './ImageSection'
import styles from './ProductCard.module.css'

interface IProp {
	data: IProductCard
}

const ProductCard: FC<IProp> = ({ data }) => {
	console.log(data)
	return (
		<div className={styles.product_card}>
			<ImageSection img={cardPNG} />
		</div>
	)
}

export default ProductCard
