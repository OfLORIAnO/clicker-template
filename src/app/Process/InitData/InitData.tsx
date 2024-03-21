import { useEffect } from 'react';
import InitSettings from '@settings/_init';
import InitDevData from '@settings/InitDevData.json';
import { IProps } from './props';
import {
    IYandexData,
    usePlayerStore,
    useShopStore,
    useSoundController,
    useYandexStore,
} from '@/stores';
import { YandexGames } from 'CreexTeamYaSDK';
import {
    getMyCharacters,
    getActiveCharacter,
    getMyBackgrounds,
    getActiveBackground,
    isLocalhost,
} from '@/shared/helper';
import { Loading } from '@/components';
// ? Типизация Yandex SDK
declare global {
    interface Window {
        ysdk: YandexGames.sdk;
    }
}

export const InitData = ({ children, setIsLoading, isLoading }: IProps) => {
    const { initPlayerData, startCoinsPerSecond } = usePlayerStore();
    const { initShopData } = useShopStore();
    const { initSoundData, startSounds, setSoundOnVisibility } =
        useSoundController();
    const { setYsdk, ysdk, getDataFromYsdk } = useYandexStore();

    useEffect(() => {
        if (isLocalhost) {
            InitGameData();
            return;
        }
        const YaOptions = {
            screen: {
                fullscreen: true,
                orientation: {
                    value: 'landscape',
                    lock: true,
                },
            },
        };
        YaGames.init(YaOptions)
            .then((ysdk: YandexGames.sdk) => {
                window.ysdk = ysdk;
                return ysdk;
            })
            .then((ysdk) => {
                setYsdk(ysdk);
            });
    }, [window.ysdk]);

    useEffect(() => {
        if (!ysdk) {
            return;
        }

        InitGameData();
    }, [ysdk]);

    const InitMockData = () => {
        initSoundData(InitDevData.soundVolume, InitDevData.musicVolume);

        initPlayerData(
            InitDevData.balance,
            InitDevData.language,
            InitDevData.coinsPerClick,
            InitDevData.priceCoinsPerClick,
            InitDevData.coinsPerSecond,
            InitDevData.priceCoinsPerSecond,
            InitDevData.isParticlesOn,
        );

        initShopData(
            getMyCharacters(InitDevData.myCharacters),
            getActiveCharacter(InitDevData.activeCharacter),
            getMyBackgrounds(InitDevData.myBackgrounds),
            getActiveBackground(InitDevData.activeBackground),
        );
    };

    const InitUserData = (data: IYandexData) => {
        initSoundData(data.soundVolume, data.musicVolume);

        initPlayerData(
            data.balance,
            data.language,
            data.coinsPerClick,
            data.priceCoinsPerClick,
            data.coinsPerSecond,
            data.priceCoinsPerSecond,
            data.isParticlesOn,
        );

        initShopData(
            getMyCharacters(data.myCharacters),
            getActiveCharacter(data.activeCharacter),
            getMyBackgrounds(data.myBackgrounds),
            getActiveBackground(data.activeBackground),
        );
    };

    const initEndPoint = () => {
        const root = document.getElementById('root');
        if (root) {
            root.addEventListener('click', startSounds, { once: true });

            root.addEventListener(
                'click',
                () => {
                    document.addEventListener(
                        'visibilitychange',
                        setSoundOnVisibility,
                    );
                },
                { once: true },
            );
        }

        startCoinsPerSecond();
    };

    const InitGameData = async () => {
        setIsLoading(true);

        InitSettings();

        if (isLocalhost) {
            // if (false) {
            console.log('local init');
            if (InitDevData.ready) {
                InitMockData();

                console.log('mock init');
            }
        } else {
            if (ysdk) {
                const data = await getDataFromYsdk();
                if (data) {
                    InitUserData(data);
                }
            }
        }

        setIsLoading(false);

        initEndPoint();
    };

    if (isLoading) {
        return <Loading />;
    }

    return <>{children}</>;
};
