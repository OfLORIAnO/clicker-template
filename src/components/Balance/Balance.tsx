import { Button, Icons, Img } from '@/shared/ui';
import styles from './Balance.module.scss';
import { usePlayerStore } from '@/shared/stores/player';
import classNames from 'classnames';
import { shortNumber } from '@/shared/helper';

interface IProps {
    className?: string;
}

export const Balance = ({ className, ...props }: IProps) => {
    const { balance } = usePlayerStore();
    return (
        <Button className={classNames(styles.wrapper, className)} {...props}>
            <Img src={Icons.balanceWhite} />
            <span>{shortNumber(balance)}</span>
        </Button>
    );
};
