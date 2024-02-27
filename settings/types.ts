interface ICharacter {
    type: string;
    image: string;
    name: string[];
    description: string[];
    price: number;
    damage: number;
}
export interface CharacterType extends ICharacter {
    id: number;
}

export enum ItemType {
    character = 'character',
    background = 'background',
}

interface IBackground {
    type: ItemType.background;
    image: string;
    name: string[];
    description: string[];
    price: number;
}

export interface BackgroundType extends IBackground {
    id: number;
}
