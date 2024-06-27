import { Typography } from '@mui/material';
import Image from 'next/image';

export default function Page() {
  const imgageWidth = 500;
  const imgageHeight = 200;

  return (
    <main>
      <Typography variant="h2">Contact</Typography>
      <Image
        priority
        width={imgageWidth}
        height={imgageHeight}
        alt="surprised"
        src="/webp/surprised.webp"
      />
    </main>
  );
}
