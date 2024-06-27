import "./globals.css";
import type { Metadata } from "next";
import {GLLibrary} from "../GLLibrary";

export const metadata: Metadata = {
  title: "GLLibrary",
  description: "Goldlabel's Isomorphic library of React features on NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GLLibrary>
          {children}
        </GLLibrary>
      </body>
    </html>
  );
}
