// components/ParticlesBackground.js
'use client';
import { useEffect,useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

const animationConfiguration = {
    fullScreen: {
        enable: false,
        zIndex: 0,
      },
    background: {
        repeat: "no-repeat",
        size: "cover",
        color: {
            value: "#13333a",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
    },
    detectRetina: true,
};

const ParticlesBackground = ({ children }) => {
    
    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return <>
        {init && <Particles
            id="tsparticles"
            particlesLoaded={() => {}}
            options={animationConfiguration}
        >
        </Particles>
        }
    </>
};
export default ParticlesBackground;