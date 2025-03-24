import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import SideNav from "@/components/dashboard/sidenav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | The Dashboard",
    default: "The Dashboard",
  },
  description: "A modern dashboard application powered by Next.js",
  //metadataBase: new URL("https://"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >
        <div className="py-8 min-h-screen flex flex-col md:flex-row gap-5 md:gap-8 w-[95%] mx-auto">
          <div className="rounded-xl bg-gray-50 w-full md:w-72 flex-none border-2">
            <SideNav />
          </div>
          <main className="grow md:overflow-y-auto rounded-xl p-10  bg-gray-50 w-full md:w-[90%] border-2 mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
