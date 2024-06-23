// import { store } from '../';
import { setGoldlabelKey } from '../';

export const updateUser =
  (user: any): any =>
  async (dispatch: any) => {
    try {
      if (!user) {
        dispatch(setGoldlabelKey({ key: 'user', value: null }));
        dispatch(setGoldlabelKey({ key: 'authorising', value: false }));
        return;
      }
      const updatedUser: any = {};
      if (user) {
        updatedUser.uid = user.uid;
        updatedUser.email = user.email;
        updatedUser.creationTime = user.metadata.creationTime;
        updatedUser.lastSignInTime = user.metadata.lastSignInTime;
        updatedUser.providerId = user.providerId;
        updatedUser.accessToken = user.accessToken;
        updatedUser.createdAt = user.metadata.createdAt;
        updatedUser.lastLoginAt = user.metadata.lastLoginAt;
      }
      dispatch(setGoldlabelKey({ key: 'user', value: updatedUser }));
      dispatch(setGoldlabelKey({ key: 'authorising', value: false }));
    } catch (e: any) {
      console.log('updateUser 500', e.toString());
    }
  };
