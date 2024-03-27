import styles from './sponsorSection.module.css';

const SponsorSection = () => {
    return <>
        <section className={`${styles.sponsor_section}`}>
            <h1 className={`${styles.sponsor_section_title} bg-clip-text text-5xl font-bold lg:tracking-tight xl:tracking-tighter`}>Sponsors</h1>
            <p>Patrocina el Evento y obtén beneficios exclusivos para tu marca/empresa</p>
        </section>
    </>
}

export default SponsorSection;