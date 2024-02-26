import './reset.css';
import styles from './settings.module.scss';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { Shop } from '@/components';
import { Balance } from '@/components/Balance';
import { usePlayerStore } from '@/shared/stores/player';
import { Process } from './Process/Process';
import { useState } from 'react';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isShopOpen, setIsShopOpen] = useState(false);

    const { click } = usePlayerStore();

    return (
        <Process isLoading={isLoading} setIsLoading={setIsLoading}>
            <div className={styles.wrapper} style={{ background: 'green' }}>
                <button
                    style={{ height: '150px' }}
                    onClick={() => {
                        setIsShopOpen(true);
                    }}
                >
                    Открыть Магазин
                </button>
                <Balance />
                <Shop setIsShopOpen={setIsShopOpen} isShopOpen={isShopOpen} />
                <button style={{ height: '150px' }} onClick={click}>
                    Допустим игрок
                </button>
                {useLanguage('store')}
            </div>
        </Process>
    );
}

export default App;
