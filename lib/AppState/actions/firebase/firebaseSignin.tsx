import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setGoldlabelKey, store, updateUser } from '../../';

export const firebaseSignin = (): any => async (dispatch: any) => {
  try {
    dispatch(setGoldlabelKey({ key: 'authorising', value: true }));
    const signinForm = store.getState().goldlabel.signinForm;
    const { email, password } = signinForm;
    const fBauth = getAuth();
    signInWithEmailAndPassword(fBauth, email.value, password.value)
      .then((user) => {
        dispatch(updateUser(user));
        dispatch(setGoldlabelKey({ key: 'authorising', value: false }));
      })
      .catch((e) => {
        let message = e.message;
        if (message.includes('auth/invalid-email')) message = `Invalid Email`;
        if (message.includes('auth/user-not-found'))
          message = `${email} not found`;
        if (message.includes('auth/wrong-password')) message = 'Wrong password';
        if (message.includes('auth/missing-password')) message = 'No password';
        if (message.includes('auth/invalid-credential'))
          message = 'Bad password';
        console.log('signInWithEmailAndPassword 500', message);
        dispatch(setGoldlabelKey({ key: 'authorising', value: false }));
      });
  } catch (e: any) {
    console.log('firebaseSignin 500', e.toString());
    dispatch(setGoldlabelKey({ key: 'authorising', value: false }));
  }
};
