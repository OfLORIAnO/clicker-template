import {
    Button,
    Checkbox,
    Icons,
    Img,
    Popup,
    SoundController,
} from '@/shared/ui';
import { SettingsProps } from './props';
import styles from './Settings.module.scss';
import classNames from 'classnames';
import {
    usePlayerStore,
    useShopStore,
    useSoundController,
    useYandexStore,
} from '@/stores';
import { useLanguage } from '@/shared/hooks';
import { PlayerDataInit, ShopDataInit } from '@settings/index';
import {
    getActiveBackground,
    getActiveCharacter,
    getMyBackgrounds,
    getMyCharacters,
    isLocalhost,
} from '@/shared/helper';

export const Settings = ({
    isSettingsOpen,
    setIsSettingsOpen,
}: SettingsProps) => {
    const { setLanguage, setIsParticlesOn, isParticlesOn, initPlayerData } =
        usePlayerStore();
    const { initShopData } = useShopStore();
    const { setDataYsdk } = useYandexStore();

    const chooseLanguage = (value: number) => {
        setLanguage(value);
    };

    const { soundVolume, musicVolume, setSoundVolume, setMusicVolume } =
        useSoundController();

    const resetAllData = () => {
        initShopData(
            getMyCharacters(ShopDataInit.myCharacters),
            getActiveCharacter(ShopDataInit.activeCharacter),
            getMyBackgrounds(ShopDataInit.myBackgrounds),
            getActiveBackground(ShopDataInit.activeBackground),
        );

        initPlayerData(
            PlayerDataInit.balance,
            PlayerDataInit.language,
            PlayerDataInit.coinsPerClick,
            PlayerDataInit.priceCoinsPerClick,
            PlayerDataInit.coinsPerSecond,
            PlayerDataInit.priceCoinsPerSecond,
            PlayerDataInit.isParticlesOn,
        );
        if (!isLocalhost) {
            setDataYsdk();
        }
    };

    return (
        <Popup
            close={() => setIsSettingsOpen(false)}
            isOpened={isSettingsOpen}
            classNameContent={styles.popup}
        >
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h1>{useLanguage('settings')}</h1>
                    <Img src={Icons.shopBlack} />
                    <button onClick={() => setIsSettingsOpen(false)}>x</button>
                </div>
                <div className={styles.content}>
                    <div className={styles.sound}>
                        <SoundController
                            icon={Icons.soundBlack}
                            setSoundValue={setSoundVolume}
                            soundValue={soundVolume}
                        />
                        <SoundController
                            icon={Icons.musicBlack}
                            setSoundValue={setMusicVolume}
                            soundValue={musicVolume}
                        />
                    </div>
                    <div className={styles.settingsContainer}>
                        <div className={styles.flags}>
                            <h2>{useLanguage('language')}</h2>
                            <div className={styles.flagsContainer}>
                                <button
                                    onClick={() => chooseLanguage(0)}
                                    className={styles.flagButton}
                                >
                                    <span className={styles.flagName}>
                                        Русский
                                    </span>
                                    <span
                                        className={classNames(
                                            styles.russian,
                                            styles.flagIcon,
                                        )}
                                    />
                                </button>
                                <button
                                    onClick={() => chooseLanguage(1)}
                                    className={styles.flagButton}
                                >
                                    <span className={styles.flagName}>
                                        English
                                    </span>
                                    <span
                                        className={classNames(
                                            styles.english,
                                            styles.flagIcon,
                                        )}
                                    />
                                </button>
                                <button
                                    onClick={() => chooseLanguage(2)}
                                    className={styles.flagButton}
                                >
                                    <span className={styles.flagName}>
                                        Türkçe
                                    </span>
                                    <span
                                        className={classNames(
                                            styles.turkish,
                                            styles.flagIcon,
                                        )}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className={styles.otherSettings}>
                            <h2>{useLanguage('otherSettings')}</h2>
                            <div className={styles.settings}>
                                <Checkbox
                                    isOn={isParticlesOn}
                                    setIsOn={setIsParticlesOn}
                                />
                            </div>
                            <Button
                                className={styles.resetProgress}
                                onClick={resetAllData}
                            >
                                {useLanguage('resetProgress')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
    );
};
