import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const pretendard = localFont({
  src: [
    {
      path: "../assets/fonts/PretendardVariable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});
