import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useLibraryDispatch = () => useDispatch<AppDispatch>();
export const useLibrarySelect: TypedUseSelectorHook<RootState> = useSelector;
