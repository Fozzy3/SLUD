import React from "react";
import styles from './speakerSection.module.css'

const SpeakerCard = ({ name, description, img }) => {
    return (
        <div className={`${styles.speakerCard} hover:shadow-xl`}>
            <div className={styles.speakerCardContent}>
                <img
                    alt={name}
                    src={img}
                    className={styles.speakerImage}
                />
                <div className={`${styles.speakerInfo} text-center`}>
                    <p className={styles.speakerName}>{name}</p>
                    <p className={styles.speakerDescription}>{description}</p>
                </div>
                
            </div>
        </div>
    );
};

export default SpeakerCard;
