import Link from 'next/link';
import styles from './detailButton.module.css';

const DetailButton = ({ children, link, color }) => {
    return <>
        <button style={{ backgroundColor: `var(--${color})` }} className={`${styles.detail_button}`}>
            <Link href={`${link}`}>
                {children}
            </Link>
        </button>
    </>
}

export default DetailButton;