import styles from './speakerSection.module.css'
import DetailButton from '@/components/shared/detail-button/DetailButton';
import SpeakerCard from './SpeakerCard'; 

const SpeakerSection = () => {
    const speakers = [
        { name: "Juan Pérez", description: "Experto en inteligencia artificial", img: "https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png" },
        { name: "María González", description: "Desarrolladora de software", img: "https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png" },
        { name: "Carlos López", description: "Diseñador de UX/UI", img: "https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png" },
        { name: "Laura Martínez", description: "Analista de datos", img: "https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png" },  
        { name: "Juan Pérez", description: "Experto en inteligencia artificial", img: "https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png" },
        { name: "María González", description: "Desarrolladora de software", img: "https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png" },
        { name: "Carlos López", description: "Diseñador de UX/UI", img: "https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png" },
        { name: "Laura Martínez", description: "Analista de datos", img: "https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png" },
        { name: "Juan Pérez", description: "Experto en inteligencia artificial", img: "https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png" },
        { name: "María González", description: "Desarrolladora de software", img: "https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png" },
        { name: "Carlos López", description: "Diseñador de UX/UI", img: "https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png" },
        { name: "Laura Martínez", description: "Analista de datos", img: "https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png" },  
        { name: "Juan Pérez", description: "Experto en inteligencia artificial", img: "https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png" },
        { name: "María González", description: "Desarrolladora de software", img: "https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png" },
        { name: "Carlos López", description: "Diseñador de UX/UI", img: "https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png" },
        { name: "Laura Martínez", description: "Analista de datos", img: "https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png" }
    ];  
    return <>
        <section className={`${styles.speakers_section}`}>
            <section className={styles.speaker_info}>
                <h1 className={`bg-clip-text text-5xl font-bold lg:tracking-tight xl:tracking-tighter`}>Speakers</h1>
                <p>
                    Participa como conferencista, llena el formulario proponiendo el tema de tu conferencia 
                    y el horario de disponibilidad para realizarla.
                </p>
                <DetailButton link="/sponsors" color="blue_light">Inscribete</DetailButton>
            </section>
            
        </section>
        <section className={styles.speakerContainer}>
            {speakers.length === 0 ? (
                <p>Inscríbete como ponente!</p>
            ) : (
                speakers.map((speaker, index) => (
                    <SpeakerCard key={index} name={speaker.name} description={speaker.description} img={speaker.img} />
                ))
            )}
        </section>
    </>
}

export default SpeakerSection;