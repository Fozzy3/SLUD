import "./globals.css";
import Header from '../components/shared/header/Header';
import Footer from '../components/shared/footer/Footer';

export const metadata = {
  title: "SLUD XXI",
  description: "Pagina web hecha por el Grupo Linux de la Universidad Distrital Francisco Jose de Caldas (GLUD)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
