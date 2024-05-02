import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={`${styles.slud_header} flex flex-wrap justify-between items-center py-4`}>
      <section className={`${styles.slud_header_image} w-full md:w-auto flex items-center justify-center mb-4 md:mb-0`}>
        <Link href="/">
          <Image
            src="/Logo-GLUD.svg"
            height={30}
            width={30}
            alt="logo glud"
          />
        </Link>
      </section>
      <section className={`${styles.slud_intro_section} w-full md:w-auto`}>
        <div className={`${styles.slud_links_menu} w-full flex flex-wrap justify-center md:justify-end`}>
          <Link href="/tienda">
            <span className="font-bold block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
              Tienda
            </span>
          </Link>
          <Link href="/sponsors">
            <span className="font-bold block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
              Sponsors
            </span>
          </Link>
          <Link href="/conference">
            <span className="font-bold block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white">
              Conferencia
            </span>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
