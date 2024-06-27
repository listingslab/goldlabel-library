import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import muiTheme from './muiTheme';

export default function MUI(props: any) {
  const { children } = props;
  const customTheme = muiTheme('dark');
  return (
    <ThemeProvider theme={createTheme(customTheme)}>{children}</ThemeProvider>
  );
}
