import {
    BackgroundType,
    CharacterType,
    backgrounds,
    characters,
} from '@settings/index';

export function getMyBackgrounds(myBackgroundsId: number[]): BackgroundType[] {
    return backgrounds.filter((background) =>
        myBackgroundsId.includes(background.id),
    );
}
export function getMyCharacters(myCharactersId: number[]): CharacterType[] {
    return characters.filter((character) =>
        myCharactersId.includes(character.id),
    );
}

export function getActiveCharacter(activeCharacterId: number): CharacterType {
    return characters.find((c) => c.id === activeCharacterId) as CharacterType;
}
export function getActiveBackground(
    activeBackgroundId: number,
): BackgroundType {
    return backgrounds.find(
        (b) => b.id === activeBackgroundId,
    ) as BackgroundType;
}
