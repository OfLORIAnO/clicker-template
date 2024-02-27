import './reset.css';
import './settings.module.scss';
import styles from './App.module.scss';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { Shop } from '@/components';
import { Balance } from '@/components/Balance';
import { usePlayerStore } from '@/shared/stores/player';
import { InitProcess } from './Prosecc/InitProcess';
import { useState } from 'react';
import { useShopStore } from '@/shared/stores/shop';
import { Button, Icons } from '@/shared/ui';
import { Wrapper } from './Wrapper/Wrapper';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isShopOpen, setIsShopOpen] = useState(false);

    const { activeCharacter } = useShopStore();

    const { click } = usePlayerStore();

    const handleClick = () => {
        activeCharacter?.damage ? click(activeCharacter.damage) : click(1);
    };

    if (!activeCharacter) return null;

    return (
        <InitProcess isLoading={isLoading} setIsLoading={setIsLoading}>
            <Wrapper>
                <div className={styles.shopContainer}>
                    <Button
                        onClick={() => {
                            setIsShopOpen(true);
                        }}
                        className={styles.shopButton}
                    >
                        {useLanguage('store')}
                        <img src={Icons.shopWhite} />
                    </Button>
                </div>
                <div className={styles.moneyContainer}>
                    <Balance />
                    <Button className={styles.advertButton}>
                        <img
                            src={Icons.advertWhite}
                            className={styles.advertImage}
                        />
                    </Button>
                </div>
                <div className={styles.scalesContainer}>
                    <Button> {useLanguage('scaleClick')}</Button>
                    <Button>{useLanguage('scaleMoneyPerSecond')}</Button>
                    <Button>{useLanguage('scaleLucky')}</Button>
                </div>
                <Shop setIsShopOpen={setIsShopOpen} isShopOpen={isShopOpen} />
                <div className={styles.characterContainer}>
                    <button
                        onClick={handleClick}
                        className={styles.characterButton}
                    >
                        <img
                            src={activeCharacter.image}
                            className={styles.characterImage}
                        />
                    </button>
                </div>
                <div className={styles.settingsContainer}>
                    <Button className={styles.settingsButton}>
                        <img
                            src={Icons.settingsWhite}
                            className={styles.settingsImage}
                        />
                    </Button>
                </div>
            </Wrapper>
        </InitProcess>
    );
}

export default App;
