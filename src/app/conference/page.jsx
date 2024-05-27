import ConferenceCard from './ConferenceCard';
import styles from './conference.module.css'
import Image from 'next/image';

const ConferencePage = () => {
    const conferencistas = [
        {
          "fecha": "15 de mayo de 2024",
          "eventos": [
            {
              "nombre": "Introducción a la Inteligencia Artificial",
              "fecha": "15 de mayo de 2024",
              "hora": "10:00 a.m.",
              "descripcion": "Una introducción a los fundamentos de la inteligencia artificial."
            },
            {
              "nombre": "Aplicaciones de la IA en la Medicina",
              "fecha": "15 de mayo de 2024",
              "hora": "2:00 p.m.",
              "descripcion": "Cómo la IA está revolucionando el campo de la medicina."
            },
            {
              "nombre": "Ética en la Inteligencia Artificial",
              "fecha": "15 de mayo de 2024",
              "hora": "4:00 p.m.",
              "descripcion": "Discusión sobre los dilemas éticos en el desarrollo de la IA."
            }
          ]
        },
        {
          "fecha": "20 de junio de 2024",
          "eventos": [
            {
              "nombre": "Tendencias Actuales en Economía",
              "fecha": "20 de junio de 2024",
              "hora": "10:30 a.m.",
              "descripcion": "Análisis de las tendencias económicas globales actuales."
            },
            {
              "nombre": "Finanzas Personales para Millennials",
              "fecha": "20 de junio de 2024",
              "hora": "1:30 p.m.",
              "descripcion": "Consejos y estrategias para manejar tus finanzas personales."
            },
            {
              "nombre": "Inversiones Sostenibles",
              "fecha": "20 de junio de 2024",
              "hora": "4:00 p.m.",
              "descripcion": "Cómo invertir de manera sostenible y ética."
            }
          ]
        },
        {
          "fecha": "10 de julio de 2024",
          "eventos": [
            {
              "nombre": "Mindfulness y Bienestar",
              "fecha": "10 de julio de 2024",
              "hora": "9:00 a.m.",
              "descripcion": "Técnicas de mindfulness para mejorar tu bienestar."
            },
            {
              "nombre": "Psicología Positiva",
              "fecha": "10 de julio de 2024",
              "hora": "12:00 p.m.",
              "descripcion": "Introducción a la psicología positiva y sus beneficios."
            },
            {
              "nombre": "Gestión del Estrés",
              "fecha": "10 de julio de 2024",
              "hora": "3:00 p.m.",
              "descripcion": "Estrategias efectivas para gestionar el estrés diario."
            }
          ]
        }
      ];
      
      
      return (
        <section className={styles.conferences}>
          <div className="flex flex-col items-center justify-center p-16">
            <div className={`${styles.start_section_image}`}>
              <Image src="/data.png" height={100} width={100} alt="slud logo" />
            </div>
            <h1 className="font-bold text-4xl leading-snug leading-loose text-center">
              ¡Estos son los eventos que tenemos para ti en la SLUD!
            </h1>
          </div>
          {conferencistas.length === 0 ? (
              <p>¡Inscríbete para presentar tu conferencia!</p>
          ) : (
            conferencistas.map((conferencista, index) => (
                <div key={index} className={styles.conferencesCard}>
                    <h2 className="rounded-t-lg text-center font-bold text-xl text-[#fff] leading-loose bg-[#038C5A]"><span>Día {index+1} - </span>{conferencista.fecha}</h2>
                    {conferencista.eventos.map((evento, idx) => (
                        <ConferenceCard 
                            key={idx} 
                            name={evento.nombre} 
                            time={evento.hora} 
                            description={evento.descripcion}
                        />
                    ))}
                </div>
              ))
            )}
          </section>

    );
    
}

export default ConferencePage;