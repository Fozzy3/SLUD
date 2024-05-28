'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Navbar, Nav } from 'react-bootstrap';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.slud_header}>
      <Navbar expand="md" variant="dark" className="w-100">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand>
            <Link href="/" passHref>
              <div className="d-flex align-items-center">
                <Image
                  src="/Logo-GLUD.svg"
                  height={50}
                  width={50}
                  alt="logo glud"
                  className="h-auto"
                />
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto d-flex align-items-center">
              <Link href="/sponsor" passHref>
                <div className={`${styles.navItem} font-bold text-teal-200 hover:text-white px-4 py-2`}>
                  Sponsors
                </div>
              </Link>
              <Link href="/conference" passHref>
                <div className={`${styles.navItem} font-bold text-teal-200 hover:text-white px-4 py-2`}>
                  Conferencia
                </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
