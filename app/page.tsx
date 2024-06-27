import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Icon } from '../GLLibrary';

export default function Page() {
  const imgageWidth = 400;
  const imgageHeight = 200;

  return (
    <main>
      <Image
        priority
        layout="responsive"
        width={imgageWidth}
        height={imgageHeight}
        alt="Mc Job"
        src="/webp/coupland.webp"
      />
      <Box sx={{ height: 16 }} />
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ m: 1 }}>
          <Icon icon="home" />
        </Box>
        <Box sx={{ m: 0.5 }}>
          <Typography variant="h5">Goldlabel Library</Typography>
        </Box>
      </Box>

      <Box sx={{ height: 16 }} />
      <Typography variant="body1">
        Isomorphic React features with NextJS
      </Typography>
      <Box sx={{ height: 16 }} />
      <Typography variant="h6">How does it work?</Typography>
      <Box sx={{ height: 16 }} />
      <Typography variant="body1">
        Isomorphic React features with NextJS. Wrapper component used as the
        entry point to the app. It inits a redux store, firebase settings etc
      </Typography>
    </main>
  );
}
