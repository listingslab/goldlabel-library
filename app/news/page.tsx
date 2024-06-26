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
        alt="Drones with guns"
        src="/webp/mcjob.webp"
      />
      <Box sx={{ height: 16 }} />
      <Typography variant="h4">News</Typography>
      <Box sx={{ height: 16 }} />
      <Typography variant="body2" gutterBottom>
        In Douglas Coupland&apos;s novel *Generation X: Tales for an Accelerated
        Culture*, a McJob refers to a low-paying, low-prestige, dead-end job
        that requires few skills and offers little chance of advancement. The
        term is derived from jobs typically found at fast-food restaurants like
        McDonald&apos;s, symbolizing work that is perceived as meaningless and
        unsatisfying. McJobs are characterized by their monotonous nature, lack
        of benefits, and the feeling of being easily replaceable, reflecting the
        disillusionment and economic instability faced by Generation X.
      </Typography>
    </main>
  );
}
