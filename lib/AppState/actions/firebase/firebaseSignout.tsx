import { getAuth, signOut } from 'firebase/auth';
import { setGoldlabelKey } from '../../';

export const firebaseSignout = (): any => async (dispatch: any) => {
  try {
    dispatch(setGoldlabelKey({ key: 'authorising', value: true }));
    const fBauth = getAuth();
    signOut(fBauth)
      .then(() => {
        dispatch(setGoldlabelKey({ key: 'user', value: null }));
        dispatch(setGoldlabelKey({ key: 'authorising', value: false }));
      })
      .catch((e) => {
        console.log('firebaseSignout 500', e);
      });
  } catch (e: any) {
    console.log('firebaseSignout 500', e.toString());
  }
};
