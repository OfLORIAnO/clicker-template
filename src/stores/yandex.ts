import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { YandexGames } from 'CreexTeamYaSDK';
import { usePlayerStore, useShopStore, useSoundController } from '.';

export interface ISoundState {
    soundVolume: number;
    musicVolume: number;
}
export interface IPlayerState {
    balance: number;
    language: number;
    coinsPerClick: number;
    priceCoinsPerClick: number;
    coinsPerSecond: number;
    priceCoinsPerSecond: number;
}
export interface IShopState {
    activeCharacter: number;
    activeBackground: number;
    myCharacters: number[];
    myBackgrounds: number[];
    isParticlesOn: boolean;
}

export interface IYandexData extends ISoundState, IPlayerState, IShopState {}

interface YandexState {
    ysdk: YandexGames.sdk | null;
    setYsdk: (value: YandexGames.sdk) => void;

    setDataYsdk: () => Promise<void>;
    getDataFromYsdk: () => Promise<IYandexData | null>;

    isAvailableFullScreenAdvert: boolean;
    setIsAvailableFullScreenAdvert: (
        stateAdvert: boolean,
        timeSec: number,
    ) => void;
    showFullScreenAdvert: (timeSec: number, onClose?: () => void) => void;

    isAvailableRewardedAdvert: boolean;
    setIsAvailableRewardedAdvert: (
        stateAdvert: boolean,
        timeSec: number,
    ) => void;
    showRewardedVideo: (timeSec: number, onCloseFunc: () => void) => void;
}

const createYandexSlice: StateCreator<
    YandexState,
    [['zustand/devtools', never]],
    [],
    YandexState
> = (set, get) => ({
    ysdk: null,
    setYsdk: (value) => {
        set({ ysdk: value });
    },

    setDataYsdk: async () => {
        const ysdk = get().ysdk;
        if (!ysdk) return;

        const data: IYandexData = {
            ...useSoundController.getState().getStateDataForYsdk(),
            ...usePlayerStore.getState().getStateDataForYsdk(),
            ...useShopStore.getState().getStateDataForYsdk(),
        };

        await ysdk.getPlayer().then((player) => {
            player.setData<IYandexData>(data, true);
        });
    },
    getDataFromYsdk: async () => {
        const ysdk = get().ysdk;
        if (!ysdk) return null;

        const data: IYandexData | undefined = await ysdk
            .getPlayer({ signed: false })
            .then((player) => {
                if (player.getMode() !== 'lite') {
                    return player.getData<IYandexData>();
                }
            });

        return data ? data : null;
    },

    isAvailableFullScreenAdvert: true,
    setIsAvailableFullScreenAdvert: (stateAdvert: boolean, timeSec: number) => {
        console.log(
            'Полноэкранная реклама станет доступна через',
            timeSec,
            'секунд',
        );
        setTimeout(() => {
            set({ isAvailableFullScreenAdvert: stateAdvert });
        }, timeSec * 1000);
    },
    showFullScreenAdvert: (timeSec: number, onClose?: () => void) => {
        const ysdk = get().ysdk;
        if (!ysdk) return null;

        const pauseAllSounds = useSoundController.getState().pauseAllSounds;
        const startSounds = useSoundController.getState().startSounds;

        ysdk.adv.showFullscreenAdv({
            callbacks: {
                onOpen: () => {
                    pauseAllSounds();
                },
                onClose: () => {
                    startSounds();
                    get().setIsAvailableFullScreenAdvert(true, timeSec);
                    onClose && onClose();
                    console.log('Закрыли рекламу');
                },
                onError: () => {
                    startSounds();
                    get().setIsAvailableFullScreenAdvert(true, timeSec);
                    onClose && onClose();
                },
                onOffline: () => {
                    startSounds();
                    onClose && onClose();
                },
            },
        });
    },

    isAvailableRewardedAdvert: true,
    setIsAvailableRewardedAdvert: (stateAdvert: boolean, timeSec: number) => {
        if (timeSec === 0) {
            set({ isAvailableRewardedAdvert: stateAdvert });
            return;
        }

        setTimeout(() => {
            set({ isAvailableRewardedAdvert: stateAdvert });
        }, timeSec * 1000);

        console.log(
            'isAvailableRewardedAdvert:',
            stateAdvert,
            '\nчерез',
            timeSec,
            'секунд',
        );
    },
    showRewardedVideo: (timeSec: number, onCloseFunc: () => void) => {
        const ysdk = get().ysdk;
        if (!ysdk) return null;

        const pauseAllSounds = useSoundController.getState().pauseAllSounds;
        const turnOnMusic = useSoundController.getState().turnOnMusic;

        get().setIsAvailableRewardedAdvert(false, 0);

        ysdk.adv.showRewardedVideo({
            callbacks: {
                onOpen: () => {
                    pauseAllSounds();
                },
                onRewarded: () => {
                    get().setIsAvailableRewardedAdvert(true, timeSec);
                    onCloseFunc();
                },
                onClose: () => {
                    turnOnMusic();

                    // get().setIsAvailableRewardedAdvert(true, timeSec);

                    onCloseFunc();
                },
                onError: () => {
                    turnOnMusic();

                    // get().setIsAvailableRewardedAdvert(true, timeSec);

                    onCloseFunc();
                },
            },
        });
    },
});
export const useYandexStore = create<YandexState>()(
    devtools((...args) => ({ ...createYandexSlice(...args) }), {
        name: 'Yandex',
    }),
);
