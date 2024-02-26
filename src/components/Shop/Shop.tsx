import { ShopItems } from './ShopItems';
import styles from './Shop.module.scss';
import { Button, Icons, Popup } from '@/shared/ui';
import { ShopProps } from './Shop.props';
import { Balance } from '../Balance';
import { ShopDescription } from './ShopDescription';
import { characters } from '@settings/index';
import { useState } from 'react';
import { useShopStore } from '@/shared/stores/shop';
import { BackgroundType, CharacterType, ItemType } from '@settings/types';

export const Shop = ({ setIsShopOpen, isShopOpen, ...props }: ShopProps) => {
    const { activeCharacter, activeBackground } = useShopStore();

    const [selectedCharacter, setSelectedCharacter] =
        useState<CharacterType | null>(activeCharacter);
    const [selectedBackground, setSelectedBackground] =
        useState<BackgroundType | null>(activeBackground);

    const [activeCategory, setActiveCategory] = useState<ItemType>(
        ItemType.character,
    );

    const handleOnItemClick = (id: number) => {
        setSelectedCharacter(
            characters.find((character) => character.id === id)!,
        );
    };

    const handleOnChangeCategory = (category: ItemType) => {
        setActiveCategory(category);
        switch (category) {
            case ItemType.character:
                setSelectedCharacter(activeCharacter);
                break;
            case ItemType.background:
                setSelectedBackground(activeBackground);
        }
    };

    return (
        <Popup isOpened={isShopOpen} close={() => setIsShopOpen(false)}>
            <div className={styles.wrapper} {...props}>
                <div className={styles.header}>
                    <h1>Магазин</h1>
                    <img src={Icons.shopBlack} alt="" />
                    <button onClick={() => setIsShopOpen(false)}>с</button>
                </div>
                <div className={styles.content}>
                    <nav className={styles.nav}>
                        <Balance />
                        <Button>Персонажи</Button>
                        <Button>Фоны</Button>
                        <Button>Плюшки</Button>
                    </nav>
                    <ShopItems
                        selectedItem={selectedCharacter}
                        handleClick={handleOnItemClick}
                    />
                    <ShopDescription item={selectedCharacter} />
                </div>
            </div>
        </Popup>
    );
};
