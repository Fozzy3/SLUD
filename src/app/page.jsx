import SponsorSection from '@/components/other/landing/sponsor/SponsorSection';
import SpeakerSection from '@/components/other/landing/speaker/SpeakerSection';
import StartSection from '@/components/other/landing/start/StartSection';
import styles from './main.module.css';
import EditionsSection from '@/components/other/landing/editions/EditionsSection';

export default function Home() {
  return (
    <main className={`${styles.main_wrapper}`}>
      <StartSection />
      <SponsorSection />
      <SpeakerSection />
      <EditionsSection/>
    </main>
  );
}
