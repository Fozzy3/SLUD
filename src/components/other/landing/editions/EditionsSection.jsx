'use client'
import { Container } from 'postcss';
import images from './images.js'
import React from 'react';
import styles from './editionsSection.module.css';
import Carousel from "react-elastic-carousel";


const EditionsSection = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ]
    
    return <>
        <section className={`${styles.editions_section}`}>
            <h1 className={`${styles.editions_section_title} bg-clip-text text-5xl font-bold lg:tracking-tight xl:tracking-tighter`}>Ediciones</h1>
            <p>conoce nuestras anteriores ediciones</p>
            <div className={`${styles.editions_images_container}`}>
                <Carousel className={`size-full`} breakPoints={breakPoints} enableTilt={true}>
                    {images.map((image, index) => {
                        return (
                            <div className={`${styles.editions_image}`}>
                                <img className={`${styles.editions_image}`} key={index} src={image} alt="image" />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </section>
    </>
}

export default EditionsSection;