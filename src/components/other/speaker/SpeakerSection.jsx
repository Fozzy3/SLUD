import styles from './speakerSection.module.css'
import DetailButton from '@/components/shared/detail-button/DetailButton';

const SpeakerSection = () => {
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
            <section>
                
            </section>
        </section>
    </>
}

export default SpeakerSection;