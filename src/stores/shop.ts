import { BackgroundType, CharacterType, ItemType } from '@settings/types';
import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { characters } from '@settings/characters';
import { backgrounds } from '@settings/backgrounds';

interface ShopState {
    characters: CharacterType[];
    myCharacters: CharacterType[];

    activeCharacter: CharacterType;
    setActiveCharacter: (character: CharacterType) => void;

    backgrounds: BackgroundType[];
    myBackgrounds: BackgroundType[];

    activeBackground: BackgroundType;
    setActiveBackground: (background: BackgroundType) => void;

    getActiveDamage: () => number;

    buyItem: (item: CharacterType | BackgroundType, type: ItemType) => void;

    initShopData: (
        myCharacters: CharacterType[],
        activeCharacter: CharacterType,
        myBackgrounds: BackgroundType[],
        activeBackground: BackgroundType,
    ) => void;
}

const createShopSlice: StateCreator<
    ShopState,
    [['zustand/devtools', never]],
    [],
    ShopState
> = (set, get) => {
    return {
        characters: characters,
        myCharacters: [characters[0]],

        activeCharacter: characters[0],

        setActiveCharacter: (character: CharacterType) => {
            // TODO сохранять данные
            set({ activeCharacter: character });
        },

        backgrounds: backgrounds,
        myBackgrounds: [backgrounds[0]],

        activeBackground: backgrounds[0],

        setActiveBackground: (background: BackgroundType) => {
            // TODO сохранять данные
            set({ activeBackground: background });
        },

        buyItem: (item: CharacterType | BackgroundType, type: ItemType) => {
            // TODO сохранять данные
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
        },

        getActiveDamage: () => {
            const damage = get().activeCharacter?.damageBonus;
            return damage ?? 1;
        },

        initShopData: (
            myCharacters: CharacterType[],
            activeCharacter: CharacterType,
            myBackgrounds: BackgroundType[],
            activeBackground: BackgroundType,
        ) => {
            const setActiveCharacter = get().setActiveCharacter;
            set({ myCharacters: myCharacters });
            setActiveCharacter(activeCharacter);

            const setActiveBackground = get().setActiveBackground;
            set({ myBackgrounds: myBackgrounds });
            setActiveBackground(activeBackground);
        },
    };
};
export const useShopStore = create<ShopState>()(
    devtools((...args) => ({ ...createShopSlice(...args) }), {
        name: 'shop',
    }),
);
