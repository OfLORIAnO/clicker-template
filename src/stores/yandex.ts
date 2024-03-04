import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { YandexGames } from 'CreexTeamYaSDK';
import { useShopStore, useSoundController } from '.';

interface YandexState {
    ysdk: YandexGames.sdk | null;
    setYsdk: (value: YandexGames.sdk) => void;
    setDataYsdk: (
        data: Partial<YandexGames.Player['setData']>,
    ) => Promise<void>;
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

        const [soundVolume] = [
            useSoundController.getState().getStateDataForYandex(),
        ];
        const [activeCharacter, activeBackground, myCharacters, myBackgrounds] =
            useShopStore.getState().getStateDataForYandex();

        const data = {
            soundVolume,
            // musicVolume,
            activeCharacter,
            activeBackground,
            myCharacters,
            myBackgrounds,
        };

        await ysdk.getPlayer().then((player) => {
            player.setData(data, true);
        });
    },
});
export const useYandexStore = create<YandexState>()(
    devtools((...args) => ({ ...createYandexSlice(...args) }), {
        name: 'Yandex',
    }),
);
