import { FC } from 'react'
import styles from './ImageSection.module.css'

interface IProp {
	img: string
}

const ImageSection: FC<IProp> = ({ img }) => {
	return (
		<img
			src={img}
			alt=''
			className={styles.img}
		/>
	)
}

export default ImageSection
