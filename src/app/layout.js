import "./globals.css";
import { Source_Sans_3, DM_Serif_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

const headingFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Tama Supermarket",
  description: "Since 2017.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="retro" lang="en">
      <Analytics />
      <body
        className={`${sourceSans.variable} ${headingFont.variable} min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(169,199,190,0.25),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(217,163,143,0.18),_transparent_30%),linear-gradient(to_bottom,_#F7F4EF,_#ffffff_60%)] text-black`}
      >
        {children}
      </body>
    </html>
  );
}
