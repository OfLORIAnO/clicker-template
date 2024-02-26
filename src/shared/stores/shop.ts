import { characters } from '@settings/characters';
import { backgrounds } from '@settings/backgrounds';
import { BackgroundType, CharacterType } from '@settings/types';
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

    buyCharacterItem: (character: CharacterType) => void;

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

    buyCharacterItem: (character: CharacterType) => {
        const myCharacters = get().myCharacters;
        const setActiveCharacter = get().setActiveCharacter;

        set({ myCharacters: [...myCharacters, character] });
        setActiveCharacter(character);
    },

    backgrounds: backgrounds,
    myBackgrounds: [backgrounds[0]],

    activeBackground: backgrounds[0],

    setActiveBackground: (background: BackgroundType) => {
        set({ activeBackground: background });
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
