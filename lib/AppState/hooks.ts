import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useGoldlabelDispatch = () => useDispatch<AppDispatch>();
export const useGoldlabelSelect: TypedUseSelectorHook<RootState> = useSelector;
