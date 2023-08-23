import { FC } from 'react'
import { IProductCard } from '../../../models/IProductCard'
import AddToDealsBtn from './AddToDealsBtn'
import styles from './PaymentSection.module.css'

interface IProp {
	data: IProductCard
}

const PaymentSection: FC<IProp> = ({ data }) => {
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
				<AddToDealsBtn data={data} />
				<button>test2</button>
			</div>
		</section>
	)
}

export default PaymentSection
