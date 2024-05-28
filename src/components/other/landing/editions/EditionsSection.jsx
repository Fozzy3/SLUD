'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Carousel } from "react-bootstrap";
import { searchPastEvents } from '../../../../services/HttpService.js';
import styles from './editionsSection.module.css';

const EditionsSection = () => {
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState([]);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        searchPastEvents().then((response) => {
            setImages(response);
        }).catch(() => {
            setImages([]);
        });
    }, []);

    if (images.length == 0) {
        return <>
            <section className={`${styles.editions_section}`}>
                <h1 className={`${styles.editions_section_title} bg-clip-text text-5xl font-bold lg:tracking-tight xl:tracking-tighter`}>Ediciones</h1>
                <p>Conoce nuestras anteriores ediciones</p>
            </section>
        </>
    }
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
                            <Image
                                className="w-full h-full object-contain"
                                src={image} 
                                alt={`edición-${year}`}
                                width={150}
                                height={150}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </section>


    </>
}

export default EditionsSection;