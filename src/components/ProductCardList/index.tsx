import { FC } from 'react'
import useFilteredProductBySearch from '../../hooks/useFilteredProductBySearch'
import useFilteredProductByType from '../../hooks/useFilteredProductByType'
import { IProductCard } from '../../models/IProductCard'
import AppWidgetBar from '../AppWidgetBar'
import ProductCard from '../ProductCard'

interface IProp {
  ProductList: IProductCard[]
}

const ProductCardList: FC<IProp> = ({ ProductList }) => {
  ProductList = useFilteredProductBySearch(ProductList)
  ProductList = useFilteredProductByType(ProductList)

  return (
    <>
      <AppWidgetBar />
      {ProductList.map(ProductData => (
        <ProductCard
          data={ProductData}
          key={ProductData.id}
        />
      ))}
    </>
  )
}

export default ProductCardList
