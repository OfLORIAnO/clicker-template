import { useEffect, useState } from 'react';
import InitSettings from '@settings/_init';
import './reset.css';
import styles from './settings.module.scss';
import { Icons, Popup } from '@ui/index';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { ShopItem } from '@/components';
import { characters } from '@settings/characters';

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
            >
                Открыть попап
            </button>
            <img src={Icons.moneyWhite} alt="" />
            {characters &&
                characters.map((character) => (
                    <ShopItem
                        image={character.image}
                        isSelected
                        isActive={false}
                    />
                ))}

            {useLanguage('store')}
        </div>
    );
}

export default App;
