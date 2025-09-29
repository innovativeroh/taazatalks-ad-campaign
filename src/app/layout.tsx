import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import HeaderSection from "@/components/core/header";
import BookYourPodcast from "@/components/core/bookYourPodcast";

export const metadata: Metadata = {
  title: "Taaza Talks Podcast",
  description: "India's Top Podcast For Founders",
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
