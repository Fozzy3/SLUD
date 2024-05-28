'use client';
import { useState, useEffect } from 'react';
import styles from './speakerSection.module.css'
import DetailButton from '@/components/shared/detail-button/DetailButton';
import SpeakerCard from './SpeakerCard';
import { searchSpeakers } from '../../../../services/HttpService';

const SpeakerSection = () => {
    const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
        searchSpeakers().then((response) => {
            setSpeakers(response);
        }).catch(err => setSpeakers([]));
    }, []);
    
    return <>
        <section className={`${styles.speakers_section}`}>
            <section className={styles.speaker_info}>
                <h1 className={`bg-clip-text text-5xl font-bold lg:tracking-tight xl:tracking-tighter`}>Speakers</h1>
                <p>
                    Participa como conferencista, llena el formulario proponiendo el tema de tu conferencia
                    y el horario de disponibilidad para realizarla.
                </p>
                <DetailButton link={`${process.env.NEXT_PUBLIC_FORM_SPEAKER}`} bgColor="blue_light" color={'white'}>Inscribete</DetailButton>
            </section>

        </section>
        <section className={styles.speakerContainer}>
            {speakers.length === 0 ? (
                <p>¡Inscríbete para presentar tu conferencia!</p>
            ) : (
                speakers.map(({ id,full_name,url,degree }) => (
                    <SpeakerCard key={id} name={full_name} description={degree} img={url} />
                ))
            )}
        </section>
    </>
}

export default SpeakerSection;