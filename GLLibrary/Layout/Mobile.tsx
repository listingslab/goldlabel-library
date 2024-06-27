import * as React from 'react';
import {
  CssBaseline,
  Box,
  Container,
  IconButton,
  CardHeader,
  Avatar,
} from '@mui/material';
import { Icon } from '../Design';
import { BottomNavbar } from '../Nav';


export default function Mobile(props: any) {
  const { children } = props;

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box sx={{ pb: '50px', pt: '50px' }}>
          <CardHeader
            avatar={<Avatar src={'/svg/iOS.svg'} />}
            title={'Title'}
            subheader={'subheader'}
            action={
              <IconButton>
                <Icon icon="share" />
              </IconButton>
            }
          />
          {children}
        </Box>
      </Container>
      <BottomNavbar />
    </>
  );
}
