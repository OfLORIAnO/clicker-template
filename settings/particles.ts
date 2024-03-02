import { IParticlesProps } from 'react-particles';
import type { ISourceOptions } from 'tsparticles-engine';

const getRandomHexColor = () => {
    return [
        `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        '#ffffff',
        '#000',
        '#fc6000',
    ];
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

export const particleOptions: IParticlesProps['params'] = {
    autoPlay: true,
    delay: 0,
    fullScreen: {
        enable: true,
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 60,
    interactivity: {
        detectsOn: 'window',
        events: {
            onClick: {
                enable: true,
                mode: 'push',
            },
            resize: {
                delay: 0.5,
                enable: true,
            },
        },
        modes: {
            push: {
                default: true,
                quantity: 20,
            },
        },
    },
    particles: {
        bounce: {
            horizontal: {
                value: 1,
            },
            vertical: {
                value: 1,
            },
        },
        color: {
            value: getRandomHexColor(),
        },
        effect: {
            close: true,
            fill: true,
        },
        move: {
            center: {
                x: 50,
                y: 50,
                mode: 'percent',
                radius: 20,
            },
            distance: 250,
            direction: 'none',
            enable: true,
            gravity: {
                acceleration: 5,
                enable: false,
                inverse: true,
                maxSpeed: 510,
            },
            path: {
                clamp: false,
                delay: {
                    value: 0,
                },
                enable: true,
                options: {},
            },
            random: true,
            size: false,
            speed: 20,
            spin: {
                acceleration: 30,
                enable: false, //? Включает какую-то ебейшую крутилку
            },
            straight: false,
            vibrate: true,
            warp: false,
        },
        number: {
            limit: 100, //? Кол-во партиклов на экране
            value: 60,
        },
        opacity: {
            value: 0.7,
            animation: {
                count: 0,
                enable: true,
                speed: 2,
                decay: 0,
                delay: 0,
                sync: false,
                mode: 'auto',
                startValue: 'random',
                destroy: 'none',
            },
        },
        reduceDuplicates: true,
        shape: {
            close: true,
            fill: true,
            options: {},
            type: 'circle',
        },
        size: {
            value: {
                min: 2,
                max: 10,
            },
            animation: {
                count: 0,
                enable: false,
                speed: 5,
                decay: 0,
                delay: 0,
                sync: false,
                mode: 'auto',
                startValue: 'random',
                destroy: 'none',
            },
        },
        stroke: {
            width: 0,
        },
        zIndex: {
            value: 0,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1,
        },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    smooth: false,
    zLayers: 100,
    motion: {
        disable: false,
        reduce: {
            factor: 4,
            value: true,
        },
    },
};
