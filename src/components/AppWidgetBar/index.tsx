import { FC } from 'react'
import ProductFilter from '../widget/ProductFilter'
import ProductSearch from '../widget/ProductSearch'
import styles from './AppWidgetBar.module.css'

const AppWidgetBar: FC = () => {
  return (
    <div className={styles.app_widget_bar}>
      <ProductFilter />
      <ProductSearch />
    </div>
  )
}

export default AppWidgetBar
