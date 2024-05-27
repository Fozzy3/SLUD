'use client';
import React from "react";
import DetailButton from '@/components/shared/detail-button/DetailButton';
import styles from './sponsorSection.module.css';
import SponsorSlider from "@/components/shared/slider/SponsorSlider";
const data = [
    {
      id:1,
      name:"",
      imgUrl:"https://images.pexels.com/photos/21405346/pexels-photo-21405346/free-photo-of-ciudad-puesta-de-sol-agua-panorama-urbano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgAlt:"alt"
    },
    {
      id:2,
      name:"",
      imgUrl:"https://images.pexels.com/photos/18651005/pexels-photo-18651005/free-photo-of-ciudad-coches-calle-edificios.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgAlt:"alt"
    },
    {
      id:3,
      name:"",
      imgUrl:"https://images.pexels.com/photos/21660419/pexels-photo-21660419/free-photo-of-u-bahnhof-hafencity-universitat-en-hamburgo-4.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      imgAlt:"alt"
    },
    {
      id:4,
      name:"",
      imgUrl:"https://images.pexels.com/photos/11114529/pexels-photo-11114529.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      imgAlt:"alt"
    },
    ];
    
    
const SponsorSection = () => {
    return <div>
        <section className={`${styles.sponsor_section}`}>
            <h1 className={`${styles.sponsor_section_title} bg-clip-text text-5xl font-bold lg:tracking-tight xl:tracking-tighter`}>Sponsors</h1>
            <p>Patrocina el Evento y obtén beneficios exclusivos para tu marca/empresa</p>
            <DetailButton link="/sponsors" color="blue_light">Inscribete</DetailButton>
            <div className="container mx-auto">
            <SponsorSlider data={data}></SponsorSlider>
            </div>
        </section>
    </div>
}

export default SponsorSection;