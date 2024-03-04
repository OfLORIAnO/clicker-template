import { BackgroundType, CharacterType, ItemType } from '@settings/types';
import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { characters } from '@settings/characters';
import { backgrounds } from '@settings/backgrounds';
import { useYandexStore } from '.';

interface ShopState {
    characters: CharacterType[];
    myCharacters: CharacterType[];

    activeCharacter: CharacterType;
    setActiveCharacter: (character: CharacterType) => Promise<void>;

    backgrounds: BackgroundType[];
    myBackgrounds: BackgroundType[];

    activeBackground: BackgroundType;
    setActiveBackground: (background: BackgroundType) => Promise<void>;

    getActiveDamage: () => number;

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

    getStateDataForYandex: () => [number, number, number[], number[]];
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

        setActiveCharacter: async (character: CharacterType) => {
            set({ activeCharacter: character });

            const setDataYsdk = useYandexStore.getState().setDataYsdk;
            await setDataYsdk({
                activeCharacter: character.id,
            });
        },

        backgrounds: backgrounds,
        myBackgrounds: [backgrounds[0]],

        activeBackground: backgrounds[0],

        setActiveBackground: async (background: BackgroundType) => {
            set({ activeBackground: background });

            const setDataYsdk = useYandexStore.getState().setDataYsdk;
            await setDataYsdk({
                activeBackground: background.id,
            });
        },

        buyItem: async (
            item: CharacterType | BackgroundType,
            type: ItemType,
        ) => {
            const setDataYsdk = useYandexStore.getState().setDataYsdk;

            if (type === ItemType.character) {
                const myCharacters = get().myCharacters;
                const setActiveCharacter = get().setActiveCharacter;

                set({ myCharacters: [...myCharacters, item as CharacterType] });
                setActiveCharacter(item as CharacterType);

                await setDataYsdk({
                    myCharacters: get().myCharacters.map(
                        (characters) => characters.id,
                    ),
                });
                console.log(
                    'Попытались добавить',
                    get().myCharacters.map((characters) => characters.id),
                );
            } else if (type === ItemType.background) {
                const myBackgrounds = get().myBackgrounds;
                const setActiveBackground = get().setActiveBackground;

                set({
                    myBackgrounds: [...myBackgrounds, item as BackgroundType],
                });
                setActiveBackground(item as BackgroundType);

                await setDataYsdk({
                    myBackgrounds: get().myBackgrounds.map(
                        (backgrounds) => backgrounds.id,
                    ),
                });
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
        getStateDataForYandex: () => {
            return [
                get().activeCharacter.id,
                get().activeBackground.id,
                get().myCharacters.map((character) => character.id),
                get().myBackgrounds.map((background) => background.id),
            ];
        },
    };
};
export const useShopStore = create<ShopState>()(
    devtools((...args) => ({ ...createShopSlice(...args) }), {
        name: 'shop',
    }),
);
