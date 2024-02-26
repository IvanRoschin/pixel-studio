import OrderModal from "@/components/modals/OrderModal";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from 'sonner';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel Studio",
  description: "looks like you have not seen cool project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OrderModal />
        <Toaster position="top-right" richColors/>
        {children}
      </body>
    </html>
  );
}
