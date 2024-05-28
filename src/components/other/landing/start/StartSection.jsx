'use client';
import styles from './startSection.module.css';
import Image from 'next/image';

const StartSection = () => {
    return <>
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
                <Image src="/logo_completo.png"
                    height={300}
                    width={300}
                    alt="slud logo"
                />
            </div>
        </section>
    </>
}

export default StartSection;