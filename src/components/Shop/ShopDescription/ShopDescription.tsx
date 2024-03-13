import styles from './ShopDescription.module.scss';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { Button, Icons, Img } from '@/shared/ui';
import { usePlayerStore, useShopStore } from '@/stores';
import { BackgroundType, CharacterType, ItemType } from '@settings/index';
import classNames from 'classnames';
import { shortNumber } from '@/shared/helper';


interface IProps {
    item: CharacterType | BackgroundType | null;
    itemType: ItemType;
}

export const ShopDescription = ({ item, itemType }: IProps) => {
    const { language, balance, setBalance } = usePlayerStore();
    const {
        myCharacters,
        setActiveCharacter,
        activeCharacter,

        myBackgrounds,
        setActiveBackground,
        activeBackground,

        buyItem,
    } = useShopStore();

    const checkIsHave = (): boolean => {
        if (!item) return false;

        if (itemType === ItemType.character) {
            return myCharacters.map((c) => c.id).includes(item.id);
        } else if (itemType === ItemType.background) {
            return myBackgrounds.map((c) => c.id).includes(item.id);
        }
        return false;
    };
    const isActive = (): boolean => {
        if (!item) return false;

        if (itemType === ItemType.character) {
            return activeCharacter.id === item.id;
        } else if (itemType === ItemType.background) {
            return activeBackground.id === item.id;
        }
        return false;
    };

    const handleSetActiveItem = () => {
        itemType === ItemType.character &&
            setActiveCharacter(item as CharacterType);
        itemType === ItemType.background &&
            setActiveBackground(item as BackgroundType);
    };

    const handleBuyItem = () => {
        if (!item) return;

        itemType === ItemType.character && buyItem(item, ItemType.character);
        itemType === ItemType.background && buyItem(item, ItemType.background);
        setBalance(balance - item.price);
    };

    if (!item || !itemType) return null;

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div
                    className={classNames(styles.imageContainer, {
                        [styles.characterImage]:
                            itemType === ItemType.character,
                        [styles.backgroundImage]:
                            itemType === ItemType.background,
                    })}
                >
                    <Img src={item.image} />
                </div>

                <div className={styles.topInfo}>
                    <h4>{item.name[language]}</h4>
                    <div className={styles.stats}>
                        <div className={styles.name}>
                            <span className={styles.desktop}>
                                {useLanguage('damageBonus')}:
                            </span>
                            <span className={styles.mobileOnly}>
                                <Img src={Icons.scaleClickBlack} />
                            </span>
                            <b>+{(item.damageBonus * 100).toFixed(1)}%</b>
                        </div>

                        <div className={styles.name}>
                            <span className={styles.desktop}>
                                {useLanguage('changeX5')}:
                            </span>
                            <span className={styles.mobileOnly}>
                                <Img src={Icons.luckyBlack} />
                            </span>
                            <b>{(item.luckyBonusX5 * 100).toFixed(1)}%</b>
                        </div>

                        <div className={styles.name}>
                            <span className={styles.desktop}>
                                {useLanguage('click')}:
                            </span>
                            <span className={styles.mobileOnly}>
                                <Img src={Icons.timeBlack} />
                            </span>
                            <b>
                                +
                                {item.coinsPerSecondBonus !== 1
                                    ? item.coinsPerSecondBonus
                                    : 0}
                                %
                            </b>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.description}>
                <p>{item.description[language]}</p>
            </div>
            <div className={styles.actions}>
                {checkIsHave() ? (
                    isActive() ? (
                        <Button disabled>Выбран</Button>
                    ) : (
                        <Button onClick={handleSetActiveItem}>Выбрать</Button>
                    )
                ) : (
                    <Button
                        disabled={balance < item.price}
                        onClick={handleBuyItem}
                    >
                        {shortNumber(item.price)}
                        <Img src={Icons.balanceWhite} />
                    </Button>
                )}
            </div>
        </div>
    );
};
