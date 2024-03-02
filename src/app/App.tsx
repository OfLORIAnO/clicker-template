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
import { shortNumber } from '@/shared/helper';
import { useSoundController } from '@/shared/stores/sound';

function App() {
    const { activeCharacter } = useShopStore();
    if (!activeCharacter) return null;

    const [isLoading, setIsLoading] = useState(true);

    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const { playSoundOfClick } = useSoundController();

    const {
        click,
        priceCoinsPerClick,
        upgradeCoinsPerClick,
        coinsPerClick,
        setBalance,
        balance,
        isParticlesOn,

        upgradeCoinsPerSecond,
        priceCoinsPerSecond,
    } = usePlayerStore();

    const handleClick = () => {
        playSoundOfClick();
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
                        {useLanguage('x2For')}
                    </Button>
                </div>
                <div className={styles.scalesContainer}>
                    <Button
                        onClick={handleUpgradeCoinsPerClick}
                        className={styles.scalesButton}
                        disabled={balance < priceCoinsPerClick}
                    >
                        {useLanguage('scaleClick')}
                        <span className={styles.scalesPrice}>
                            {shortNumber(priceCoinsPerClick)}
                            <Img src={Icons.balanceWhite} />
                        </span>
                    </Button>
                    <Button
                        onClick={upgradeCoinsPerSecond}
                        className={styles.scalesButton}
                        disabled={balance < priceCoinsPerSecond}
                    >
                        {useLanguage('scaleMoneyPerSecond')}
                        <span className={styles.scalesPrice}>
                            {shortNumber(priceCoinsPerSecond)}
                            <Img src={Icons.balanceWhite} />
                        </span>
                    </Button>
                </div>

                <div className={styles.characterContainer}>
                    <button
                        id="parent"
                        onClick={handleClick}
                        className={styles.characterButton}
                    >
                        {isParticlesOn && (
                            <Particles
                                id="tsparticles"
                                init={particlesInit}
                                // loaded={particlesLoaded}
                                options={particleOptions}
                            />
                        )}

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
