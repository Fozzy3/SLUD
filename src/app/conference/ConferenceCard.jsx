import React from "react";
import styles from './conference.module.css'

const ConferenceCard = ({ name, time, description }) => {
    return (
            <div className={`${styles.conferenceCardContent}`}>
                <div className={styles.conferenceInfo}>
                    <p className={`${styles.conferenceName} ext-3xl relative after:bg-[#024959] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full leading-loose after:transition-all after:duration-300 cursor-pointer`}> {name}</p>
                    <div className="w-3/4 mx-2">
                        <p className={styles.conferenceName}>{time}</p>
                        <p className={styles.conferenceDescription}>{description}</p>
                    </div>
                </div>
            </div>
    );
};

export default ConferenceCard;