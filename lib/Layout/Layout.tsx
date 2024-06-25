
import * as React from 'react';
import {
  Box,
} from '@mui/material';
import {
  useLibrarySelect,
  selectUser,
} from "../AppState"

export type LayoutProps = {
  type: "default" | "special"
  children?: React.ReactNode;
  
}

export default function Layout(props: LayoutProps) {
  const { children, type} = props
  const user = useLibrarySelect(selectUser)
  return (
    <Box
      sx={{
        border: "1px solid red",
      }}
    >
      {children}
      <pre>user: {JSON.stringify(user, null, 2)}</pre>
    </Box>
  );
}
