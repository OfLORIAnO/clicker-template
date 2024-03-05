import { loadingBackgroundImage, loadingTextColor } from '@settings/ui';
import styles from './Loading.module.scss';

export const Loading = () => {
    return (
        <div
            className={styles.wrapper}
            style={{ backgroundImage: `url(${loadingBackgroundImage})` }}
        >
            <div
                className={styles.textContainer}
                style={{ color: loadingTextColor }}
            >
                <span>Загрузка</span>
                <div className={styles.loadingDotContainer}>
                    <div
                        className={styles.loadDot1}
                        style={{ backgroundColor: loadingTextColor }}
                    ></div>
                    <div
                        className={styles.loadDot2}
                        style={{ backgroundColor: loadingTextColor }}
                    ></div>
                    <div
                        className={styles.loadDot3}
                        style={{ backgroundColor: loadingTextColor }}
                    ></div>
                </div>
            </div>
        </div>
    );
};
