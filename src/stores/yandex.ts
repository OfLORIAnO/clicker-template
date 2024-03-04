import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { YandexGames } from 'CreexTeamYaSDK';
import { usePlayerStore, useShopStore, useSoundController } from '.';

export interface IYandexData {
    // ? Sounds
    soundVolume: number;
    musicVolume: number;
    // ? Player
    balance: number;
    language: number;
    coinsPerClick: number;
    priceCoinsPerClick: number;
    coinsPerSecond: number;
    priceCoinsPerSecond: number;
    // ? Shop
    activeCharacter: number;
    activeBackground: number;
    myCharacters: number[];
    myBackgrounds: number[];
    isParticlesOn: boolean;
}

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
