import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootStateType } from '../types/index'

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
