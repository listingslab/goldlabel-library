/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

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
        alt="drones with guns"
        src="/webp/drones-with-guns.webp"
      />
      <Box sx={{ height: 16 }} />
      <Typography variant="h4">Legal</Typography>
      <Box sx={{ height: 16 }} />
      <Typography variant="body2" gutterBottom>
        Drones with guns. Like THAT's a good idea
      </Typography>
    </main>
  );
}
