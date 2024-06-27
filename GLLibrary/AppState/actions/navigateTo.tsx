export const navigateTo =
  (path: string, target: string | undefined): any =>
  async (dispatch: any) => {
    try {
      window.open(path, target || '_self');
    } catch (e: any) {
      console.log('navigateTo 500', e.toString());
    }
  };
