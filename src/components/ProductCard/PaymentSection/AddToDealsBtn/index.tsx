import { FC } from 'react'
import { useActions } from '../../../../hooks/useActions'
import { IProductCard } from '../../../../models/IProductCard'
import styles from './AddToDealsBtn.module.css'

interface IProp {
  data: IProductCard
}

const AddToDealsBtn: FC<IProp> = ({ data }) => {
  const { toggleDealStatus } = useActions()

  return (
    <button
      className={styles.btn}
      onClick={() => toggleDealStatus(data)}
    >
      {data.deal ? 'Удалить из сделок' : 'Добавить в сделки'}
    </button>
  )
}

export default AddToDealsBtn
