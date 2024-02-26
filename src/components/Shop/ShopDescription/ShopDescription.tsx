import styles from './ShopDescription.module.scss';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { usePlayerStore } from '@/shared/stores/player';
import { Button, Icons } from '@/shared/ui';
import { useShopStore } from '@/shared/stores/shop';
import { CharacterType } from '@settings/types';

interface IProps {
    item: CharacterType | null;
}

export const ShopDescription = ({ item }: IProps) => {
    if (!item) return null;

    const { language, balance, setBalance } = usePlayerStore();
    const {
        myCharacters,
        setActiveCharacter,
        buyCharacterItem,
        activeCharacter,
    } = useShopStore();

    const checkIsHave = (): boolean => {
        return myCharacters.map((c) => c.id).includes(item.id);
    };
    const isActive = (): boolean => {
        return activeCharacter ? activeCharacter.id === item.id : false;
    };

    const handleSetActiveCharacter = () => {
        setActiveCharacter(item);
    };

    const handlebuyCharacterItem = () => {
        buyCharacterItem(item);
        setBalance(balance - item.price);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.imageContainer}>
                    <img src={item.image} />
                </div>

                <div className={styles.stats}>
                    <div className={styles.name}>
                        {useLanguage('name')}: <b>{item.name[language]}</b>
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
                        <Button onClick={handleSetActiveCharacter}>
                            Выбрать
                        </Button>
                    )
                ) : (
                    <Button
                        disabled={balance < item.price}
                        onClick={handlebuyCharacterItem}
                    >
                        Купить за {item.price}
                        <img src={Icons.balanceWhite} />
                    </Button>
                )}
            </div>
        </div>
    );
};
