import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { clickCalc, upgradeCoinsPerClickCalc } from '../helper/index';
interface PlayerState {
    language: number;
    setLanguage: (language: number) => void;

    balance: number;
    setBalance: (balance: number) => void;

    coinsPerClick: number;
    priceCoinsPerClick: number;
    setCoinsPerClick: () => void;
    upgradeCoinsPerClick: () => void;

    coinsPerSecond: number;
    setCoinsPerSecond: () => void;

    click: (
        damageBonus: number,
        luckyBonus: number,
        coinsPerClick: number,
    ) => void;
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

    coinsPerClick: 1,
    priceCoinsPerClick: 20,
    setCoinsPerClick: () => {},
    upgradeCoinsPerClick: () => {
        const currentCoinsPerClick = get().coinsPerClick;

        const [newPrice, newCoinsPerClick] =
            upgradeCoinsPerClickCalc(currentCoinsPerClick);
        set({
            priceCoinsPerClick: newPrice,
        });
        set({
            coinsPerClick: newCoinsPerClick,
        });
    },

    coinsPerSecond: 1,
    setCoinsPerSecond: () => {},

    click: (damageBonus: number, luckyBonus: number, coinsPerClick: number) => {
        const [clickCoins, isBonuced] = clickCalc(
            damageBonus,
            luckyBonus,
            coinsPerClick,
        );
        set(
            {
                balance: get().balance + clickCoins,
            },
            false,
            'setBalanceByClick',
        );
    },
});

// export const usePlayerStore

export const usePlayerStore = create<PlayerState>()(
    devtools((...args) => ({ ...createPlayerSlice(...args) }), {
        name: 'player',
    }),
);
