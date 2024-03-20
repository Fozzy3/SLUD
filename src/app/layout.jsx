import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/header/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SLUD XXI",
  description: "Pagina web hecha por el Grupo Linux de la Universidad Distrital Francisco Jose de Caldas (GLUD)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
