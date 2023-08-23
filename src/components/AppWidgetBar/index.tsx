import { FC } from 'react'
import ProductFilter from '../widget/ProductFilter'
import styles from './AppWidgetBar.module.css'

const AppWidgetBar: FC = () => {
	return (
		<div className={styles.app_widget_bar}>
			<ProductFilter />
			<div>Widget</div>
		</div>
	)
}

export default AppWidgetBar
