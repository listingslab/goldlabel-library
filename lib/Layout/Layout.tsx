
import * as React from 'react';
import {
  Box,
} from '@mui/material';
import {
  useLibrarySelect,
  selectUser,
} from "../AppState"

import {
  Mobile,
} from "./"

export type LayoutProps = {
  type: "default" | "special"
  children?: React.ReactNode;
  
}

export default function Layout(props: LayoutProps) {
  const { children, type} = props
  const user = useLibrarySelect(selectUser)
  return (
    <Mobile>
      {children}
    </Mobile>
  );
}
