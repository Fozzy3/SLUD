import { Container } from 'postcss';
import React from 'react';
import styles from './editionsSection.module.css';

const images =[ "https://imgs.search.brave.com/93WPlIentJsEiXaooiW9JNzPz0alef3H6mqIXsMGauM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWdj/LmFydHByaW50aW1h/Z2VzLmNvbS9pbWcv/cHJpbnQvdS1sLUY0/UzhOTzAuanBnP2Fy/dEhlaWdodD01NTAm/YXJ0UGVyc3BlY3Rp/dmU9biZhcnRXaWR0/aD01NTAmYmFja2dy/b3VuZD1mYmZiZmI",
"https://imgs.search.brave.com/6EyYMib7-z1ArkErmNSmVv_C7kXFDYYgTmPOe9jsDng/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBiLzJk/Lzk5LzBiMmQ5OTg3/MzgyMmI3MmJkMTdh/OTMyMzk4YWNhMmIw/LmpwZw",
"https://imgs.search.brave.com/WYRixz4TurfAqalfHOXl6SpDiPAO_k-3ZfusehvYpbk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFOXA2/bXdOSkEvMS8wLzEx/MzF3L2NhbnZhLW11/c2ljLShwb3N0ZXIp/LWFQaWxrbjlZMDRB/LmpwZw",
"https://imgs.search.brave.com/lvz1fAti63vAramfmBOoKnRDw0slIAukmOx2p1KUPig/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzM2/MTU5My8xMTMxdy1s/Y09KOGJ0SlZHOC5q/cGc"
]

const EditionsSection = () => {
    //variables y estados
    const currentImage = 0;
    //const [currentImage,setCurrentImage]= React.useState(0);
    const numImg = images?.length;

    return <>
        <section className={`${styles.editions_section}`}>
            <h1 className={`${styles.editions_section_title} bg-clip-text text-5xl font-bold lg:tracking-tight xl:tracking-tighter`}>Ediciones</h1>
            <p>conoce nuestras anteriores ediciones</p>
            <div className={`${styles.editions_images_container}`}>
            {images.map((image,index)=>{
                return(
                    <div className={`${styles.editions_image}`}>
                        {currentImage == index &&(
                            <img className={`${styles.editions_image}`} key={index} src={image} alt="image"/>
                        )
                        }
                    </div>
                )
            })
            }
            </div>
            <button className={`${styles.editions_button_left}`}> ⭠</button>
                <button className={`${styles.editions_button_right}`}>⮕</button>
        </section>
    </>
}

export default EditionsSection;