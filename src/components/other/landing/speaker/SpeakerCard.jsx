import Image from 'next/image';
import styles from './speakerSection.module.css';

const SpeakerCard = ({ name, description, img }) => {
    return (
        <div className={`${styles.speakerCard} hover:shadow-xl`}>
            <div className={styles.speakerCardContent}>
                <Image
                    className={styles.speakerImage}
                    width={200}
                    height={200}
                    alt={name}
                    src={img}

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
