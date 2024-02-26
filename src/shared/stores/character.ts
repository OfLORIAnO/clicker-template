import { CharacterType, characters } from '@settings/characters';
import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
interface CharacterState {
    characters: CharacterType[] | null;
    myCharacters: CharacterType[];

    activeCharacter: CharacterType | null;
    setActiveCharacter: (character: CharacterType) => void;

    buyCharacter: (character: CharacterType) => void;

    initCharacterData: (
        myCharacters: CharacterType[],
        activeCharacter: CharacterType,
    ) => void;
}

const createCharacterSlice: StateCreator<
    CharacterState,
    [['zustand/devtools', never]],
    [],
    CharacterState
> = (set, get) => ({
    characters: characters,
    myCharacters: [characters[0]],

    activeCharacter: characters[0],
    setActiveCharacter: (character: CharacterType) => {
        set({ activeCharacter: character });
    },

    buyCharacter: (character: CharacterType) => {
        const myCharacters = get().myCharacters;
        const setActiveCharacter = get().setActiveCharacter;

        set({ myCharacters: [...myCharacters, character] });
        setActiveCharacter(character);
    },
    initCharacterData: (
        myCharacters: CharacterType[],
        activeCharacter: CharacterType,
    ) => {
        const setActiveCharacter = get().setActiveCharacter;
        set({ myCharacters: myCharacters });
        setActiveCharacter(activeCharacter);
    },
});

export const useCharacterStore = create<CharacterState>()(
    devtools((...args) => ({ ...createCharacterSlice(...args) }), {
        name: 'Character',
    }),
);
