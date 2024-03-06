import { delaySeconds } from '@/shared/helper';
import { Button, Icons, Img } from '@/shared/ui';
import { usePlayerStore, useYandexStore } from '@/stores';

import styles from './AdvertRewarded.module.scss';
import { useLanguage } from '@/shared/hooks';

const doublePerSecondTime = 60;

export const XAdvertPerSecond = () => {
    const { setIsDoubledPerSecond, resetCoinsPerClick, startCoinsPerSecond } =
        usePlayerStore();
    const { isAvailableRewardedAdvert, showRewardedVideo } = useYandexStore();

    const doublePerSecond = () => {
        showRewardedVideo(doublePerSecondTime, async () => {
            setIsDoubledPerSecond(true);
            resetCoinsPerClick();
            startCoinsPerSecond();

            await delaySeconds(doublePerSecondTime);

            setIsDoubledPerSecond(false);
            resetCoinsPerClick();
            startCoinsPerSecond();
        });
    };

    const buttonText = useLanguage('x2ForClick');

    if (!isAvailableRewardedAdvert) return null;

    return (
        <Button className={styles.advertButton} onClick={doublePerSecond}>
            <Img
                src={Icons.advertWhite}
                className={styles.advertImage}
                
            />
            {buttonText}
        </Button>
    );
};
