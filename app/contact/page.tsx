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
        alt="surprised"
        src="/webp/surprised.webp"
      />
      <Box sx={{ height: 16 }} />
      <Typography variant="h4">Contact</Typography>
    </main>
  );
}
