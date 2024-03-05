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
    showRewardedVideo: (timeSec: number, onClose?: () => void) => void;
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

        const data: IYandexData | null =
            (await ysdk.getPlayer({ signed: false }).then((player) => {
                return player.getData<IYandexData>();
            })) ?? null;

        return data;
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
        const turnOnMusic = useSoundController.getState().turnOnMusic;

        ysdk.adv.showFullscreenAdv({
            callbacks: {
                onOpen: () => {
                    pauseAllSounds();
                },
                onClose: () => {
                    turnOnMusic();
                    get().setIsAvailableFullScreenAdvert(true, timeSec);
                    onClose && onClose();
                    console.log('Закрыли рекламу');
                },
                onError: () => {
                    turnOnMusic();
                    get().setIsAvailableFullScreenAdvert(true, timeSec);
                    onClose && onClose();
                },
                onOffline: () => {
                    turnOnMusic();
                    onClose && onClose();
                },
            },
        });
        // get().setIsAvailableFullScreenAdvert(true, timeSec);
    },

    isAvailableRewardedAdvert: true,
    setIsAvailableRewardedAdvert: (stateAdvert: boolean, timeSec: number) => {
        setTimeout(() => {
            set({ isAvailableRewardedAdvert: stateAdvert });
        }, timeSec * 1000);

        console.log(
            'Rewarded реклама станет доступна через',
            timeSec,
            'секунд',
        );
    },
    showRewardedVideo: (timeSec: number, onClose?: () => void) => {
        const ysdk = get().ysdk;
        if (!ysdk) return null;

        const pauseAllSounds = useSoundController.getState().pauseAllSounds;
        const turnOnMusic = useSoundController.getState().turnOnMusic;

        ysdk.adv.showRewardedVideo({
            callbacks: {
                onOpen: () => {
                    pauseAllSounds();
                },
                onRewarded: () => {
                    turnOnMusic();
                },
                onClose: () => {
                    turnOnMusic();
                    get().setIsAvailableRewardedAdvert(true, timeSec);
                    onClose && onClose();
                },
                onError: () => {
                    turnOnMusic();
                    get().setIsAvailableRewardedAdvert(true, timeSec);
                    onClose && onClose();
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
