import { ShopItemProps } from './ShopItem.props';
import styles from './ShopItem.module.scss';
import classNames from 'classnames';
export const ShopItem = ({
    itemId,
    image,
    className,
    isSelected = false,
    isActive = false,
    isLocked = true,
    ...props
}: ShopItemProps) => {
    if (isLocked) {
        isActive = false;
    }
    return (
        <button
            className={classNames(className, styles.wrapper, {
                [styles.selected]: isSelected,
                [styles.active]: isActive,
            })}
            {...props}
        >
            <div className={styles.content}>
                {isLocked && <div className={styles.lock} />}
                <img src={image} className={styles.image} />
            </div>
        </button>
    );
};
