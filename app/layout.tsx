import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
import React from "react";

export const metadata = {
  title: "Nuedebri Health",
  description: "Nuedebri Health App Kenya",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}