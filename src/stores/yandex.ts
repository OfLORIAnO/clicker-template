import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface YandexState {
    ysdk: object;
    setYsdk: (value: object) => void;
}

const createYandexSlice: StateCreator<
    YandexState,
    [['zustand/devtools', never]],
    [],
    YandexState
> = (set) => ({
    ysdk: {},
    setYsdk: (value: object) => {
        console.log('Добавили', value);
        set({ ysdk: value });
    },
});
export const useYandexStore = create<YandexState>()(
    devtools((...args) => ({ ...createYandexSlice(...args) }), {
        name: 'Yandex',
    }),
);
