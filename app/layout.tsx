import "./globals.css";
import type { Metadata } from "next";
import {Library} from "../lib";

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
      <body>
        <Library>
          {children}
        </Library>
      </body>
    </html>
  );
}
