import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Color Picker",
  description: "change the background color",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
