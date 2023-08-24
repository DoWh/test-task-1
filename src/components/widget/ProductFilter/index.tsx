import { FC, MouseEvent } from 'react'
import { useActions } from '../../../hooks/useActions'
import styles from './ProductFilter.module.css'

const ProductFilter: FC = () => {
  const { changeFilterValue } = useActions()

  function FilterChange(event: MouseEvent<HTMLElement>) {
    const target = event.target as HTMLElement
    if (target.tagName !== 'LABEL') return null
    changeFilterValue(target.innerHTML)
  }

  return (
    <ul
      className={styles.filter}
      onClick={FilterChange}
    >
      <li>
        <input
          type='radio'
          value='all'
          name='sell_type'
          id='sell_type1'
          defaultChecked
        />
        <label htmlFor='sell_type1'>Все типы</label>
      </li>
      <li>
        <input
          type='radio'
          value='directSales'
          name='sell_type'
          id='sell_type2'
        />
        <label htmlFor='sell_type2'>Прямые продажи</label>
      </li>
      <li>
        <input
          type='radio'
          value='auction'
          name='sell_type'
          id='sell_type3'
        />
        <label htmlFor='sell_type3'>Аукцион</label>
      </li>
    </ul>
  )
}

export default ProductFilter
