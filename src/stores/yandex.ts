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
});
export const useYandexStore = create<YandexState>()(
    devtools((...args) => ({ ...createYandexSlice(...args) }), {
        name: 'Yandex',
    }),
);
