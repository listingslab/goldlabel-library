import { store } from '../';
import { setGoldlabelKey } from '../';
import { validateEmail } from '../../../lib/validateEmail';

export const updateSignin =
  (key: string, value: any): any =>
  async (dispatch: any) => {
    try {
      const signinForm = store.getState().goldlabel.signinForm;
      const { email, password } = signinForm;
      if (key === 'email') {
        let validEmail = validateEmail(value);
        const update = {
          ...signinForm,
          email: {
            ...email,
            value: value,
            valid: validEmail,
          },
        };
        dispatch(setGoldlabelKey({ key: 'signinForm', value: update }));
      }

      if (key === 'password') {
        const update = {
          ...signinForm,
          password: {
            ...password,
            value: value || '',
            valid: password.value !== '',
          },
        };
        dispatch(setGoldlabelKey({ key: 'signinForm', value: update }));
      }

      // if (email.valid && password.valid) {
      //   const update = {
      //     ...signinForm,
      //     valid: true,
      //   };
      //   dispatch(setGoldlabelKey({ key: 'signinForm', value: update }));
      // }
    } catch (e: any) {
      console.log('updateSignin 500', e.toString());
    }
  };
