import {TypedUseSelectorHook, useSelector} from 'react-redux'
import { RootState } from '../store/reducers/reducer'

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector