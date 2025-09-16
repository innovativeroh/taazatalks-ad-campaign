import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import HeaderSection from "@/components/core/header";
import BookYourPodcast from "@/components/core/bookYourPodcast";

export const metadata: Metadata = {
  title: "Frontend Template",
  description: "Frontend Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeaderSection />
          {children}
          <BookYourPodcast />
        </ThemeProvider>
      </body>
    </html>
  );
}
