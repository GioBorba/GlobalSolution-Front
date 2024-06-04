import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="flex-grow flex flex-col w-full bg-gradient-to-b from-[#0077b6] to-[#00a8e8] text-white">
          <main className="flex-grow">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
