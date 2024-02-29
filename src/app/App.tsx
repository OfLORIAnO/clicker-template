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
import { particleOptions } from '@settings/index';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const { activeCharacter } = useShopStore();

    const {
        click,
        priceCoinsPerClick,
        upgradeCoinsPerClick,
        coinsPerClick,
        setBalance,
        balance,
    } = usePlayerStore();

    if (!activeCharacter) return null;

    const handleClick = () => {
        activeCharacter
            ? click(
                  activeCharacter.damageBonus,
                  activeCharacter.luckyBonusX5,
                  coinsPerClick,
              )
            : click(1, 0, 1);
    };

    const handleUpgradeCoinsPerClick = () => {
        setBalance(balance - priceCoinsPerClick);
        upgradeCoinsPerClick();
    };

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    // const particlesLoaded = useCallback((container: Container | undefined) => {
    //     console.log(container);
    // }, []);

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
                    {coinsPerClick}
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
                    <Button onClick={handleUpgradeCoinsPerClick} disabled={balance <  priceCoinsPerClick}>
                        {useLanguage('scaleClick')} {priceCoinsPerClick}
                    </Button>
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
                            // loaded={particlesLoaded}
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
