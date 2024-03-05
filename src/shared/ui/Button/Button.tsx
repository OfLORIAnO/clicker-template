import { FC } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import classnames from 'classnames';

export const Button: FC<ButtonProps> = ({
    children,
    className,
    bordered = true,
    viewDisabled = false,
    ...props
}) => {
    if (viewDisabled) {
        return (
            <div
                className={classnames(
                    className,
                    styles.button,
                    styles.viewDisabled,
                    { [styles.bordered]: bordered },
                )}
            >
                {children}
            </div>
        );
    }

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
