import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import {
    clickCalc,
    perSecondCalc,
    upgradeCoinsPerClickCalc,
    upgradeCoinsPerSecondCalc,
} from '../shared/helper/index';
import { useYandexStore } from '.';
import { PlayerDataInit } from '@settings/index';

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

    click: () => void;

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
    isParticlesOn: PlayerDataInit.isParticlesOn,
    setIsParticlesOn: async (isParticlesOn: boolean) => {
        set({ isParticlesOn });
        await get().changeDataYsdk();
    },

    language: PlayerDataInit.language,
    setLanguage: async (language: number) => {
        set({ language });
        await get().changeDataYsdk();
    },

    balance: PlayerDataInit.balance,
    setBalance: async (balance: number) => {
        set({ balance });
    },

    coinsPerClick: PlayerDataInit.coinsPerClick,
    priceCoinsPerClick: PlayerDataInit.priceCoinsPerClick,
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
        const [newPrice, newCoinsPerClick] = upgradeCoinsPerClickCalc(
            get().coinsPerClick,
        );

        get().setCoinsPerClick(newCoinsPerClick, newPrice);
        await get().changeDataYsdk();
    },
    resetCoinsPerClick: () => {
        const data = get().constPerSecInterval;
        data.interval && clearInterval(data.interval);
    },

    coinsPerSecond: PlayerDataInit.coinsPerSecond,
    priceCoinsPerSecond: PlayerDataInit.priceCoinsPerSecond,
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

        setBalance(get().balance + perSecondCalc());
    },
    upgradeCoinsPerSecond: async () => {
        const [newPrice, newCoinsPerSecond] = upgradeCoinsPerSecondCalc(
            get().coinsPerSecond,
        );

        get().resetCoinsPerClick();
        get().setCoinsPerSecond(newCoinsPerSecond, newPrice);

        get().startCoinsPerSecond();

        await get().changeDataYsdk();
    },

    click: () => {
        const [clickCoins, _] = clickCalc();

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
