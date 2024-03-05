// ? Стили
import './reset.css';
import './settings.module.scss';
import styles from './App.module.scss';

// ? helper-функции
import {
    getCoinsClickWithBonus,
    perSecondCalc,
    shortNumber,
} from '@/shared/helper';
import { useLanguage } from '@/shared/hooks';

// ? Компоненты
import { Init } from './Process';
import { Wrapper } from './Wrapper/Wrapper';
import { Advert, Balance, Settings, Shop } from '@/components';
import { Button, Icons, Img } from '@/shared/ui';

// ? Требуемые библиотеки
import { useCallback, useState } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';
import { particleOptions } from '@settings/index';

// ? Хранилища
import {
    usePlayerStore,
    useShopStore,
    useSoundController,
    useYandexStore,
} from '@/stores';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const { isAvailableRewardedAdvert } = useYandexStore();
    const { playSoundOfClick } = useSoundController();
    const { activeCharacter, activeBackground } = useShopStore();
    const {
        click,
        priceCoinsPerClick,
        upgradeCoinsPerClick,
        coinsPerClick,
        setBalance,
        balance,
        isParticlesOn,

        upgradeCoinsPerSecond,
        coinsPerSecond,
        priceCoinsPerSecond,
    } = usePlayerStore();

    const handleClick = () => {
        playSoundOfClick();
        click();
    };

    const handleUpgradeCoinsPerClick = () => {
        setBalance(balance - priceCoinsPerClick);
        upgradeCoinsPerClick();
    };
    const handleUpgradeCoinsPerSecond = () => {
        setBalance(balance - priceCoinsPerSecond);
        upgradeCoinsPerSecond();
    };

    const handleRewardedAdvert = (onRewaeded?: () => void) => {};

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
                <Advert />
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
                    {isAvailableRewardedAdvert && (
                        <>
                            <Button className={styles.advertButton}>
                                <Img
                                    src={Icons.advertWhite}
                                    className={styles.advertImage}
                                    onClick={() => {
                                        handleRewardedAdvert();
                                    }}
                                />
                                {useLanguage('x2For')}
                            </Button>
                            <Button className={styles.advertButton}>
                                <Img
                                    src={Icons.advertWhite}
                                    className={styles.advertImage}
                                    onClick={() => {
                                        handleRewardedAdvert();
                                    }}
                                />
                                {useLanguage('x2For')}
                            </Button>
                        </>
                    )}
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
                        onClick={handleUpgradeCoinsPerSecond}
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
                <div className={styles.statsContainer}>
                    <Button className={styles.statsContent} viewDisabled>
                        <div className={styles.statsBlock}>
                            <Img
                                className={styles.statsImg}
                                src={Icons.scaleClickWhite}
                            />
                            <span className={styles.statsTitle}>
                                {useLanguage('click')}:
                            </span>
                            <span className={styles.statsValue}>
                                {shortNumber(
                                    getCoinsClickWithBonus(
                                        coinsPerClick,
                                        activeCharacter.damageBonus,
                                        true,
                                    ) +
                                        getCoinsClickWithBonus(
                                            coinsPerClick,
                                            activeBackground.damageBonus,
                                        ),
                                )}
                            </span>
                        </div>
                        <div className={styles.statsBlock}>
                            <Img
                                className={styles.statsImg}
                                src={Icons.timeWhite}
                            />
                            <span className={styles.statsTitle}>
                                {useLanguage('moneyPerSecond')}:
                            </span>
                            <span className={styles.statsValue}>
                                {shortNumber(perSecondCalc())}
                            </span>
                        </div>
                        <div className={styles.statsBlock}>
                            <Img
                                className={styles.statsImg}
                                src={Icons.luckyWhite}
                            />
                            <span className={styles.statsTitle}>
                                {useLanguage('changeX5')}:
                            </span>
                            <span className={styles.statsValue}>
                                {shortNumber(
                                    activeCharacter.luckyBonusX5 * 100,
                                )}
                                %
                            </span>
                        </div>
                    </Button>
                </div>
            </Wrapper>
        </Init>
    );
}

export default App;
