import styles from './speakerSection.module.css'
import DetailButton from '@/components/shared/detail-button/DetailButton';
import SpeakerCard from './SpeakerCard'; 

const SpeakerSection = () => {
    const speakers = [
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
                <p>¡Inscríbete para presentar tu conferencia!</p>
            ) : (
                speakers.map((speaker, index) => (
                    <SpeakerCard key={index} name={speaker.name} description={speaker.description} img={speaker.img} />
                ))
            )}
        </section>
    </>
}

export default SpeakerSection;