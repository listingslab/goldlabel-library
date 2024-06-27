'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { useLibraryDispatch } from '../AppState';
// import { Icon } from '../Design';

export default function PermaNav() {
  const router = useRouter();

  const onNavClick = (newRoute: string) => {
    router.push(newRoute);
  };

  return (
    <>
      <Box
        sx={{
          border: '1px solid gold',
        }}
      >
        <List dense>
          <ListItemButton
            onClick={() => {
              onNavClick('/');
            }}
          >
            {/* <ListItemIcon>
            <Icon icon="home" color="primary" />
          </ListItemIcon> */}
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              onNavClick('/legal');
            }}
          >
            {/* <ListItemIcon>
            <Icon icon="home" color="primary" />
          </ListItemIcon> */}
            <ListItemText primary="Legal" />
          </ListItemButton>
        </List>
      </Box>
    </>
  );
}
