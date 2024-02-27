import { ShopItem } from '../ShopItem';
import styles from './ShopItems.module.scss';
import { useShopStore } from '@/shared/stores/shop';
import { BackgroundType, CharacterType, ItemType } from '@settings/types';
interface IProps {
    selectedItem: CharacterType | BackgroundType | null;
    handleClick: (id: number) => void;
    category: ItemType;
}
export const ShopItems = ({ selectedItem, handleClick, category }: IProps) => {
    const { activeCharacter, myCharacters, characters, backgrounds } =
        useShopStore();

    const checkIsLocked = (id: number): boolean => {
        return !myCharacters.map((c) => c.id).includes(id);
    };

    return (
        <div className={styles.wrapper}>
            {category === ItemType.character &&
                characters.map((character) => {
                    return (
                        <ShopItem
                            onClick={() => handleClick(character.id)}
                            key={character.id}
                            itemId={character.id}
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
            {category === ItemType.background &&
                backgrounds.map((background) => {
                    return (
                        <ShopItem
                            onClick={() => handleClick(background.id)}
                            key={background.id}
                            itemId={background.id}
                            image={background.image}
                            isActive={
                                !!activeCharacter &&
                                background.id === activeCharacter.id
                            }
                            isSelected={selectedItem?.id === background.id}
                            isLocked={checkIsLocked(background.id)}
                        />
                    );
                })}
        </div>
    );
};
