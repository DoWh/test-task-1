import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { actions as ProductCardsActions } from '../store/reducers/ProductCardsSlice'
import { AppDispatchType } from '../types/index'

const rootActions = {
  ...ProductCardsActions,
}

export const useActions = () => {
  const dispatch: AppDispatchType = useDispatch<AppDispatchType>()
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
