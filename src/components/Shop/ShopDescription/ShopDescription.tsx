import styles from './ShopDescription.module.scss';
import { CharacterType } from '@settings/characters';

interface IProps {
    character: CharacterType | null;
}

export const ShopDescription = ({ character }: IProps) => {
    if (!character) return null;
    return <div className={styles.wrapper}>{character.name[0]}</div>;
};
