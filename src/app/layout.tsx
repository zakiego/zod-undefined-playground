import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import "./globals.css";

import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/ui/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Undefined Playground with Zod",
    template: "%s | Undefined Playground with Zod",
  }
};

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
          <h1 className="text-4xl font-bold text-accent-foreground mb-8">
            <span role="img" aria-label="Zod">
              🧙‍♂️
            </span>{" "}
            Undefined Playground with Zod
          </h1>
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  );
}
