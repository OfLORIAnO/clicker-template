import { characters } from '@settings/characters';
import { backgrounds } from '@settings/backgrounds';
import { BackgroundType, CharacterType, ItemType } from '@settings/types';
import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ShopState {
    characters: CharacterType[];
    myCharacters: CharacterType[];

    activeCharacter: CharacterType | null;
    setActiveCharacter: (character: CharacterType) => void;

    backgrounds: BackgroundType[];
    myBackgrounds: BackgroundType[];

    activeBackground: BackgroundType | null;
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
> = (set, get) => ({
    characters: characters,
    myCharacters: [characters[0]],

    activeCharacter: characters[0],
    setActiveCharacter: (character: CharacterType) => {
        set({ activeCharacter: character });
    },

    backgrounds: backgrounds,
    myBackgrounds: [backgrounds[0]],

    activeBackground: backgrounds[0],

    setActiveBackground: (background: BackgroundType) => {
        set({ activeBackground: background });
    },

    buyItem: (item: CharacterType | BackgroundType, type: ItemType) => {
        if (type === ItemType.character) {
            const myCharacters = get().myCharacters;
            const setActiveCharacter = get().setActiveCharacter;

            set({ myCharacters: [...myCharacters, item as CharacterType] });
            setActiveCharacter(item as CharacterType);
        } else if (type === ItemType.background) {
            const myBackgrounds = get().myBackgrounds;
            const setActiveBackground = get().setActiveBackground;

            set({ myBackgrounds: [...myBackgrounds, item as BackgroundType] });
            setActiveBackground(item as BackgroundType);
        }
    },

    getActiveDamage: () => {
        const damage = get().activeCharacter?.damage;
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
});
export const useShopStore = create<ShopState>()(
    devtools((...args) => ({ ...createShopSlice(...args) }), {
        name: 'shop',
    }),
);
