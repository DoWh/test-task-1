import { FC } from 'react'
import styles from './ProductFilter.module.css'

const ProductFilter: FC = () => {
	return (
		<ul className={styles.filter}>
			<li>
				<input
					type='radio'
					value='all'
					name='sell_type'
					id='sell_type1'
					defaultChecked
				/>
				<label htmlFor='sell_type1'>Все типы</label>
			</li>
			<li>
				<input
					type='radio'
					value='directSales'
					name='sell_type'
					id='sell_type2'
				/>
				<label htmlFor='sell_type2'>Прямые продажи</label>
			</li>
			<li>
				<input
					type='radio'
					value='auction'
					name='sell_type'
					id='sell_type3'
				/>
				<label htmlFor='sell_type3'>Аукцион</label>
			</li>
		</ul>
	)
}

export default ProductFilter
