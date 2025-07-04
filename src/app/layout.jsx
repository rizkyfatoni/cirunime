import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const gabarito = Gabarito ({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ciruno Anime List",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.variale} bg-secondary antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
