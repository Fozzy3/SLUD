'use client';
import { useState } from 'react';
import styles from './SponsorSlider.module.css'
import SponsorCard from './SponsorCard';

const SponsorSlider = ({ data }) => {

  const [itemActive, setItemActive] = useState(0);
  const countItem = data.length;
  const prev = () => {
    setItemActive(itemActive - 1)
    if (itemActive === 0) {
      setItemActive(countItem - 1);
    }
  }
  const next = () => {
    setItemActive(itemActive + 1);
    if (itemActive === countItem - 1) {
      setItemActive(0);
    }
  };
  return (
    <div className={`${styles.containerCard}`}>
      <SponsorCard imgUrl={data[itemActive].url} imgAlt={data[itemActive].name}></SponsorCard>
      <div className={`${styles.container_butons} py-5`}>
        <button onClick={prev} className={`w-1/2 h-10 px-7 transition hover:-translate-y-1 hover:-translate-x-0.5 hover:scale-110`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='Outline'
            viewBox='0 0 24 24'
            width='30'
            height='30'
          >
            <path d='M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z' />
          </svg>
        </button>
        <button onClick={next} className={`w-1/2 h-10 px-7 transition hover:-translate-y-1 hover:translate-x-0.5 hover:scale-110`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='Outline'
            viewBox='0 0 24 24'
            width='30'
            height='30'
          >
            <path d='M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z' />
          </svg>
        </button>

      </div>
    </div>
  );
};

export default SponsorSlider;
