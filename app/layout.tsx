import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KUHRSA",
    template: "%s | KUHRSA",
  },
  description:
    "Kisii University Human Resource Students' Association — connecting students through information, engagement, academic support and opportunities.",
  icons: {
    icon: "/images/kuhrsa_logo.jpeg",
    shortcut: "/images/kuhrsa_logo.jpeg",
    apple: "/images/kuhrsa_logo.jpeg",
  },
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
