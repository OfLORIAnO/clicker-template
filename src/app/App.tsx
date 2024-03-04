// ? Стили
import './reset.css';
import './settings.module.scss';
import styles from './App.module.scss';

// ? helper-функции
import { shortNumber } from '@/shared/helper';
import { useLanguage } from '@/shared/hooks';

// ? Компоненты
import { Init } from './Process';
import { Wrapper } from './Wrapper/Wrapper';
import { Balance, Settings, Shop } from '@/components';
import { Button, Icons, Img } from '@/shared/ui';

// ? Требуемые библиотеки
import { useCallback, useState } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';
import { particleOptions } from '@settings/index';

// ? Хранилища
import { usePlayerStore, useShopStore, useSoundController } from '@/stores';

function App() {
    const [isLoading, setIsLoading] = useState(false);

    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const { playSoundOfClick } = useSoundController();
    const { activeCharacter } = useShopStore();

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
        click(
            activeCharacter.damageBonus,
            activeCharacter.luckyBonusX5,
            coinsPerClick,
        );
    };

    const handleUpgradeCoinsPerClick = () => {
        setBalance(balance - priceCoinsPerClick);
        upgradeCoinsPerClick();
    };

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Init isLoading={isLoading} setIsLoading={setIsLoading}>
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
        </Init>
    );
}

export default App;
