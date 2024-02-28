import { Img } from '@/shared/ui';
import styles from './SoundController.module.scss';

interface IProps {
    setSoundValue: (value: number) => void;
    soundValue: number;
    icon: string;
}

export const SoundController = ({
    soundValue,
    setSoundValue,
    icon,
}: IProps) => {
    return (
        <div className={styles.wrapper}>
            <Img src={icon} />
            <div className={styles.soundWrapper}>
                <input
                    type={'range'}
                    min={0}
                    max={100}
                    step={12.5}
                    onChange={(e) => setSoundValue(Number(e.target.value))}
                    value={soundValue}
                />
            </div>
        </div>
    );
};
