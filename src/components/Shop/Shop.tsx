import { ShopItems } from './ShopItems';
import styles from './Shop.module.scss';
import { Button, Icons, Img, Popup } from '@/shared/ui';
import { Balance } from '@/components';
import { ShopProps } from './Shop.props';
import { ShopDescription } from './ShopDescription';

import { useState } from 'react';
import { useLanguage } from '@/shared/hooks';
import { BackgroundType, CharacterType, ItemType } from '@settings/index';
import { useShopStore } from '@/stores';

export const Shop = ({ setIsShopOpen, isShopOpen, ...props }: ShopProps) => {
    const [activeItemType, setActiveItemType] = useState<ItemType>(
        ItemType.background,
    );
    const { activeCharacter, activeBackground, characters, backgrounds } =
        useShopStore();

    const [selectedCharacter, setSelectedCharacter] =
        useState<CharacterType | null>(activeCharacter);
    const [selectedBackground, setSelectedBackground] =
        useState<BackgroundType | null>(activeBackground);

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
        switch (itemType) {
            case ItemType.character:
                setSelectedCharacter(activeCharacter);
                break;
            case ItemType.background:
                setSelectedBackground(activeBackground);
                break;
        }
        setActiveItemType(itemType);
    };

    return (
        <Popup isOpened={isShopOpen} close={() => setIsShopOpen(false)}>
            <div className={styles.wrapper} {...props}>
                <div className={styles.header}>
                    <h1>{useLanguage('store')}</h1>
                    <Img src={Icons.shopBlack} />
                    <button onClick={() => setIsShopOpen(false)}>x</button>
                </div>
                <div className={styles.content}>
                    <nav className={styles.nav}>
                        <Balance className={styles.balance} />
                        <div className={styles.choose}>
                            <Button
                                disabled={activeItemType === ItemType.character}
                                onClick={() =>
                                    handleOnChangeItemType(ItemType.character)
                                }
                                className={styles.chooseButton}
                            >
                                {
                                    useLanguage('characters')
                                }
                            </Button>
                            {backgrounds.length > 0 && (
                                <Button
                                    disabled={
                                        activeItemType === ItemType.background
                                    }
                                    className={styles.chooseButton}
                                    onClick={() =>
                                        handleOnChangeItemType(
                                            ItemType.background,
                                        )
                                    }
                                >
                                {
                                    useLanguage('backgrounds')
                                }
                                </Button>
                            )}
                        </div>
                        {/* <Button>Плюшки</Button> */}
                    </nav>
                    <div className={styles.shopContent}>
                        <div className={styles.shopItemsContent}>
                            <ShopItems
                                itemType={activeItemType}
                                selectedItem={
                                    activeItemType === ItemType.character
                                        ? selectedCharacter
                                        : selectedBackground
                                }
                                handleClick={handleOnItemClick}
                            />
                        </div>
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
