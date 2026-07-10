import type { Metadata, Viewport } from "next";
import { passionOne, outfit } from "./fonts";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dog It Up | America's Food Court",
  description: "America's Favorite Flavors, Built in Every Bite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${passionOne.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-clip" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
