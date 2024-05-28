'use client';
import React from "react";
import styles from './conferenceCard.module.css';

const ConferenceCard = ({ id, name, summary, description, date, link, speakers ,extractDateInformation, onRedirect }) => {
    const redirectDetail = () => {
        const jsonData = JSON.stringify({ id,name,summary,description,date,link,speakers });
        onRedirect(`/conference/${id}?data=${encodeURIComponent(jsonData)}`);
    }

    return (
        <div className={`${styles.conferenceCardContent}`}>
            <div className={styles.conferenceInfo}>
                <p  onClick={redirectDetail}
                    className={`${styles.conferenceName} ext-3xl relative after:bg-[#038C5A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-80 leading-loose after:transition-all after:duration-300`}> {name}</p>
                <div className="w-3/4 mx-2">
                    <p className={`${styles.conferenceName} text-[#024959]`}>{extractDateInformation(date).hourResponse}</p>
                    <p className={`${styles.conferenceDescription} text-[#555]`}>{summary}</p>
                </div>
            </div>
        </div>
    );
};

export default ConferenceCard;