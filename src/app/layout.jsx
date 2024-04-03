import "./globals.css";
import Header from '../components/shared/header/Header';
import Footer from '../components/shared/footer/Footer';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export const metadata = {
  title: "SLUD XXI",
  description: "Pagina web hecha por el Grupo Linux de la Universidad Distrital Francisco Jose de Caldas (GLUD)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden">
        <AppRouterCacheProvider>
          <Header />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
