import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

// Plex is a documentation superfamily: the mono shares the sans skeleton, so the
// mono data gutter reads as a change of register, not a change of voice.
const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Moh Hasanudin Muslim | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer building multi-country payroll and HR systems for Southeast Asia with PHP/Laravel, React, and AWS.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Payroll Systems",
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
      "Full-Stack Software Engineer building multi-country payroll and HR systems for Southeast Asia.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moh Hasanudin Muslim | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building multi-country payroll and HR systems for Southeast Asia.",
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
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
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
