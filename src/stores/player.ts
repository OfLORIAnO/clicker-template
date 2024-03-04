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
    upgradeCoinsPerClick: () => Promise<void>;

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
    upgradeCoinsPerSecond: () => Promise<void>;

    click: (
        damageBonus: number,
        luckyBonus: number,
        coinsPerClick: number,
    ) => void;

    initPlayerData: (
        balance: number,
        language: number,
        coinsPerClick: number,
        priceCoinsPerClick: number,
        coinsPerSecond: number,
        priceCoinsPerSecond: number,
        isParticlesOn: boolean,
    ) => void;

    getStateDataForYsdk: () => {
        balance: number;
        language: number;
        coinsPerClick: number;
        priceCoinsPerClick: number;
        coinsPerSecond: number;
        priceCoinsPerSecond: number;
        isParticlesOn: boolean;
    };

    changeDataYsdk: () => Promise<void>;
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
        await get().changeDataYsdk();
    },

    language: 0,
    setLanguage: async (language: number) => {
        set({ language });
        await get().changeDataYsdk();
    },

    balance: 0,
    setBalance: async (balance: number) => {
        set({ balance });
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
    },

    upgradeCoinsPerClick: async () => {
        const currentCoinsPerClick = get().coinsPerClick;
        const setCoinsPerClick = get().setCoinsPerClick;
        const [newPrice, newCoinsPerClick] =
            upgradeCoinsPerClickCalc(currentCoinsPerClick);

        setCoinsPerClick(newCoinsPerClick, newPrice);
        await get().changeDataYsdk();
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
    upgradeCoinsPerSecond: async () => {
        const coinsPerSecond = get().coinsPerSecond;
        const resetCoinsPerClick = get().resetCoinsPerClick;
        const setCoinsPerSecond = get().setCoinsPerSecond;
        const startCoinsPerSecond = get().startCoinsPerSecond;

        const [newPrice, newCoinsPerSecond] =
            upgradeCoinsPerSecondCalc(coinsPerSecond);

        resetCoinsPerClick();
        setCoinsPerSecond(newCoinsPerSecond, newPrice);

        startCoinsPerSecond();

        await get().changeDataYsdk();
    },

    click: (damageBonus: number, luckyBonus: number, coinsPerClick: number) => {
        const [clickCoins, _] = clickCalc(
            damageBonus,
            luckyBonus,
            coinsPerClick,
        );

        const setBalance = get().setBalance;
        setBalance(get().balance + clickCoins);
    },

    initPlayerData: async (
        balance: number,
        language: number,
        coinsPerClick: number,
        priceCoinsPerClick: number,
        coinsPerSecond: number,
        priceCoinsPerSecond: number,
        isParticlesOn: boolean,
    ) => {
        set({
            balance,
            language,
            coinsPerClick,
            priceCoinsPerClick,
            coinsPerSecond,
            priceCoinsPerSecond,
            isParticlesOn,
        });
    },

    getStateDataForYsdk: () => {
        return {
            balance: get().balance,
            language: get().language,
            coinsPerClick: get().coinsPerClick,
            priceCoinsPerClick: get().priceCoinsPerClick,
            coinsPerSecond: get().coinsPerSecond,
            priceCoinsPerSecond: get().priceCoinsPerSecond,
            isParticlesOn: get().isParticlesOn,
        };
    },

    changeDataYsdk: async () => {
        await useYandexStore.getState().setDataYsdk();
    },
});

// export const usePlayerStore

export const usePlayerStore = create<PlayerState>()(
    devtools((...args) => ({ ...createPlayerSlice(...args) }), {
        name: 'player',
    }),
);
