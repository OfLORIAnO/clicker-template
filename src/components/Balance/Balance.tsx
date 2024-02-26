import { Icons } from '@/shared/ui';
import styles from './Balance.module.scss';
import { usePlayerStore } from '@/shared/stores/player';

export const Balance = () => {
    const { balance } = usePlayerStore();
    return (
        <div className={styles.wrapper}>
            <img src={Icons.balanceWhite} />
            <span>{balance}</span>
        </div>
    );
};
