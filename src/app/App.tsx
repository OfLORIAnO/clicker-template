import { useEffect, useState } from 'react';
import InitSettings from '@settings/_init';
import './reset.css';
import styles from './settings.module.scss';
import { Icons, Popup } from '@ui/index';
import { useLanguage } from '@/shared/hooks/useLanguage';
function App() {
    const [isLoading, setIsLoading] = useState(true);

    const init = async () => {
        setIsLoading(true);
        InitSettings();
        setIsLoading(false);
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        init();
    }, []);

    return (
        <div className={styles.wrapper} style={{ background: 'red' }}>
            <Popup isOpened={isPopupOpen} close={() => setIsPopupOpen(false)}>
                ку
            </Popup>
            <button
                onClick={() => {
                    setIsPopupOpen(true);
                }}
            ></button>
            <img src={Icons.moneyWhite} alt="" />
            {useLanguage('store')}
        </div>
    );
}

export default App;
