import "./globals.css";
import type { Metadata } from "next";
import {Library, PermaNav} from "../lib";

export const metadata: Metadata = {
  title: "Library",
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
