import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {Wrap} from "../lib";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Goldlabel Library",
  description: "Isomorphic library of React features with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrap>
          {children}
        </Wrap>
      </body>
    </html>
  );
}
