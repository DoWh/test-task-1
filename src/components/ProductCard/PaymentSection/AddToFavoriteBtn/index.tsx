import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import favorite from '../../../../assets/favorite.svg'
import { useActions } from '../../../../hooks/useActions'
import { IProductCard } from '../../../../models/IProductCard'
import styles from './AddToFavoriteBtn.module.css'

interface Props {
	data: IProductCard
}

const AddToFavoriteBtn: FC<Props> = ({ data }) => {
	const { toggleFavoriteStatus } = useActions()

	const statusOnOff = data.favorite ? styles.off : styles.on

	return (
		<button
			className={styles.btn + ' ' + statusOnOff}
			onClick={() => {
				toggleFavoriteStatus(data)
			}}
		>
			<ReactSVG src={favorite} />
		</button>
	)
}

export default AddToFavoriteBtn
