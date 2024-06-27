import * as React from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';

export default function Page() {
  const imgageWidth = 500;
  const imgageHeight = 200;

  return (
    <main>
      <Typography variant="h2">News</Typography>
      <Image
        priority
        width={imgageWidth}
        height={imgageHeight}
        alt="drones with guns"
        src="/webp/drones-with-guns.webp"
      />
    </main>
  );
}
