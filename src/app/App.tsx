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
                            options={particleOptions}
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
