'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useTheme, Box, Toolbar, AppBar, IconButton } from '@mui/material';
import { Icon } from '../Design';

export default function BottomNavbar() {
  const router = useRouter();
  const theme = useTheme();
  // console.log("theme", theme.palette.common.black);

  const onNavClick = (newRoute: string) => {
    router.push(newRoute);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 'auto',
        bottom: 0,
        backgroundColor: theme.palette.common.black,
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButton
            color="primary"
            aria-label="Home"
            onClick={() => {
              onNavClick('/');
            }}
          >
            <Icon icon="home" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="Legal"
            onClick={() => {
              onNavClick('/legal');
            }}
          >
            <Icon icon="legal" />
          </IconButton>

          <IconButton
            color="primary"
            aria-label="News"
            onClick={() => {
              onNavClick('/news');
            }}
          >
            <Icon icon="news" />
          </IconButton>

          <IconButton
            color="primary"
            aria-label="Contact"
            onClick={() => {
              onNavClick('/contact');
            }}
          >
            <Icon icon="contact" />
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
}
