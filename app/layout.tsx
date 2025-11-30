import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";

export const metadata = {
  title: "Nuedebri Health App Kenya",
  description: "A modern digital platform for patient monitoring.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
