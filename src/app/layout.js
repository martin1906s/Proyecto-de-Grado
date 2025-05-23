import { Geist, Geist_Mono } from "next/font/google";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Support from "../../components/Support";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NeuroGame",
  description: "NeuroGame",
};

export default function RootLayout({children}){
  return (
    <html lang="es">
      <head>
        <title>NeuroGame</title>
        <meta name="description" content="NeuroGame" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/isotipo.svg" sizes="any" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/img/isotipo.svg" sizes="180x180" />
        <link rel="icon" href="/img/isotipo.svg" sizes="32x32" type="image/png" />
        <link rel="icon" href="/img/isotipo.svg" sizes="16x16" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" crossOrigin="use-credentials" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-title" content="NeuroGame" />
        <meta name="application-name" content="NeuroGame" />
        <meta name="keywords" content="NeuroGame" />
        <meta name="author" content="NeuroGame" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{backgroundColor: "#dfe6e8"}}>
        <Header />
        <Navigation />
        {children}
        <About />
        <Support />
        <Footer />
      </body>

    </html>
  );
}
