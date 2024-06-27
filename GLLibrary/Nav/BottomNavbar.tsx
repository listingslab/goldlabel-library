'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Toolbar, AppBar, IconButton } from '@mui/material';
import { useLibraryDispatch } from '../AppState';
import { Icon } from '../Design';

export default function BottomNavbar() {
  const router = useRouter();

  const onNavClick = (newRoute: string) => {
    router.push(newRoute);
  };

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButton color="primary" aria-label="open drawer">
            <Icon icon="home" />
          </IconButton>
          <IconButton color="primary" aria-label="open drawer">
            <Icon icon="legal" />
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
}
