import type { Metadata } from "next";
import { Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { baseUrl } from "@/constants";

// Importing fonts from Google Fonts
const creteRound = Crete_Round({
  variable: "--font-creteRound",
  subsets: ["latin"],
  weight: ["400"],
});

const workSans = Work_Sans({
  variable: "--font-workSans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "ABUcoders dasturlashga oid maqolalar",
  description:
    "Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng so'nggi xabarlar. Bizning blogda dasturlashni o'rganish va rivojlantirish uchun qo'llanma topishingiz mumkin.",
  authors: [
    {
      name: "ABUcoders",
      url: "https://abdulloyev.uz",
    },
  ],
  icons: { icon: "/favicon.png" },
  keywords: [
    "dasturlash",
    "maqolalar",
    "yangiliklar",
    "texnologiya",
    "programming",
    "software development",
    "ABUcoders",
  ],
  openGraph: {
    title: "ABUcoders dasturlashga oid maqolalar",
    description:
      "Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng so'nggi xabarlar. Bizning blogda dasturlashni o'rganish va rivojlantirish uchun qo'llanma topishingiz mumkin.",
    url: baseUrl,
    siteName: "ABUcoders",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "ABUcoders dasturlashga oid maqolalar",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${creteRound.variable} ${workSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
