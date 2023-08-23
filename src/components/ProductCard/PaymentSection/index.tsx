import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { IProductCard } from '../../../models/IProductCard'
import AddToDealsBtn from './AddToDealsBtn'
import AddToFavoriteBtn from './AddToFavoriteBtn'
import styles from './PaymentSection.module.css'
import SetAsPaidBtn from './SetAsPaidBtn'

interface IProp {
	data: IProductCard
}

const PaymentSection: FC<IProp> = ({ data }) => {
	const { pathname } = useLocation()

	return (
		<section className={styles.payment}>
			<div className={styles.payment__item + ' ' + styles.payment__price}>
				<div>{(data.count * data.price).toLocaleString('ru-RU')} ₽</div>
			</div>
			<div className={styles.payment__item}>
				<div>Количество</div>
				<div>{data.count} шт.</div>
			</div>
			<div className={styles.payment__item}>
				<div>Стоимость за штуку</div>
				<div>{data.price.toLocaleString('ru-RU')} ₽</div>
			</div>
			<div className={styles.payment__btns}>
				{pathname === '/' ? (
					<AddToDealsBtn data={data} />
				) : (
					<SetAsPaidBtn data={data} />
				)}
				<AddToFavoriteBtn data={data} />
			</div>
		</section>
	)
}

export default PaymentSection
