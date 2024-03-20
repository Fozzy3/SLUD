import "./globals.css";
import Header from '../components/header/Header';

export const metadata = {
  title: "SLUD XXI",
  description: "Pagina web hecha por el Grupo Linux de la Universidad Distrital Francisco Jose de Caldas (GLUD)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
