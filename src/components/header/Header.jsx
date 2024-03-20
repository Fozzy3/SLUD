import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

const Header = () => {
  return <>
    <header className={`${styles.slud_header}`}>
      <section className={`${styles.slud_header_image} w-1/2 h-full basis-1/4 flex items-center flex-shrink-0 text-white mr-6`}>
        <Image src="Logo-GLUD.svg"
          height={30}
          width={30}
          alt="logo glud"
        />
      </section>
      <section className={`${styles.slud_intro_section} w-3/12`}>
        <div className={`${styles.slud_links_menu} w-full`}>
          <Link href="" className="font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Tienda
          </Link>
          <Link href="" className="font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Sponsors
          </Link>
          <Link href="" className="font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Conferencia
          </Link>
        </div>
      </section>
    </header>
  </>
}

export default Header;