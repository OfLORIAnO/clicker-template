import React from 'react';
import styles from './Checkbox.module.scss';
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isOn: boolean;
    setIsOn: (value: boolean) => void;
}

export const Checkbox = ({ isOn, setIsOn, ...props }: IProps) => {
    return (
        <div className={styles.wrapper}>
            <input
                id="switch"
                type="checkbox"
                defaultChecked={isOn}
                onChange={() => setIsOn(!isOn)}
                className={styles.input}
                {...props}
            />
            <label htmlFor="switch" className={styles.label}>
                Частицы
            </label>
            <span>Частицы</span>
        </div>
    );
};
