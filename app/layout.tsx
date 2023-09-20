"use client";

import { Footer, Header } from "@components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noted",
  description: "Simple note app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(inter.className, "px-5 py-6")}>
        <Header user={Profile} />
        <main className="min-h-[calc(100dvh-104px)] py-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

const Profile = {
  name: "Ibrahim El Gibran",
  email: "ibrahimelgibran17@gmail.com",
  profile: "student",
  login: false,
  darkTheme: false,
};
