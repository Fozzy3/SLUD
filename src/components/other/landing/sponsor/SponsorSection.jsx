'use client';
import React, { useState, useEffect } from "react";
import DetailButton from '@/components/shared/detail-button/DetailButton';
import styles from './sponsorSection.module.css';
import SponsorSlider from "@/components/shared/slider/SponsorSlider";
import { searchSponsors } from '../../../../services/HttpService';

const SponsorSection = () => {
  const [sponsorData, setSponsorData] = useState([]);

  useEffect(() => {
    searchSponsors().then((response) => {
      setSponsorData(response);
    }).catch((err) => {
      console.log(err)
      setSponsorData([]);
    });
  }, []);

  return <div>
    <section className={`${styles.sponsor_section}`}>
      <h1 className={`${styles.sponsor_section_title} bg-clip-text text-5xl font-bold lg:tracking-tight xl:tracking-tighter`}>Sponsors</h1>
      <p>Patrocina el Evento y obtén beneficios exclusivos para tu marca/empresa</p>
      <DetailButton link="/sponsors" bgColor="blue_light" color={'white'}>Inscribete</DetailButton>
      <div className="container mx-auto">
        {sponsorData.length === 0 ? (
          <p>¡Inscríbete para presentar tu conferencia!</p>
        ) : (
          <SponsorSlider data={sponsorData}></SponsorSlider>
        )}
      </div>
    </section>
  </div>
}

export default SponsorSection;