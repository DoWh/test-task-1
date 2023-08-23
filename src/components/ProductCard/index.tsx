import { FC } from 'react'
import cardPNG from '../../assets/CardImg.png'
import { IProductCard } from '../../models/IProductCard'
import ImageSection from './ImageSection'
import PaymentSection from './PaymentSection'
import styles from './ProductCard.module.css'
import ProfileSection from './ProfileSection'

interface IProp {
	data: IProductCard
}

const ProductCard: FC<IProp> = ({ data }) => {
	console.log(data)
	return (
		<div className={styles.product_card}>
			<ImageSection img={cardPNG} />
			<ProfileSection data={data} />
			<PaymentSection data={data} />
		</div>
	)
}

export default ProductCard
