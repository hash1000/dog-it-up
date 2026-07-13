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
        {/* No-JS fallback (mirrors the @media (scripting: none) rule in
            globals.css, which not all browsers support): framer-motion SSRs
            its "hidden" variants as inline opacity/transform that only
            resolve once scripting runs. */}
        <noscript>
          <style>{`[data-motion-fallback][style],[data-motion-fallback] [style]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
