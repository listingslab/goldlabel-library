import { store } from './store';
import { useGoldlabelDispatch, useGoldlabelSelect } from './hooks';
import {
  selectUser,
  selectSigninForm,
  selectNavDialogOpen,
  setGoldlabelKey,
  selectNotification,
  selectAuthorising,
  selectContent,
} from './reducer';
import { toggleNavDialogOpen } from './actions/toggleNavDialogOpen';
import { navigateTo } from './actions/navigateTo';
import { firebaseSignin } from './actions/firebase/firebaseSignin';
import { firebaseSignout } from './actions/firebase/firebaseSignout';
import { updateSignin } from './actions/updateSignin';
import { updateUser } from './actions/updateUser';

export {
  store,
  setGoldlabelKey,
  useGoldlabelSelect,
  useGoldlabelDispatch,
  navigateTo,
  toggleNavDialogOpen,
  firebaseSignin,
  firebaseSignout,
  updateUser,
  updateSignin,
  selectNotification,
  selectAuthorising,
  selectNavDialogOpen,
  selectUser,
  selectSigninForm,
  selectContent,
};
