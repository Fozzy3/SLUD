import Link from 'next/link';
import styles from './detailButton.module.css';

const DetailButton = ({ children, link, bgColor, color }) => {
    return <>
        <button style={{ backgroundColor: `var(--${bgColor})`,color:`${color}` }} className={`${styles.detail_button}`}>
            <Link style={{ color:`${color}` }} href={`${link}`} target='_blank' >
                {children}
            </Link>
        </button>
    </>
}

export default DetailButton;