import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ToastProvider from "@/components/ui/ToastProvider";
import StoreInit from "@/components/StoreInit";
import SplashScreen from "@/components/SplashScreen";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#185FA5",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Makon — Ko'chmas mulk platformasi",
  description: "Toshkent va atrofdagi uylar, kvartiralar, kottejlar va yerlarni toping. Makon — O'zbekistondagi eng qulay ko'chmas mulk platformasi.",
  keywords: "uy sotish, kvartira ijarasi, ko'chmas mulk, Toshkent, Makon",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${inter.variable} antialiased`}>
      <body
        className="min-h-dvh"
        style={{ background: "var(--gray-50)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <ToastProvider>
        <StoreInit />
        <SplashScreen>
          <Navbar />
          <main
            className="min-h-dvh flex flex-col w-full lg:pl-20 xl:pl-24"
          >
            <div
              className="flex-1 flex flex-col w-full max-w-7xl mx-auto overflow-hidden"
              style={{
                background: "white",
                boxShadow: "0 0 0 1px rgba(226,232,240,0.6), 0 4px 32px rgba(15,23,42,0.06)",
              }}
            >
              {children}
            </div>
          </main>
        </SplashScreen>
        </ToastProvider>
      </body>
    </html>
  );
}
