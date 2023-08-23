import { FC } from 'react'
import NavigationNav from '../widget/NavigationNav'
import styles from './AppHeader.module.css'

const AppHeader: FC = () => {
	return (
		<div className={styles.app_header}>
			<div className={styles.primary_menu}>
				<div className='primary_menu__item'></div>
			</div>
			<div className={styles.sub_menu}>
				<div className='sub_menu__item'></div>
				<NavigationNav />
			</div>
		</div>
	)
}

export default AppHeader
