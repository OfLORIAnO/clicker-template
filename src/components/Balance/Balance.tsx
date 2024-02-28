import { Icons, Img } from '@/shared/ui';
import styles from './Balance.module.scss';
import { usePlayerStore } from '@/shared/stores/player';
import classNames from 'classnames';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const Balance = ({ className, ...props }: IProps) => {
    const { balance } = usePlayerStore();
    return (
        <div className={classNames(styles.wrapper, className)} {...props}>
            <Img src={Icons.balanceWhite} />
            <span>{balance}</span>
        </div>
    );
};
