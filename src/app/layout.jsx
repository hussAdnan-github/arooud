import localfont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

import Providers from "@/providers/Provider";
import { QueryProvider } from "@/providers/QueryProvider";

const fontLoacl = localfont({
  src: [
    {
      path: "../../public/font/alfont_com_AlFont_com_DINNextLTArabic-Medium.ttf",
      weight: "700",
    },
  ],
  variable: "--font-local",
});
export const metadata = {
  title: "عروض",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={fontLoacl.style} className={fontLoacl.variable}>
        <Providers>
          <QueryProvider>{children}</QueryProvider>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
