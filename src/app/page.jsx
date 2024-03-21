import Image from 'next/image';
import styles from './main.module.css';

export default function Home() {
  return (
    <main className={`${styles.main_wrapper}`}>
      {/*Seccion de inicio*/}
      <section className={`${styles.start_section}`}>
        <div className={`${styles.start_section_text}`}>
          <h1 className='text-transparent bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-5xl font-bold lg:tracking-tight xl:tracking-tighter'>
            Semana Linux Universidad Distrital
          </h1>
          <p className="text-lg mt-4 text-black-400 max-w-xl text-justify">
            La XX Edición del Evento de Software Libre, organizado por el grupo GLUD, se celebra en la Universidad
            Distrital Francisco José de Caldas en Bogotá, Colombia. Este año nos enfocamos en la Ciencia de Datos
            y su relación con el software libre. Invitamos a expertos en ciencia de datos con herramientas de código abierto a unirse
            y compartir sus experiencias.
          </p>
        </div>
        <div className={`${styles.start_section_image}`}>
          <Image src="/data_2.png"  
            height={200}
            width={200}
            alt="slud logo"
          />
        </div>
      </section>
      {/*Seccion de sponsors*/}
      <section className={`${styles.sponsor_section}`}>
        <p>data</p>
      </section>
    </main>
  );
}
