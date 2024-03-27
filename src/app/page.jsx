import SponsorSection from '@/components/other/sponsor/SponsorSection';
import SpeakerSection from '@/components/other/speaker/SpeakerSection';
import StartSection from '@/components/other/start/StartSection';
import styles from './main.module.css';

export default function Home() {
  return (
    <main className={`${styles.main_wrapper}`}>
      {/*Seccion de inicio*/}
      <StartSection />
      {/*Seccion de sponsors*/}
      <SponsorSection />
      {/*Seccion de speakers*/}
      <SpeakerSection />
    </main>
  );
}
