import { ShopItem } from '../ShopItem';
import styles from './ShopItems.module.scss';
import { useShopStore } from '@/shared/stores/shop';
import { BackgroundType, CharacterType, ItemType } from '@settings/types';
import classNames from 'classnames';

interface IProps {
    selectedItem: CharacterType | BackgroundType | null;
    handleClick: (id: number) => void;
    itemType: ItemType;
}
export const ShopItems = ({ selectedItem, handleClick, itemType }: IProps) => {
    const {
        activeCharacter,
        myCharacters,
        characters,

        myBackgrounds,
        backgrounds,
        activeBackground,
    } = useShopStore();

    const checkIsLocked = (id: number): boolean => {
        if (itemType === ItemType.background) {
            return !myBackgrounds.map((c) => c.id).includes(id);
        }
        return !myCharacters.map((c) => c.id).includes(id);
    };

    return (
        <div
            className={classNames(styles.wrapper, {
                [styles.characters]: itemType === ItemType.character,
                [styles.backgrounds]: itemType === ItemType.background,
            })}
        >
            {itemType === ItemType.character &&
                characters.map((character) => {
                    return (
                        <ShopItem
                            onClick={() => handleClick(character.id)}
                            key={character.id}
                            itemId={character.id}
                            itemType={ItemType.character}
                            image={character.image}
                            isActive={
                                !!activeCharacter &&
                                character.id === activeCharacter.id
                            }
                            isSelected={selectedItem?.id === character.id}
                            isLocked={checkIsLocked(character.id)}
                        />
                    );
                })}
            {itemType === ItemType.background &&
                backgrounds.map((background) => {
                    return (
                        <ShopItem
                            onClick={() => handleClick(background.id)}
                            key={background.id}
                            itemId={background.id}
                            itemType={ItemType.background}
                            image={background.image}
                            isActive={
                                !!activeBackground &&
                                background.id === activeBackground.id
                            }
                            isSelected={selectedItem?.id === background.id}
                            isLocked={checkIsLocked(background.id)}
                        />
                    );
                })}
        </div>
    );
};
