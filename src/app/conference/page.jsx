'use client';
import { useEffect, useState } from 'react';
import { searchConferences } from '../../services/HttpService';
import ConferenceCard from './ConferenceCard';
import styles from './conference.module.css'
import Image from 'next/image';

const ConferencePage = () => {
  const [conferences, setConferences] = useState([]);

  const extractDateInformation = (date) => {
    const newDate = new Date(date);
    const dateResponse = newDate.toISOString().split('T')[0];
    const hourResponse = newDate.toISOString().split('T')[1].split('.')[0];
    return {
      dateResponse,
      hourResponse
    };
  }

  const groypByDate = (elements) => {
    const response = {};
    elements.forEach((item) => {
      const keyDate = new Date(item.date).toISOString().split('T')[0];
      if (!response[keyDate]) {
        response[keyDate] = [];
      }
      response[keyDate].push(item);
    });
    return Object.values(response);
  }

  useEffect(() => {
    searchConferences().then((response) => setConferences(groypByDate(response))).catch(() => setConferences([]));
  }, []);

  return (
    <section className={styles.conferences}>
      <div className="flex flex-col items-center justify-center p-16">
        <div className={`${styles.start_section_image}`}>
          <Image src="/data.png" height={100} width={100} alt="slud logo" />
        </div>
        <h1 className="font-bold text-4xl leading-snug leading-loose text-center">
          ¡Estos son los eventos que tenemos para ti en la SLUD!
        </h1>
      </div>
      {conferences.length === 0 ? (
        <p>¡Inscríbete para presentar tu conferencia!</p>
      ) : (
        conferences.map((element, index) => (
          <div key={index} className={styles.conferencesCard}>
            <h2 className="rounded-t-lg text-center font-bold text-xl text-[#fff] leading-loose bg-[#038C5A]"><span>Día {index + 1}</span></h2>
            {element.map(({ id, name, description, date, link }) => (
              <ConferenceCard
                key={id}
                date={date}
                description={description}
                link={link}
                name={name}
                extractDateInformation={extractDateInformation}
              />
            ))}
          </div>
        ))
      )}
    </section>

  );

}

export default ConferencePage;