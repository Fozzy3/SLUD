import Image from 'next/image';
import styles from './card.module.css';

const Card = ({ name, description, img, width, height, widthImage, heightImage }) => {
    return (
        <div 
            style={{width: width,height: height}}
            className={`${styles.card} hover:shadow-xl`}
        >
            <div className={styles.cardContent}>
                <Image
                    className={styles.cardImage}
                    width={widthImage}
                    height={heightImage}
                    alt={name}
                    src={img}

                />
                <div className={`${styles.cardInfo} text-center`}>
                    <p className={styles.cardName}>{name}</p>
                    <p className={styles.cardDescription}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
