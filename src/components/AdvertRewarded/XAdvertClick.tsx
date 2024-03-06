import { delaySeconds } from '@/shared/helper';
import { Button, Icons, Img } from '@/shared/ui';
import { usePlayerStore, useYandexStore } from '@/stores';

import styles from './AdvertRewarded.module.scss';
import { useLanguage } from '@/shared/hooks';

const doublePerSecondTime = 60;
export const XAdvertClick = () => {
    const { isAvailableRewardedAdvert, showRewardedVideo } = useYandexStore();
    const { setIsDoubledClick } = usePlayerStore();

    const doubleClick = () => {
        showRewardedVideo(doublePerSecondTime, async () => {
            setIsDoubledClick(true);
            await delaySeconds(doublePerSecondTime);
            setIsDoubledClick(false);
        });
    };
    const buttonText = useLanguage('x2ForSecond');

    if (!isAvailableRewardedAdvert) return null;

    return (
        <>
            <Button className={styles.advertButton} onClick={doubleClick}>
                <Img src={Icons.advertWhite} className={styles.advertImage} />
                {buttonText}
            </Button>
        </>
    );
};
