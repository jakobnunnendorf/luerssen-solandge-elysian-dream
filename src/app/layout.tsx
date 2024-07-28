import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./NavBar/NavBar";
import React from "react";

export const metadata: Metadata = {
  title: "Lürssen Solandge Elysian Dream",
  description: "Where luxury meets the horizon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      <footer className="flex items-center justify-center bg-[#A37C45] h-24 text-center text-white">
          <p>
        Copyright@2024 BlueWater Interiors | All rights reserved.
          </p>
      </footer>
      </body>
    </html>
  );
}
