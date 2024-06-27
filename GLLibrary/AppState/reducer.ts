import { AppStateProps, KeyValueProps } from '../types';
import pJSON from '../../package.json';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../AppState/store';

const initialState: AppStateProps = {
  vs: pJSON.version,
  user: null,
  authorising: true,
  notification: null,
};

export const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    setLibraryKey: (state, action: PayloadAction<KeyValueProps>) => {
      const { key, value } = action.payload;
      // @ts-ignore
      state[key] = value;
    },
  },
});

export const selectNotification = (state: RootState) => state.notification;
export const selectUser = (state: RootState) => state.user;
export const selectAuthorising = (state: RootState) => state.authorising;
export const { setLibraryKey } = librarySlice.actions;
export default librarySlice.reducer;
