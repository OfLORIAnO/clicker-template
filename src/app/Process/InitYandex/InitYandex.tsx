import { useYandexStore } from '@/stores/yandex';
import { useEffect } from 'react';
import { YandexGames } from 'CreexTeamYaSDK';
// ? Типизация Yandex SDK
declare global {
    interface Window {
        ysdk: YandexGames.sdk;
    }
}

export const InitYandex = ({ children }: { children: React.ReactNode }) => {
    const { setYsdk, ysdk } = useYandexStore();

    useEffect(() => {
        // ? Yandex SDK
        const ysdk: YandexGames.sdk = window.ysdk;

        setYsdk(ysdk);
    }, [window.ysdk]);

    const consolelogData = async () => {
        ysdk &&
            ysdk.getPlayer({ signed: false }).then((player) => {
                player
                    .getData()
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
    };

    useEffect(() => {
        if (!ysdk) return;

        // ? Player
        setInterval(consolelogData, 5000);
    }, [ysdk]);

    return <>{children}</>;
};
