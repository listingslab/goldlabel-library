import { Typography } from "@mui/material";
import Image from "next/image";

export default function Page() {
  
  const imgageWidth = 500;
  const imgageHeight= 200;

  return (
    <main>
      <Typography variant="h2">
          Home
      </Typography>
      <Image 
        priority
        width={imgageWidth}
        height={imgageHeight}
        alt="Mc Job" 
        src="/webp/mcjob.webp"
      />
    </main>
  );
}
