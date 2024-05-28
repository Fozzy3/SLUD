'use client';
import styles from './startSection.module.css';
import Image from 'next/image';

const StartSection = () => {
    return <>
        <section className={`${styles.start_section}`}>
            <div className={styles.wrapper_content}>
                <div className={`${styles.start_section_text}`}>
                    <h1 className='text-transparent bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-5xl font-bold lg:tracking-tight xl:tracking-tighter'>
                        Semana Linux Universidad Distrital
                    </h1>
                    <p className="text-white text-lg md:text-2xl lg:text-2xl font-semibold leading-relaxed md:leading-loose lg:leading-loose text-center md:text-left max-w-3xl mx-auto mt-8 md:mt-12">
                        La XX Edición del Evento de Software Libre, organizado por el grupo GLUD, se celebra en la Universidad
                        Distrital Francisco José de Caldas en Bogotá, Colombia. Este año nos enfocamos en la Ciencia de Datos
                        y su relación con el software libre. Invitamos a expertos en ciencia de datos con herramientas de código abierto a unirse
                        y compartir sus experiencias.
                    </p>
                </div>
                <div className={`${styles.start_section_image}`}>
                    <Image
                        src="/logo_completo.png"
                        id='logo_main'
                        height={400}
                        width={400}
                        alt="slud logo"
                    />
                </div>
            </div>
        </section>
    </>
}

export default StartSection;