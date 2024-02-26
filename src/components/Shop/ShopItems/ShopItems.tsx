import { characters } from '@settings/index';
import { ShopItem } from '../ShopItem';
import styles from './ShopItems.module.scss';
import { CharacterType } from '@settings/characters';
import { useCharacterStore } from '@/shared/stores/character';
interface IProps {
    selectedItem: CharacterType | null;
    handleClick: (id: number) => void;
}
export const ShopItems = ({ selectedItem, handleClick }: IProps) => {
    const { activeCharacter, myCharacters } = useCharacterStore();

    const checkIsLocked = (id: number): boolean => {
        return !myCharacters.map((c) => c.id).includes(id);
    };

    return (
        <div className={styles.wrapper}>
            {characters.map((character) => {
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
        </div>
    );
};
