import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
interface PlayerState {
    language: number;
    setLanguage: (language: number) => void;

    balance: number;
    setBalance: (balance: number) => void;

    click: (damage: number) => void;
}

const createPlayerSlice: StateCreator<
    PlayerState,
    [['zustand/devtools', never]],
    [],
    PlayerState
> = (set, get) => ({
    language: 0,
    setLanguage: (language: number) => {
        set({ language });
    },

    balance: 0,
    setBalance: (balance: number) => {
        set({ balance });
    },

    click: (damage: number) => {
        set({ balance: get().balance + damage }, false, 'setBalanceByClick');
    },
});

// export const usePlayerStore

export const usePlayerStore = create<PlayerState>()(
    devtools((...args) => ({ ...createPlayerSlice(...args) }), {
        name: 'player',
    }),
);
