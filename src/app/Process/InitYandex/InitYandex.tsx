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

    useEffect(() => {
        if (!ysdk) return;

        // ? Player
        ysdk.getPlayer({ signed: false }).then((player) => {
            if (player.getMode() !== 'lite') {
                console.log(
                    player.getData(['language']).then((data) => {
                        console.log(data.language);
                    }),
                );
            }
        });
    }, [ysdk]);

    return <>{children}</>;
};
