import { Playfair_Display, Lora, Inter } from "next/font/google";
import "./globals.css";

// Police élégante pour les titres - style chalet chic
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
});

// Police chaleureuse pour les textes - lisible et authentique
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: 'swap',
});

// Police moderne pour les éléments UI
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Restaurant & Bar à Fromage - Savoie",
  description: "Concept unique : bar à fromage avec click & collect, restaurant savoyard et boutique de fromages d'exception. Découvrez nos spécialités savoyardes en Savoie.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${playfairDisplay.variable} ${lora.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
