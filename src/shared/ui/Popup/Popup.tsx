import styles from './Popup.module.scss';
import { Dialog } from '@headlessui/react';
import { PopupProps } from './Popup.props';
import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames';
export const Popup = ({ isOpened, close, children, className }: PopupProps) => {
    const handleClose = () => {
        close && close();
    };

    if (!isOpened) {
        return null;
    }

    return (
        <AnimatePresence>
            {isOpened && (
                <Dialog open={isOpened} onClose={handleClose}>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                ease: 'easeOut',
                                duration: 0.1,
                            },
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                ease: 'easeIn',
                                duration: 0.2,
                            },
                        }}
                        className={styles.cover}
                    >
                        <motion.div
                            className={classNames(styles.popup, className)}
                            initial={{
                                opacity: 0,
                                scale: 0.95,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    ease: 'easeOut',
                                    duration: 0.2,
                                },
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.95,
                                transition: {
                                    ease: 'easeIn',
                                    duration: 0.2,
                                },
                            }}
                        >
                            <Dialog.Panel>
                                <div className={styles.content}>{children}</div>
                            </Dialog.Panel>
                        </motion.div>
                    </motion.div>
                </Dialog>
            )}
        </AnimatePresence>
    );
};
