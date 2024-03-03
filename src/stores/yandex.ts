import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { YandexGames } from 'CreexTeamYaSDK';

interface YandexState {
    ysdk: YandexGames.sdk | null;
    setYsdk: (value: YandexGames.sdk) => void;
    setDataYsdk: (value: [string, string]) => void;
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
    setDataYsdk: (value) => {
        const ysdk = get().ysdk;
        if (!ysdk) return;

        ysdk.getPlayer().then((player) => {
            player.setData(value);
        });
    },
});
export const useYandexStore = create<YandexState>()(
    devtools((...args) => ({ ...createYandexSlice(...args) }), {
        name: 'Yandex',
    }),
);
