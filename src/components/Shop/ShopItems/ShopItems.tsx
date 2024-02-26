import { characters } from '@settings/characters';
import { ShopItem } from '../ShopItem';
import styles from './ShopItems.module.scss';
import { useState } from 'react';

export const ShopItems = () => {
    const [isSelected, setIsSelected] = useState<number | null>(null);
    const handleClick = (id: number) => {
        setIsSelected(id);
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
                        isActive={character.id === 0}
                        isSelected={isSelected === character.id}
                        isLocked={character.id === 1}
                    />
                );
            })}
        </div>
    );
};
