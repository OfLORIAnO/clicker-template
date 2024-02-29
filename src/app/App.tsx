import './reset.css';
import './settings.module.scss';
import styles from './App.module.scss';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { Settings, Shop } from '@/components';
import { Balance } from '@/components/Balance';
import { usePlayerStore } from '@/shared/stores/player';
import { InitProcess } from './Prosecc/InitProcess';
import { useCallback, useState } from 'react';
import { useShopStore } from '@/shared/stores/shop';
import { Button, Icons, Img } from '@/shared/ui';
import { Wrapper } from './Wrapper/Wrapper';
import Particles from 'react-particles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { particleOptions, defaultOptions } from '@settings/index';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const { activeCharacter } = useShopStore();

    const { click } = usePlayerStore();

    const handleClick = () => {
        activeCharacter?.damage ? click(activeCharacter.damage) : click(1);
    };

    if (!activeCharacter) return null;
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {
            await console.log(container);
        },
        [],
    );
    const getRandomHexColor = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };

    return (
        <InitProcess isLoading={isLoading} setIsLoading={setIsLoading}>
            <Wrapper>
                <Shop setIsShopOpen={setIsShopOpen} isShopOpen={isShopOpen} />
                <Settings
                    setIsSettingsOpen={setIsSettingsOpen}
                    isSettingsOpen={isSettingsOpen}
                />
                <div className={styles.shopContainer}>
                    <Button
                        onClick={() => {
                            setIsShopOpen(true);
                        }}
                        className={styles.shopButton}
                    >
                        {useLanguage('store')}
                        <Img src={Icons.shopWhite} />
                    </Button>
                </div>
                <div className={styles.moneyContainer}>
                    <Balance className={styles.moneyBalance} />
                    <Button className={styles.advertButton}>
                        <Img
                            src={Icons.advertWhite}
                            className={styles.advertImage}
                        />
                    </Button>
                </div>
                <div className={styles.scalesContainer}>
                    <Button> {useLanguage('scaleClick')}</Button>
                    <Button>{useLanguage('scaleMoneyPerSecond')}</Button>
                    <Button>{useLanguage('scaleLucky')}</Button>
                </div>

                <div className={styles.characterContainer}>
                    <button
                        id="parent"
                        onClick={handleClick}
                        className={styles.characterButton}
                    >
                        <Particles
                            id="tsparticles"
                            init={particlesInit}
                            loaded={particlesLoaded}
                            options={{
                                autoPlay: true,
                                // clear: true,
                                delay: 0,
                                fullScreen: {
                                    enable: true,
                                    zIndex: 0,
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
                                        onDiv: {
                                            enable: false,
                                            type: 'circle',
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
                                        remove: {
                                            quantity: 2,
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
                                        value: '#ffffff',
                                        animation: {
                                            h: {
                                                count: 0,
                                                enable: false,
                                                speed: 1,
                                                decay: 0,
                                                delay: 0,
                                                sync: true,
                                                offset: 0,
                                            },
                                            s: {
                                                count: 0,
                                                enable: false,
                                                speed: 1,
                                                decay: 0,
                                                delay: 0,
                                                sync: true,
                                                offset: 0,
                                            },
                                            l: {
                                                count: 0,
                                                enable: false,
                                                speed: 1,
                                                decay: 0,
                                                delay: 0,
                                                sync: true,
                                                offset: 0,
                                            },
                                        },
                                    },
                                    effect: {
                                        close: true,
                                        fill: true,
                                    },
                                    move: {
                                        angle: {
                                            offset: 0,
                                            value: 90,
                                        },
                                        attract: {
                                            distance: 200,
                                            enable: false,
                                            rotate: {
                                                x: 3000,
                                                y: 3000,
                                            },
                                        },
                                        center: {
                                            x: 50,
                                            y: 50,
                                            mode: 'percent',
                                            radius: 0,
                                        },
                                        decay: 0,
                                        distance: 350,
                                        direction: 'none',
                                        drift: 0,
                                        enable: true,
                                        gravity: {
                                            acceleration: 5,
                                            enable: true,
                                            inverse: false,
                                            maxSpeed: 50,
                                        },
                                        path: {
                                            clamp: true,
                                            delay: {
                                                value: 0,
                                            },
                                            enable: false,
                                            options: {},
                                        },
                                        outModes: {
                                            default: 'none',
                                        },
                                        random: false,
                                        size: false,
                                        speed: 10,
                                        spin: {
                                            acceleration: 0,
                                            enable: false,
                                        },
                                        straight: false,
                                        vibrate: true,
                                        warp: false,
                                    },
                                    number: {
                                        density: {
                                            enable: true,
                                            width: 1920,
                                            height: 1080,
                                        },
                                        limit: 100,
                                        value: 80,
                                    },
                                    opacity: {
                                        value: 0.7,
                                        animation: {
                                            count: 0,
                                            enable: false,
                                            speed: 2,
                                            decay: 0,
                                            delay: 0,
                                            sync: false,
                                            mode: 'auto',
                                            startValue: 'random',
                                            destroy: 'none',
                                        },
                                    },
                                    reduceDuplicates: false,
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
                                    destroy: {
                                        bounds: {},
                                        mode: 'none',
                                        split: {
                                            count: 1,
                                            factor: {
                                                value: 3,
                                            },
                                            rate: {
                                                value: {
                                                    min: 4,
                                                    max: 9,
                                                },
                                            },
                                            sizeOffset: true,
                                        },
                                    },
                                    roll: {
                                        darken: {
                                            enable: false,
                                            value: 0,
                                        },
                                        enable: false,
                                        enlighten: {
                                            enable: false,
                                            value: 0,
                                        },
                                        mode: 'vertical',
                                        speed: 25,
                                    },
                                    tilt: {
                                        value: 0,
                                        animation: {
                                            enable: false,
                                            speed: 0,
                                            decay: 0,
                                            sync: false,
                                        },
                                        direction: 'clockwise',
                                        enable: false,
                                    },
                                    twinkle: {
                                        lines: {
                                            enable: false,
                                            frequency: 0.05,
                                            opacity: 1,
                                        },
                                        particles: {
                                            enable: false,
                                            frequency: 0.05,
                                            opacity: 1,
                                        },
                                    },
                                    wobble: {
                                        distance: 5,
                                        enable: false,
                                        speed: {
                                            angle: 50,
                                            move: 10,
                                        },
                                    },
                                    life: {
                                        count: 0,
                                        delay: {
                                            value: 0,
                                            sync: false,
                                        },
                                        duration: {
                                            value: 0,
                                            sync: false,
                                        },
                                    },
                                    rotate: {
                                        value: 0,
                                        animation: {
                                            enable: false,
                                            speed: 0,
                                            decay: 0,
                                            sync: false,
                                        },
                                        direction: 'clockwise',
                                        path: false,
                                    },
                                    orbit: {
                                        animation: {
                                            count: 0,
                                            enable: false,
                                            speed: 1,
                                            decay: 0,
                                            delay: 0,
                                            sync: false,
                                        },
                                        enable: false,
                                        opacity: 1,
                                        rotation: {
                                            value: 20,
                                        },
                                        width: 1,
                                    },
                                    links: {
                                        blink: false,
                                        color: {
                                            value: '#ffffff',
                                        },
                                        consent: false,
                                        distance: 150,
                                        enable: false,
                                        frequency: 1,
                                        opacity: 0.4,
                                        shadow: {
                                            blur: 5,
                                            color: {
                                                value: '#000',
                                            },
                                            enable: false,
                                        },
                                        triangles: {
                                            enable: false,
                                            frequency: 1,
                                        },
                                        width: 1,
                                        warp: false,
                                    },
                                    repulse: {
                                        value: 0,
                                        enabled: false,
                                        distance: 1,
                                        duration: 1,
                                        factor: 1,
                                        speed: 1,
                                    },
                                },
                                pauseOnBlur: true,
                                pauseOnOutsideViewport: true,

                                smooth: false,
                                style: {},
                                zLayers: 100,
                                name: 'Collisions Bounce',
                                motion: {
                                    disable: false,
                                    reduce: {
                                        factor: 4,
                                        value: true,
                                    },
                                },
                            }}
                        />
                        <Img
                            src={activeCharacter.image}
                            className={styles.characterImage}
                        />
                    </button>
                </div>
                <div className={styles.settingsContainer}>
                    <Button
                        className={styles.settingsButton}
                        onClick={() => setIsSettingsOpen(true)}
                    >
                        <Img
                            src={Icons.settingsWhite}
                            className={styles.settingsImage}
                        />
                    </Button>
                </div>
            </Wrapper>
        </InitProcess>
    );
}

export default App;
