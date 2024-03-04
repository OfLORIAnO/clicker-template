import { ShopItemProps } from './ShopItem.props';
import styles from './ShopItem.module.scss';
import classNames from 'classnames';
import { ItemType } from '@settings/index';
import { Img } from '@/shared/ui';
export const ShopItem = ({
    itemId,
    image,
    className,
    itemType,
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
                {/* <p>{`Активный: ${isActive}`}</p> */}
                {/* <p>{`Купленный: ${!isLocked}`}</p> */}
                {isLocked && <div className={styles.lock} />}
                <Img
                    src={image}
                    className={classNames(styles.image, {
                        [styles.characterImage]:
                            itemType === ItemType.character,
                        [styles.backgroundImage]:
                            itemType === ItemType.background,
                    })}
                />
            </div>
        </button>
    );
};
