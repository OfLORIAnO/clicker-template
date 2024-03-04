import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import {
    clickCalc,
    perSecondCalc,
    upgradeCoinsPerClickCalc,
    upgradeCoinsPerSecondCalc,
} from '../shared/helper/index';
import { useShopStore } from './shop';
import { useYandexStore } from '.';
interface PlayerState {
    isParticlesOn: boolean;
    setIsParticlesOn: (isParticlesOn: boolean) => void;

    language: number;
    setLanguage: (language: number) => Promise<void>;

    balance: number;
    setBalance: (balance: number) => Promise<void>;

    coinsPerClick: number;
    priceCoinsPerClick: number;
    setCoinsPerClick: (
        coinsPerClick: number,
        priceCoinsPerClick: number,
    ) => Promise<void>;
    upgradeCoinsPerClick: () => void;

    coinsPerSecond: number;
    priceCoinsPerSecond: number;
    constPerSecInterval: {
        interval: number | null;
    };
    setCoinsPerSecond: (
        coinsPerSecond: number,
        priceCoinsPerSecond: number,
    ) => Promise<void>;
    startCoinsPerSecond: () => void;
    startIntervalSecond: () => void;
    resetCoinsPerClick: () => void;
    upgradeCoinsPerSecond: () => void;

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
    isParticlesOn: false,
    setIsParticlesOn: async (isParticlesOn: boolean) => {
        set({ isParticlesOn });

        const setDataYsdk = useYandexStore.getState().setDataYsdk;
        await setDataYsdk({ balance: isParticlesOn });
    },

    language: 0,
    setLanguage: async (language: number) => {
        set({ language });

        const setDataYsdk = useYandexStore.getState().setDataYsdk;
        await setDataYsdk({ language: language });
    },

    balance: 0,
    setBalance: async (balance: number) => {
        set({ balance });

        const setDataYsdk = useYandexStore.getState().setDataYsdk;
        await setDataYsdk({ balance: balance });
    },

    coinsPerClick: 1,
    priceCoinsPerClick: 20,
    setCoinsPerClick: async (
        coinsPerClick: number,
        priceCoinsPerClick: number,
    ) => {
        set({
            coinsPerClick,
            priceCoinsPerClick,
        });

        const setDataYsdk = useYandexStore.getState().setDataYsdk;
        await setDataYsdk({
            coinsPerClick: coinsPerClick,
            priceCoinsPerClick: priceCoinsPerClick,
        });
    },

    upgradeCoinsPerClick: () => {
        const currentCoinsPerClick = get().coinsPerClick;
        const setCoinsPerClick = get().setCoinsPerClick;
        const [newPrice, newCoinsPerClick] =
            upgradeCoinsPerClickCalc(currentCoinsPerClick);

        setCoinsPerClick(newCoinsPerClick, newPrice);
    },
    resetCoinsPerClick: () => {
        const data = get().constPerSecInterval;
        data.interval && clearInterval(data.interval);
    },

    coinsPerSecond: 1,
    priceCoinsPerSecond: 1,
    constPerSecInterval: {
        interval: null,
    },
    setCoinsPerSecond: async (
        coinsPerSecond: number,
        priceCoinsPerSecond: number,
    ) => {
        set({
            coinsPerSecond,
            priceCoinsPerSecond,
        });

        const setDataYsdk = useYandexStore.getState().setDataYsdk;
        await setDataYsdk({
            coinsPerSecond: coinsPerSecond,
            priceCoinsPerSecond: priceCoinsPerSecond,
        });
    },
    startCoinsPerSecond: () => {
        const startIntervalSecond = get().startIntervalSecond;
        set({
            constPerSecInterval: {
                interval: setInterval(startIntervalSecond, 1000),
            },
        });
    },

    startIntervalSecond: () => {
        const setBalance = get().setBalance;
        const getActiveCharacter = useShopStore.getState().activeCharacter;

        setBalance(
            get().balance +
                perSecondCalc(
                    getActiveCharacter.coinsPerSecondBonus,
                    get().coinsPerSecond,
                ),
        );
    },
    upgradeCoinsPerSecond: () => {
        // TODO сохранять данные

        const coinsPerSecond = get().coinsPerSecond;
        const resetCoinsPerClick = get().resetCoinsPerClick;
        const setCoinsPerSecond = get().setCoinsPerSecond;
        const startCoinsPerSecond = get().startCoinsPerSecond;

        const [newPrice, newCoinsPerSecond] =
            upgradeCoinsPerSecondCalc(coinsPerSecond);

        resetCoinsPerClick();
        setCoinsPerSecond(newCoinsPerSecond, newPrice);

        startCoinsPerSecond();
    },

    click: (damageBonus: number, luckyBonus: number, coinsPerClick: number) => {
        // TODO сохранять данные

        const [clickCoins, _] = clickCalc(
            damageBonus,
            luckyBonus,
            coinsPerClick,
        );

        const setBalance = get().setBalance;
        setBalance(get().balance + clickCoins);
    },
});

// export const usePlayerStore

export const usePlayerStore = create<PlayerState>()(
    devtools((...args) => ({ ...createPlayerSlice(...args) }), {
        name: 'player',
    }),
);
