import { useEffect } from 'react';
import InitSettings from '@settings/_init';
import InitDataMock from '@settings/initDataMock.json';
import { IProps } from './props';
import {
    IYandexData,
    usePlayerStore,
    useShopStore,
    useSoundController,
    useYandexStore,
} from '@/stores';
import { YandexGames } from 'CreexTeamYaSDK';
import { BackgroundType, CharacterType } from '@settings/index';

// ? Типизация Yandex SDK
declare global {
    interface Window {
        ysdk: YandexGames.sdk;
    }
}

export const InitData = ({ children, setIsLoading, isLoading }: IProps) => {
    const { initPlayerData, startCoinsPerSecond } = usePlayerStore();
    const { initShopData, characters, backgrounds } = useShopStore();
    const { initSoundData, startSounds } = useSoundController();

    const { setYsdk, ysdk, getDataFromYsdk } = useYandexStore();

    const getMyBackgrounds = (myBackgroundsId: number[]): BackgroundType[] => {
        return backgrounds.filter((background) =>
            myBackgroundsId.includes(background.id),
        );
    };
    const getMyCharacters = (myCharactersId: number[]): CharacterType[] => {
        return characters.filter((character) =>
            myCharactersId.includes(character.id),
        );
    };

    const getActiveCharacter = (activeCharacterId: number): CharacterType => {
        return characters.find(
            (c) => c.id === activeCharacterId,
        ) as CharacterType;
    };
    const getActiveBackground = (
        activeBackgroundId: number,
    ): BackgroundType => {
        return backgrounds.find(
            (b) => b.id === activeBackgroundId,
        ) as BackgroundType;
    };

    const InitMockData = () => {
        initSoundData(InitDataMock.soundVolume, InitDataMock.musicVolume);

        initPlayerData(
            InitDataMock.balance,
            InitDataMock.language,
            InitDataMock.coinsPerClick,
            InitDataMock.priceCoinsPerClick,
            InitDataMock.coinsPerSecond,
            InitDataMock.priceCoinsPerSecond,
        );

        initShopData(
            getMyCharacters(InitDataMock.myCharacters),
            getActiveCharacter(InitDataMock.activeCharacter),
            getMyBackgrounds(InitDataMock.myBackgrounds),
            getActiveBackground(InitDataMock.activeBackground),
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
        );

        initShopData(
            getMyCharacters(data.myCharacters),
            getActiveCharacter(data.activeCharacter),
            getMyBackgrounds(data.myBackgrounds),
            getActiveBackground(data.activeBackground),
        );
    };

    const startProcesses = () => {
        document
            .getElementById('root')
            ?.addEventListener('click', startSounds, { once: true });

        startCoinsPerSecond();
    };

    const isLocalhost = location.hostname === 'localhost';

    useEffect(() => {
        console.log(isLoading);
    }, [isLoading]);

    const InitGameData = async () => {
        setIsLoading(true);

        InitSettings();

        if (isLocalhost) {
            console.log('localhost init');
            if (InitDataMock.ready) {
                InitMockData();

                console.log('mock init');
            }
        } else {
            if (ysdk) {
                const data = await getDataFromYsdk();
                if (data) {
                    InitUserData(data);
                } else {
                    console.log('zero data blayt', data);
                }
            }
        }

        setIsLoading(false);

        startProcesses();
    };

    useEffect(() => {
        if (isLocalhost) {
            InitGameData();
            return;
        }

        YaGames.init()
            .then((ysdk: YandexGames.sdk) => {
                window.ysdk = ysdk;
                return ysdk;
            })
            .then((ysdk) => {
                setYsdk(ysdk);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [window.ysdk]);

    useEffect(() => {
        if (!ysdk) {
            return;
        }

        // ? Init
        InitGameData();
    }, [ysdk]);

    if (isLoading) {
        return <>Загрузка</>;
    }

    return <>{children}</>;
};
