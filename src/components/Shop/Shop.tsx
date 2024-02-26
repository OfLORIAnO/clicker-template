import { ShopItems } from './ShopItems';
import styles from './Shop.module.scss';
import { Button, Icons, Popup } from '@/shared/ui';
import { ShopProps } from './Shop.props';
import { Balance } from '../Balance';

export const Shop = ({ setIsShopOpen, isShopOpen, ...props }: ShopProps) => {
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
                    <ShopItems />
                </div>
            </div>
        </Popup>
    );
};
