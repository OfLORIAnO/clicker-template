import { FC } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import classnames from 'classnames';

export const Button: FC<ButtonProps> = ({
    children,
    className,
    bordered = true,
    ...props
}) => {
    return (
        <button
            {...props}
            className={classnames(className, styles.button, {
                [styles.bordered]: bordered,
            })}
        >
            {children}
        </button>
    );
};
