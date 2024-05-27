import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={`${styles.slud_header} flex justify-between items-center py-4 px-4 md:px-8`}>
      <section className="flex items-center">
        <Link href="/" className="block">
          <Image
            src="/Logo-GLUD.svg"
            height={30}
            width={30}
            alt="logo glud"
            className="h-auto"
          />
        </Link>
      </section>
      <section className={`flex items-center`}>
        <div className={`flex flex-col md:flex-row items-center w-full md:w-auto`}>
          <Link href="/tienda" className="font-bold mt-4 md:mt-0 md:ml-4 text-teal-200 hover:text-white px-4 py-2">
            Tienda
          </Link>
          <Link href="/sponsors" className="font-bold mt-4 md:mt-0 md:ml-4 text-teal-200 hover:text-white px-4 py-2">
            Sponsors
          </Link>
          <Link href="/conference" className="font-bold mt-4 md:mt-0 md:ml-4 text-teal-200 hover:text-white px-4 py-2">
            Conferencia
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
