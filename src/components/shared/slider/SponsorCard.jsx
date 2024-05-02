import Image from 'next/image';
import styles from './SponsorSlider.module.css'
const SponsorCard = ({imgUrl,imgAlt}) => {
    return(
        <div className={`${styles.card}`}>
            <Image src={`${imgUrl}`} alt={`${imgAlt}`} className="relative w-56 h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 border-4 border-[--blue_dark] rounded-full overflow-hidden" width={500} height={500}/>
        </div>
    );
}

export default SponsorCard;