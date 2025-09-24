import { Playfair_Display, Lora, Inter } from "next/font/google";
import "./globals.css";

// Police élégante pour les titres - style chalet chic
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Police chaleureuse pour les textes - lisible et authentique
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

// Police moderne pour les éléments UI
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Le Karnotzet - Restaurant & Bar à Fromage - Saint Pierre en Faucigny",
  description:
    "Le Karnotzet, restaurant & bar à fromage savoyard à Saint Pierre en Faucigny. Bar à fromage 40 places, click & collect et boutique de fromages d'exception.",
  version: "1.0.3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${playfairDisplay.variable} ${lora.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
