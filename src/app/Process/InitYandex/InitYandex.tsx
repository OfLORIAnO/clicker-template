import { useYandexStore } from '@/stores/yandex';
import { useEffect } from 'react';

// ? Типизация Yandex SDK
declare global {
    interface Window {
        ysdk: any;
    }
}

export const InitYandex = ({ children }: { children: React.ReactNode }) => {
    const { setYsdk } = useYandexStore();

    useEffect(() => {
        // ? Yandex SDK
        const ysdk = window.ysdk;

        setYsdk(ysdk);
    }, [window.ysdk]);

    return <>{children}</>;
};
