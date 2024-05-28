'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { searchConferences } from '../../services/HttpService';
import ConferenceCard from '@/components/other/conference_card/ConferenceCard';
import styles from './conference.module.css'

const ConferencePage = () => {
  const [conferences, setConferences] = useState([]);
  const router = useRouter();

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

  const onRedirect = (route) => {
    router.push(route);
  }

  return (
    <section className={styles.conferences}>
      {conferences.length === 0 ? (
        <p>¡Inscríbete para presentar tu conferencia!</p>
      ) : (
        conferences.map((element, index) => (
          <div key={index} className={styles.conferencesCard}>
            <h2 className="rounded-t-lg text-center font-bold text-xl text-[#fff] leading-loose bg-[#038C5A]"><span>Día {index + 1}</span></h2>
            {element.map(({ id, name, description, summary, date, link, speakers }) => (
              <ConferenceCard
                id={id}
                key={id}Card
                date={date}
                description={description}
                summary={summary}
                link={link}
                name={name}
                speakers={speakers}
                extractDateInformation={extractDateInformation}
                onRedirect={onRedirect}
              />
            ))}
          </div>
        ))
      )}
    </section>

  );

}

export default ConferencePage;