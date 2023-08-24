import { FC } from 'react'
import searchSVG from '../../../assets/search.svg'
import { useActions } from '../../../hooks/useActions'
import { useAppSelector } from '../../../hooks/useAppSelector'
import styles from './ProductSearch.module.css'

const ProductSearch: FC = () => {
  const searchValue = useAppSelector(
    state => state.ProductCardsReducer.search_filter
  )
  const { changeSearchValue } = useActions()

  return (
    <div className={styles.search}>
      <input
        value={searchValue}
        onChange={e => changeSearchValue(e.target.value)}
      />
      <button>
        <img
          src={searchSVG}
          alt=''
        />
      </button>
    </div>
  )
}

export default ProductSearch
