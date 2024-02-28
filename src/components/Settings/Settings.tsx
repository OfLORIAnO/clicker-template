import { Icons, Img, Popup, SoundController } from '@/shared/ui';
import { SettingsProps } from './props';
import styles from './Settings.module.scss';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { useState } from 'react';

export const Settings = ({
    isSettingsOpen,
    setIsSettingsOpen,
}: SettingsProps) => {
    const [soundValue, setSoundValue] = useState<number>(50);
    const [musicValue, setMusicValue] = useState<number>(50);

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
                            setSoundValue={setSoundValue}
                            soundValue={soundValue}
                        />
                        <SoundController
                            icon={Icons.musicBlack}
                            setSoundValue={setMusicValue}
                            soundValue={musicValue}
                        />
                    </div>
                </div>
            </div>
        </Popup>
    );
};
