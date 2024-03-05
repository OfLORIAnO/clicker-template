import { useYandexStore } from '@/stores';
import styles from './Advert.module.scss';
import { Button, Popup } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/shared/hooks';
import { isLocalhost } from '@/shared/helper';

export const Advert = () => {
    const {
        isAvailableFullScreenAdvert,
        setIsAvailableFullScreenAdvert,
        showFullScreenAdvert,
        ysdk,
    } = useYandexStore();

    const [isAvailable, setIsAvailable] = useState<boolean>(true);

    useEffect(() => {
        if (!ysdk || !isAvailableFullScreenAdvert || !isAvailable) return;

        const timeSec = 60;

        setIsAvailableFullScreenAdvert(false, 0);
        showFullScreenAdvert(timeSec);
        setIsAvailable(false);
    }, [isAvailableFullScreenAdvert, ysdk, isAvailable]);

    useEffect(() => {
        if (!isAvailableFullScreenAdvert || isAvailable) return;

        const timeSec = 3;
        const timeout = setTimeout(() => {
            setIsAvailable(true);
        }, timeSec * 1000);

        return () => clearTimeout(timeout);
    }, [isAvailableFullScreenAdvert]);

    return (
        <Popup isOpened={isAvailableFullScreenAdvert && !isLocalhost}>
            <Button viewDisabled className={styles.styles}>
                {useLanguage('fullScreenAdvert')}...
            </Button>
        </Popup>
    );
};
