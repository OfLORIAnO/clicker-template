import { useShopStore } from '@/stores';
import styles from './Wrapper.module.scss';

interface IProps {
    children: React.ReactNode;
}

export const Wrapper = ({ children }: IProps) => {
    const { activeBackground } = useShopStore();

    return (
        <div
            className={styles.wrapper}
            style={{ backgroundImage: `url(${activeBackground.image})` }}
        >
            {children}
        </div>
    );
};
