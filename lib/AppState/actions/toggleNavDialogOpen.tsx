import { setGoldlabelKey } from '../';

export const toggleNavDialogOpen =
  (open: boolean): any =>
  async (dispatch: any) => {
    try {
      dispatch(setGoldlabelKey({ key: 'navDialogOpen', value: open }));
    } catch (e: any) {
      console.log('toggleNavDialogOpen 500', e.toString());
    }
  };
