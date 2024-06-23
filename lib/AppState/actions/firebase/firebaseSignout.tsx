import { getAuth, signOut } from 'firebase/auth';
import { setLibraryKey } from '../../';

export const firebaseSignout = (): any => async (dispatch: any) => {
  try {
    dispatch(setLibraryKey({ key: 'authorising', value: true }));
    const fBauth = getAuth();
    signOut(fBauth)
      .then(() => {
        dispatch(setLibraryKey({ key: 'user', value: null }));
        dispatch(setLibraryKey({ key: 'authorising', value: false }));
      })
      .catch((e) => {
        console.log('firebaseSignout 500', e);
      });
  } catch (e: any) {
    console.log('firebaseSignout 500', e.toString());
  }
};
