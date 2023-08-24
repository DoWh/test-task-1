import { FC } from 'react'
import { IProductCard } from '../../../models/IProductCard'
import styles from './ProfileSection.module.css'

interface IProp {
  data: IProductCard
}

const ProfileSection: FC<IProp> = ({ data }) => {
  return (
    <section className={styles.profile}>
      <div className={styles.profile__item}>
        <label>Название:</label>
        <div className={styles.profile__name}>{data.name}</div>
      </div>
      <div className={styles.profile__item}>
        <label>Тип продажи:</label>
        <div>{data.sell_type}</div>
      </div>
      <div className={styles.profile__item}>
        <label>Место продажи:</label>
        <div>{data.location}</div>
      </div>
      <div className={styles.profile__item}>
        <label>Вид товара:</label>
        <div>{data.type}</div>
      </div>
      <div className={styles.profile__item}>
        <label>Описание:</label>
        <div>{data.description}</div>
      </div>
    </section>
  )
}

export default ProfileSection
