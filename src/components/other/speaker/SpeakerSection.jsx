import styles from './speakerSection.module.css'

const SpeakerSection = () => {
    return <>
        <section className={`${styles.speakers_section}`}>
            <h1 className={`${styles.sponsor_section_title} bg-clip-text text-5xl font-bold lg:tracking-tight xl:tracking-tighter`}>Sponsors</h1>
            <br />
            <p>Patrocina el Evento y obtén beneficios exclusivos para tu marca/empresa</p>
        </section>
    </>
}

export default SpeakerSection;