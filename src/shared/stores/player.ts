import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
interface PlayerState {
    language: number;
    setLanguage: (language: number) => void;

    balance: number;
    setBalance: (balance: number) => void;

    click: () => void;
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

    click: () => set({ balance: get().balance + 1 }),
});

// export const usePlayerStore

export const usePlayerStore = create<PlayerState>()(
    devtools((...args) => ({ ...createPlayerSlice(...args) }), {
        name: 'player',
    }),
);
