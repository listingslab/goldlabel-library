import * as React from 'react';
import {
  styled,
  CssBaseline,
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Fab,
} from '@mui/material';
import {Icon} from "../Design"
// import {DeathScroll} from "../Layout"

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -10,
  // left: 0,
  right: 10,
  margin: '0 auto',
});

export default function Mobile(props: any) {
  const {children} = props
  // console.log("children", children)
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ pb: '50px' }}>
        {children}
      </Box>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <Icon icon="settings" />
          </IconButton>
          <StyledFab aria-label="add">
            <Icon icon="up" />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
