import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import "./globals.css";

import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/ui/navbar";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Container>
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  );
}
