import * as React from 'react';
import {
  styled,
  CssBaseline,
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Fab,
  CardHeader,
  Avatar,
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
  return <>
      <CssBaseline />
      
      <Container maxWidth="xs">
        <Box sx={{ pb: '50px', pt: '50px' }}>
          <CardHeader
            avatar={<Avatar src={"/svg/iOS.svg"} />}
            title={"Title"}
            subheader={"subheader"}
            action={<IconButton><Icon icon="share" /></IconButton>}
          />

          {children}
        </Box>
      </Container>

      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="primary" aria-label="open drawer">
            <Icon icon="settings" />
          </IconButton>
          <StyledFab 
            color="primary"
            aria-label="add">
            <Icon icon="up" />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>

    </>
}
