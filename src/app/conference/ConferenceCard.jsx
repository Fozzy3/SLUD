import React from "react";
import styles from './conference.module.css'

const ConferenceCard = ({ name, description, date, link, extractDateInformation }) => {

    return (
            <div className={`${styles.conferenceCardContent}`}>
                <div className={styles.conferenceInfo}>
                    <p className={`${styles.conferenceName} ext-3xl relative after:bg-[#038C5A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-80 leading-loose after:transition-all after:duration-300`}> {name}</p>
                    <div className="w-3/4 mx-2">
                        <p className={`${styles.conferenceName} text-[#024959]`}>{extractDateInformation(date).hourResponse}</p>
                        <p className={`${styles.conferenceDescription} text-[#555]`}>{description}</p>
                    </div>
                </div>
            </div>
    );
};

export default ConferenceCard;