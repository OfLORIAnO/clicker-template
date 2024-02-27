import { ShopItems } from './ShopItems';
import styles from './Shop.module.scss';
import { Button, Icons, Popup } from '@/shared/ui';
import { ShopProps } from './Shop.props';
import { Balance } from '../Balance';
import { ShopDescription } from './ShopDescription';

import { useState } from 'react';
import { useShopStore } from '@/shared/stores/shop';
import { BackgroundType, CharacterType, ItemType } from '@settings/types';
import { useLanguage } from '@/shared/hooks/useLanguage';

export const Shop = ({ setIsShopOpen, isShopOpen, ...props }: ShopProps) => {
    const { activeCharacter, activeBackground, characters, backgrounds } =
        useShopStore();

    const [selectedCharacter, setSelectedCharacter] =
        useState<CharacterType | null>(activeCharacter);
    const [selectedBackground, setSelectedBackground] =
        useState<BackgroundType | null>(activeBackground);

    const [activeItemType, setActiveItemType] = useState<ItemType>(
        ItemType.character,
    );

    const handleOnItemClick = (id: number) => {
        activeItemType === ItemType.character &&
            setSelectedCharacter(
                characters.find((character) => character.id === id)!,
            );
        activeItemType === ItemType.background &&
            setSelectedBackground(
                backgrounds.find((background) => background.id === id)!,
            );
    };

    const handleOnChangeItemType = (itemType: ItemType) => {
        setActiveItemType(itemType);
        switch (itemType) {
            case ItemType.character:
                setSelectedCharacter(activeCharacter);
                break;
            case ItemType.background:
                setSelectedBackground(activeBackground);
                break;
        }
    };

    return (
        <Popup isOpened={isShopOpen} close={() => setIsShopOpen(false)}>
            <div className={styles.wrapper} {...props}>
                <div className={styles.header}>
                    <h1>{useLanguage('store')}</h1>
                    <img src={Icons.shopBlack} alt="" />
                    <button onClick={() => setIsShopOpen(false)}>с</button>
                </div>
                <div className={styles.content}>
                    <nav className={styles.nav}>
                        <Balance />
                        <Button
                            disabled={activeItemType === ItemType.character}
                            onClick={() =>
                                handleOnChangeItemType(ItemType.character)
                            }
                        >
                            Персонажи
                        </Button>
                        <Button
                            disabled={activeItemType === ItemType.background}
                            onClick={() =>
                                handleOnChangeItemType(ItemType.background)
                            }
                        >
                            Фоны
                        </Button>
                        <Button>Плюшки</Button>
                    </nav>
                    <div className={styles.shopContent}>
                        <ShopItems
                            itemType={activeItemType}
                            selectedItem={
                                activeItemType === ItemType.character
                                    ? selectedCharacter
                                    : selectedBackground
                            }
                            handleClick={handleOnItemClick}
                        />
                        <ShopDescription
                            itemType={activeItemType}
                            item={
                                activeItemType === ItemType.character
                                    ? selectedCharacter
                                    : selectedBackground
                            }
                        />
                    </div>
                </div>
            </div>
        </Popup>
    );
};
