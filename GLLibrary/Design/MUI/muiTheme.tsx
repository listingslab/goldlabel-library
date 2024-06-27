'use client';
import {
  PaletteMode,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

export function muiTheme(
  mode: PaletteMode,
) {
  return {
    palette: {
      mode,
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
  }
}
export default muiTheme;
