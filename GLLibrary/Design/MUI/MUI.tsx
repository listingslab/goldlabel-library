import * as React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
// import { useLibraryDispatch } from '../AppState';
// import { Icon } from '../Design';

export default function MUI(props: any) {
  const {children} = props;

  return (
    <Box>
      {children}
    </Box>
  );
}
