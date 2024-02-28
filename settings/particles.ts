import type { ISourceOptions } from 'tsparticles-engine';

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const defaultOptions: ISourceOptions = {
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                // mode: '',
            },
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
            value: getRandomHexColor(),
        },
        move: {
            direction: 'outside',
            enable: true,
            outModes: {
                default: 'bounce',
            },
            random: true,
            speed: 26,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 400,
            },
            value: 80,
        },
        opacity: {
            value: 1,
        },
        shape: {
            type: 'circle',
        },
        size: {
            value: { min: 1, max: 10 },
        },
    },
    detectRetina: true,
};

export const particleOptions = {
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                // mode: '',
            },
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
            value: getRandomHexColor(),
        },
        move: {
            direction: 'outside',
            enable: true,
            outModes: {
                default: 'bounce',
            },
            random: true,
            speed: 26,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 400,
            },
            value: 80,
        },
        opacity: {
            value: 1,
        },
        shape: {
            type: 'circle',
        },
        size: {
            value: { min: 1, max: 10 },
        },
    },
    detectRetina: true,
};
