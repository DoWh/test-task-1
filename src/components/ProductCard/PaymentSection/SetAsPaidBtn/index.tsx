import { FC } from 'react'
import { useActions } from '../../../../hooks/useActions'
import { IProductCard } from '../../../../models/IProductCard'
import styles from './SetAsPaidBtn.module.css'

interface Prop {
  data: IProductCard
}

const SetAsPaidBtn: FC<Prop> = ({ data }) => {
  const { SetAsPaid } = useActions()
  const statusBtn = data.payment ? styles.on : styles.off

  return (
    <button
      className={styles.btn + ' ' + statusBtn}
      onClick={() => SetAsPaid(data)}
      disabled={data.payment}
    >
      {data.payment ? 'Оплачено' : 'Оплатить'}
    </button>
  )
}

export default SetAsPaidBtn
