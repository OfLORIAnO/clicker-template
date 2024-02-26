import { ShopItems } from './ShopItems';
import styles from './Shop.module.scss';
import { Button, Icons, Popup } from '@/shared/ui';
import { ShopProps } from './Shop.props';
import { Balance } from '../Balance';
import { ShopDescription } from './ShopDescription';
import { characters } from '@settings/index';
import { useState } from 'react';
import { CharacterType } from '@settings/characters';

export const Shop = ({ setIsShopOpen, isShopOpen, ...props }: ShopProps) => {
    const [selectedCharacter, setSelectedCharacter] =
        useState<CharacterType | null>(characters.find((c) => c.id === 0)!);
    const handleClick = (id: number) => {
        setSelectedCharacter(
            characters.find((character) => character.id === id)!,
        );
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
                        handleClick={handleClick}
                    />
                    <ShopDescription character={selectedCharacter} />
                </div>
            </div>
        </Popup>
    );
};
