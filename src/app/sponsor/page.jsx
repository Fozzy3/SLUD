'use client';
import Card from '@/components/shared/card/Card';
import styles from './sponsor.module.css';
import { useState,useEffect } from 'react';
import { searchSponsors } from '@/services/HttpService';

const SponsorPage = () => {
    
    const [sponsors,setSponsors] = useState([]);

    useEffect(() => {
        searchSponsors().then((response) => setSponsors(response)).catch(() => setSponsors([]));
    },[]);

    return <>
        <section className={styles.speaker_general_wrapper}>
            {sponsors.length === 0 ? (
                <p>¡Inscríbete para presentar tu conferencia!</p>
            ) : (
                sponsors.map(({ id, name, topic, url }) => (
                    <Card key={id} 
                        name={name} 
                        description={topic} 
                        img={url}
                        width={"15rem"}
                        height={"50rem"}
                        widthImage={200}
                        heightImage={200}
                    />
                ))
            )}
        </section>
    </>
}

export default SponsorPage;