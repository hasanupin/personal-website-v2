import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moh Hasanudin Muslim | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer specializing in PHP/Laravel, React, and cloud technologies. Building scalable web applications with modern tech stacks.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "PHP",
    "Laravel",
    "React",
    "TypeScript",
    "Next.js",
    "AWS",
  ],
  authors: [{ name: "Moh Hasanudin Muslim" }],
  openGraph: {
    title: "Moh Hasanudin Muslim | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in PHP/Laravel, React, and cloud technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moh Hasanudin Muslim | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in PHP/Laravel, React, and cloud technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
