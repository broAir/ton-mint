"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { TonConnectUIProvider } from '@tonconnect/ui-react';


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body c-id="asdasd" className={inter.className}>
        <TonConnectUIProvider manifestUrl="https://localhost:3000/tonconnect-manifest.json">
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  );
}
