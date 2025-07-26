import { Arimo } from "next/font/google";
import "./globals.css";

const arimoSans = Arimo({
  variable: "--font-arimo-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Tama Supermarket",
  description: "Since 2017.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${arimoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
