"use client";
import { useSearchParams } from 'next/navigation';
import { getHourFormat } from '@/util/util';
import Link from 'next/link';
import styles from './detail.module.css';

export default function DetailConferencePage() {
  const search = useSearchParams();
  const jsonData = JSON.parse(search.get('data'));
  const { name, description, date, link, speakers } = jsonData;
  const eventDate = new Date(date);
  const currentDate = new Date();
  const isLive = currentDate.toDateString() === eventDate.toDateString();

  const getSpeakers = (speakers) => {
    console.log(speakers)
    let response = '';
    for (let index in speakers) {
      const { attributes } = speakers[index];
      response += `${attributes.name}, `;
    }
    response = response.substring(0, response.length - 2);
    return response;
  }

  const handleNullValues = (data) => {
    return (data !== null && data !== undefined) ? data : '';
  }

  return (
    <div className={styles.general_container}>
      <div className={styles.conference_container}>
        <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
        <br></br>
        <p className='text-lg text-gray-600'><strong>Fecha:</strong> {eventDate.toLocaleDateString()}</p>
        <p className='text-lg text-gray-600'><strong>Hora:</strong> {getHourFormat(eventDate)}</p>
        <p className='text-lg text-gray-600'><strong>Conferencistas:</strong> {getSpeakers(speakers)}</p>
        <div className={styles.conference_paragraph}>
          <p>{description}</p>
        </div>
        {isLive ? (
          <Link href={handleNullValues(link)} target="_blank" rel="noopener noreferrer" className="live-button">Transmisión en Directo</Link>
        ) : (
          <Link
            href={handleNullValues(link)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 mt-5 text-lg text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Ver Video
          </Link>
        )}
      </div>
    </div>
  );
};