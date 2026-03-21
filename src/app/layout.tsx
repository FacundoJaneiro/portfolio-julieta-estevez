import type { Metadata } from "next";
import { Bebas_Neue, Caveat, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-bebas",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julieta Estévez | Locutora Nacional · Comunicadora · Periodista",
  description:
    "Portfolio profesional de Julieta Estévez, Locutora Nacional, Comunicadora y Periodista. Coberturas, radio, locución comercial, producción y redacción.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `history.scrollRestoration = 'manual';` }} />
      </head>
      <body
        className={`${bebasNeue.variable} ${caveat.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
