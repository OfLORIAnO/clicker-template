import { Icons, Img, Popup, SoundController } from '@/shared/ui';
import { SettingsProps } from './props';
import styles from './Settings.module.scss';
import { useLanguage } from '@/shared/hooks/useLanguage';
import classNames from 'classnames';
import { usePlayerStore } from '@/shared/stores/player';
import { useSoundController } from '@/shared/stores/sound';

export const Settings = ({
    isSettingsOpen,
    setIsSettingsOpen,
}: SettingsProps) => {
    const { setLanguage } = usePlayerStore();

    const chooseLanguage = (value: number) => {
        setLanguage(value);
    };

    const { soundVolume, musicVolume, setSoundVolume, setMusicVolume } =
        useSoundController();

    return (
        <Popup close={() => setIsSettingsOpen(false)} isOpened={isSettingsOpen}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h1>{useLanguage('settings')}</h1>
                    <Img src={Icons.shopBlack} />
                    <button onClick={() => setIsSettingsOpen(false)}>с</button>
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
                    <div className={styles.flagsContainer}>
                        <button
                            onClick={() => chooseLanguage(0)}
                            className={styles.flagButton}
                        >
                            <span className={styles.flagName}>Русский</span>
                            <span
                                className={classNames('fi-ru', styles.flag)}
                            />
                        </button>
                        <button
                            onClick={() => chooseLanguage(1)}
                            className={styles.flagButton}
                        >
                            <span className={styles.flagName}>English</span>
                            <span
                                className={classNames('fi-us', styles.flag)}
                            />
                        </button>
                        <button
                            onClick={() => chooseLanguage(2)}
                            className={styles.flagButton}
                        >
                            <span className={styles.flagName}>Türk dili</span>
                            <span
                                className={classNames('fi-tr', styles.flag)}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </Popup>
    );
};
