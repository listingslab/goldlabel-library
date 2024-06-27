import * as React from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';

export default function Page() {
  const imgageWidth = 400;
  const imgageHeight = 200;

  return (
    <main>
      <Typography variant="h2">Contact</Typography>
      <Image
        priority
        layout="responsive"
        width={imgageWidth}
        height={imgageHeight}
        alt="surprised"
        src="/webp/surprised.webp"
      />
    </main>
  );
}
