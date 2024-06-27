import { AppStateProps, KeyValueProps } from '../types';
import pJSON from '../../package.json';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../AppState/store';

const initialState: AppStateProps = {
  vs: pJSON.version,
  user: null,
  authorising: true,
  notification: null,
  newsfeed: [
    {
      id: 'asda-12324-dajsgd-1244',
      title: 'News Item 1',
      subheader: 'news subheader 1',
      action: 'internal-nav',
      route: '/news/news-item-1',
      image: '/svg/characters/dapper.svg',
    },
  ],
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
export const selectNewsfeed = (state: RootState) => state.newsfeed;

export const { setLibraryKey } = librarySlice.actions;
export default librarySlice.reducer;
