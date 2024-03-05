import {
    BackgroundType,
    CharacterType,
    ItemType,
    characters,
    backgrounds,
    ShopDataInit,
} from '@settings/index';
import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { useYandexStore } from '.';
import {
    getActiveBackground,
    getActiveCharacter,
    getMyBackgrounds,
    getMyCharacters,
} from '@/shared/helper';

interface ShopState {
    characters: CharacterType[];
    myCharacters: CharacterType[];

    activeCharacter: CharacterType;
    setActiveCharacter: (character: CharacterType) => Promise<void>;

    backgrounds: BackgroundType[];
    myBackgrounds: BackgroundType[];

    activeBackground: BackgroundType;
    setActiveBackground: (background: BackgroundType) => Promise<void>;

    buyItem: (
        item: CharacterType | BackgroundType,
        type: ItemType,
    ) => Promise<void>;

    initShopData: (
        myCharacters: CharacterType[],
        activeCharacter: CharacterType,
        myBackgrounds: BackgroundType[],
        activeBackground: BackgroundType,
    ) => void;

    getStateDataForYsdk: () => {
        activeCharacter: number;
        activeBackground: number;
        myCharacters: number[];
        myBackgrounds: number[];
    };

    changeDataYsdk: () => Promise<void>;
}

const createShopSlice: StateCreator<
    ShopState,
    [['zustand/devtools', never]],
    [],
    ShopState
> = (set, get) => {
    return {
        characters: characters,
        myCharacters: getMyCharacters(ShopDataInit.myCharacters),

        activeCharacter: getActiveCharacter(ShopDataInit.activeCharacter),

        setActiveCharacter: async (character: CharacterType) => {
            set({ activeCharacter: character });
            await get().changeDataYsdk();
        },

        backgrounds: backgrounds,
        myBackgrounds: getMyBackgrounds(ShopDataInit.myBackgrounds),

        activeBackground: getActiveBackground(ShopDataInit.activeBackground),

        setActiveBackground: async (background: BackgroundType) => {
            set({ activeBackground: background });
            await get().changeDataYsdk();
        },

        buyItem: async (
            item: CharacterType | BackgroundType,
            type: ItemType,
        ) => {
            if (type === ItemType.character) {
                const myCharacters = get().myCharacters;
                const setActiveCharacter = get().setActiveCharacter;

                set({ myCharacters: [...myCharacters, item as CharacterType] });
                setActiveCharacter(item as CharacterType);
            } else if (type === ItemType.background) {
                const myBackgrounds = get().myBackgrounds;
                const setActiveBackground = get().setActiveBackground;

                set({
                    myBackgrounds: [...myBackgrounds, item as BackgroundType],
                });
                setActiveBackground(item as BackgroundType);
            }
            await get().changeDataYsdk();
        },

        initShopData: (
            myCharacters: CharacterType[],
            activeCharacter: CharacterType,
            myBackgrounds: BackgroundType[],
            activeBackground: BackgroundType,
        ) => {
            set({
                myCharacters,
                activeCharacter,
                myBackgrounds,
                activeBackground,
            });
        },
        getStateDataForYsdk: () => {
            return {
                activeCharacter: get().activeCharacter.id,
                activeBackground: get().activeBackground.id,
                myCharacters: get().myCharacters.map(
                    (character) => character.id,
                ),
                myBackgrounds: get().myBackgrounds.map(
                    (background) => background.id,
                ),
            };
        },

        changeDataYsdk: async () => {
            await useYandexStore.getState().setDataYsdk();
        },
    };
};
export const useShopStore = create<ShopState>()(
    devtools((...args) => ({ ...createShopSlice(...args) }), {
        name: 'shop',
    }),
);
