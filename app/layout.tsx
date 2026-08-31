import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KUHRSA",
  description: "Kisii University Human Resource Students' Association",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
