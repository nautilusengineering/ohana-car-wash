import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ohana Car Wash - Monroe, OH | Where Every Wash is a Splash of Paradise",
  description: "Join Ohana Unlimited in Monroe, OH and start saving time and money on every car wash. Free vacuums, air guns, and more. Visit us today!",
  keywords: "car wash, Monroe OH, unlimited car wash, Ohana Car Wash, Cincinnati car wash",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Ohana Car Wash - Monroe, OH",
    description: "Where every wash is a splash of paradise! Join Ohana Unlimited and start saving.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head />
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
