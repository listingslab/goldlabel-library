import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
  CssBaseline,
  Box,
  Container,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  Avatar,
} from '@mui/material';
import { Icon } from '../Design';
import { BottomNavbar } from '../Nav';

export default function Mobile(props: any) {
  const { children } = props;
  const router = useRouter();

  const onNavClick = (newRoute: string) => {
    router.push(newRoute);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs">
        <Card sx={{ pb: '50px' }}>
          <CardHeader
            title={'Goldlabel Library'}
            subheader={
              'Isomorphic React with NextJS, Redux, Firebase & more'
            }
            avatar={
              <IconButton
                onClick={() => {
                  onNavClick('/');
                }}
              >
                <Avatar src={'/svg/icon_512.svg'} />
              </IconButton>
            }
            action={
              <IconButton
                aria-label='Share'
                onClick={() => {
                  console.log("Share")
                }}>
                <Icon icon="share" />
              </IconButton>
            }
          />
          <CardContent>{children}</CardContent>
        </Card>
        <BottomNavbar />
      </Container>
    </>
  );
}
