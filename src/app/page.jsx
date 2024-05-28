import SponsorSection from '@/components/other/landing/sponsor/SponsorSection';
import SpeakerSection from '@/components/other/landing/speaker/SpeakerSection';
import StartSection from '@/components/other/landing/start/StartSection';
import styles from './main.module.css';
import EditionsSection from '@/components/other/landing/editions/EditionsSection';
import ParticlesBackground from '../components/shared/background-particles/BackgroundParticles';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <main className={`${styles.main_wrapper}`}>
      <div className="relative w-full h-screen flex items-center justify-center">
        <ParticlesBackground />
        <div className="relative z-10 text-white text-center">
          <StartSection></StartSection>
        </div>
      </div>
      <SponsorSection />
      <SpeakerSection />
      <EditionsSection />
    </main>
  );
}
