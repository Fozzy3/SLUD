'use client'
import { useState } from 'react';
import images from './images.js'
import React from 'react';
import styles from './editionsSection.module.css';
import { Carousel } from "react-bootstrap";

const EditionsSection = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        e.preventDefault();
        setIndex(selectedIndex);
    };

    return <>
        <section className={`${styles.editions_section}`}>
            <h1 className={`${styles.editions_section_title} bg-clip-text text-5xl font-bold lg:tracking-tight xl:tracking-tighter`}>Ediciones</h1>
            <p>Conoce nuestras anteriores ediciones</p>
            <div className={`${styles.editions_images_container}`}>
                <Carousel
                    className={styles.carousel_wrapper}
                    activeIndex={index}
                    onSelect={handleSelect}
                >
                    {images.map(({ image, name, year }) => (
                        <Carousel.Item key={name} className="w-full h-96 relative" interval={4000}>
                            <img src={image} alt={`edición-${year}`} className="w-full h-full object-contain" />
                            <Carousel.Caption className={styles.caption}>
                                <p>Edición-{year}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </section>


    </>
}

export default EditionsSection;