import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Catalog from "../components/Catalog";
import { getAssetPath } from "../utils/assetPath";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "portfolio",
  description: "Personal app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* 背景图片层 */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: -2,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none", // 防止遮挡交互
          }}
        >
          <Image
            src={getAssetPath("/bg.png")}
            alt="背景"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <Catalog />
        {children}
      </body>
    </html>
  );
}
