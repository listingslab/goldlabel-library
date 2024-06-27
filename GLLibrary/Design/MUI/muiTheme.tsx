'use client';

import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({

  palette: {
    primary: {
      main: '#c09f52',
    },
    secondary: {
      main: '#937f50',
    },
    success: {
      main: '#c09f52',
    },
    info: {
      main: '#e2b54b',
    },
    warning: {
      main: '#ffb300',
    },
    error: {
      main: '#ee6c0e',
    },
  },
});

export default muiTheme;