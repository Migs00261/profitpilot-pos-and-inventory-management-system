import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "@/providers/providers";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import { Toaster } from "@/components/ui/toaster"
const roboto = Roboto({ 
  subsets: ["latin"],
  weight:['400','700','500'],
  display: 'swap'
});
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
export const metadata: Metadata = {
  title: "profitpilot",
  description: "pos(point of sale) and inventory management website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const session = await auth()
  return (
    
          <SessionProvider session={session}>
            <html lang="en">
            <body className={`${roboto.className} max-w-screen-xl mx-auto`}>
            <Toaster/>
            <NextUIProvider>
            <Providers>
              {children}
             </Providers> 
              </NextUIProvider>
            </body>
            </html>
          </SessionProvider>  

    
    
    
  );
}
