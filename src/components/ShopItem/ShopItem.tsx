import { ShopItemProps } from './ShopItem.props';
import styles from './ShopItem.module.scss';
import classNames from 'classnames';
export const ShopItem = ({
    image,
    className,
    isSelected = false,
    isActive = false,
    ...props
}: ShopItemProps) => {
    return (
        <div
            className={classNames(className, {
                [styles.selected]: isSelected,
            })}
            {...props}
        >
            privet
            <img src={image} alt="" className={styles.image} />
        </div>
    );
};
