import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import dealSVG from '../../../assets/deal.svg'
import favoriteSVG from '../../../assets/favorite.svg'
import warehouseSVG from '../../../assets/warehouse.svg'
import styles from './NavigationNav.module.css'

const NavigationNav: FC = () => {
	return (
		<nav>
			<ul className={styles.nav}>
				<li className={styles.nav__item}>
					<Link to={'/favorites'}>
						<ReactSVG src={favoriteSVG} />
						<div>Избранное</div>
					</Link>
				</li>
				<li className={styles.nav__item}>
					<Link to={'/'}>
						<ReactSVG src={warehouseSVG} />
						<div>Склад</div>
					</Link>
				</li>
				<li className={styles.nav__item}>
					<Link to={'/deals'}>
						<ReactSVG src={dealSVG} />
						<div>Сделки</div>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavigationNav
