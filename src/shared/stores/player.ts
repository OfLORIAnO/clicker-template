import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
interface PlayerState {
    language: number;
    balance: number;
    getLanguage: () => number;
}

const createPlayerSlice: StateCreator<
    PlayerState,
    [['zustand/devtools', never]],
    [],
    PlayerState
> = (set, get) => ({
    language: 0,
    getLanguage: () => get().language,
    balance: 0,
});

// export const usePlayerStore

export const usePlayerStore = create<PlayerState>()(
    devtools((...args) => ({ ...createPlayerSlice(...args) }), {
        name: 'player',
    }),
);
