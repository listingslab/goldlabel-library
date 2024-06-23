import pJSON from '../../package.json';
import { KeyValueShape } from '../types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../AppState/store';
import { GoldlabelState } from '../types';

const initialState: GoldlabelState = {
  vs: pJSON.version,
  content: null,
  user: null,
  authorising: true,
  notification: null,
  navDialogOpen: false,
  signinForm: {
    email: {
      value: '',
      valid: false,
    },
    password: {
      value: '',
      valid: false,
    },
  },
};

export const goldlabelSlice = createSlice({
  name: 'goldlabel',
  initialState,
  reducers: {
    setGoldlabelKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload;
      // @ts-ignore
      state[key] = value;
    },
  },
});

export const selectNavDialogOpen = (state: RootState) =>
  state.goldlabel.navDialogOpen;
export const selectNotification = (state: RootState) =>
  state.goldlabel.notification;
export const selectUser = (state: RootState) => state.goldlabel.user;
export const selectSigninForm = (state: RootState) =>
  state.goldlabel.signinForm;
export const selectContent = (state: RootState) => state.goldlabel.content;

export const selectAuthorising = (state: RootState) =>
  state.goldlabel.authorising;

export const { setGoldlabelKey } = goldlabelSlice.actions;

export default goldlabelSlice.reducer;
