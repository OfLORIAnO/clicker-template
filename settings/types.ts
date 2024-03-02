export enum ItemType {
    character = 'character',
    background = 'background',
}

interface IBasic {
    type: string;
    image: string;
    name: string[];
    description: string[];
    price: number;
    damageBonus: number;
    luckyBonusX5: number;
    coinsPerSecondBonus: number;
}

interface ICharacter extends IBasic {
    type: ItemType.character;
}

export interface CharacterType extends ICharacter {
    id: number;
}

interface IBackground extends IBasic{
    type: ItemType.background;
    
}

export interface BackgroundType extends IBackground {
    id: number;
}
