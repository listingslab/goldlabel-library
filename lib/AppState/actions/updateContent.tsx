import { setGoldlabelKey } from '../';

export const updateContent =
  (content: any): any =>
  async (dispatch: any) => {
    try {
      dispatch(setGoldlabelKey({ key: 'content', value: content }));
    } catch (e: any) {
      console.log('updateUser 500', e.toString());
    }
  };
