
import * as React from 'react';
import {
  Box,
} from '@mui/material';

export type LayoutProps = {
  type: "default" | "special"
  children?: React.ReactNode;
  
}

export default function Layout(props: LayoutProps) {
  const { children, type} = props
  return (
    <Box
      sx={{
        border: "1px solid red",
      }}
    >
      {children}
    </Box>
  );
}
