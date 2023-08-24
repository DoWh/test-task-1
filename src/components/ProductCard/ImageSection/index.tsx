import { FC } from 'react'
import styles from './ImageSection.module.css'

interface IProp {
  img: string
}

const ImageSection: FC<IProp> = ({ img }) => {
  return (
    <section>
      <img
        src={img}
        alt=''
        className={styles.img}
      />
    </section>
  )
}

export default ImageSection
