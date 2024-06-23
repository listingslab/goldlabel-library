
import * as React from 'react';
import {
  Box,
} from '@mui/material';
import {
  useLibrarySelect,
  selectSlice,
} from "../AppState"

export type LayoutProps = {
  type: "default" | "special"
  children?: React.ReactNode;
  
}

export default function Layout(props: LayoutProps) {
  const { children, type} = props
  const all = useLibrarySelect(selectSlice)
  return (
    <Box
      sx={{
        border: "1px solid red",
      }}
    >
      {children}
      <pre>all: {JSON.stringify(all, null, 2)}</pre>
    </Box>
  );
}
