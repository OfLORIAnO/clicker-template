import { useEffect } from 'react';
import InitSettings from '@settings/_init';
import InitDataMock from '@settings/initDataMock.json';
import { BackgroundType, CharacterType } from '@settings/types';
import { IProps } from './props';
import { usePlayerStore, useShopStore, useSoundController } from '@/stores';

export const InitData = ({ children, setIsLoading, isLoading }: IProps) => {
    const { setBalance, setLanguage, startCoinsPerSecond, resetCoinsPerClick } =
        usePlayerStore();
    const { initShopData, characters, backgrounds } = useShopStore();
    const { initSounds } = useSoundController();

    const getMyBackgrounds = (myBackgroundsId: number[]): BackgroundType[] => {
        return backgrounds
            ? backgrounds.filter((background) =>
                  myBackgroundsId.includes(background.id),
              )
            : [];
    };
    const getMyCharacters = (myCharactersId: number[]): CharacterType[] => {
        return characters
            ? characters.filter((character) =>
                  myCharactersId.includes(character.id),
              )
            : [];
    };

    const getActiveCharacter = (activeCharacterId: number): CharacterType => {
        return characters.find(
            (c) => c.id === activeCharacterId,
        ) as CharacterType;
    };
    const getActiveBackground = (
        activeBackgroundId: number,
    ): BackgroundType => {
        return backgrounds.find(
            (b) => b.id === activeBackgroundId,
        ) as BackgroundType;
    };

    const InitPlayer = () => {
        const { myBalance, language } = InitDataMock;

        setBalance(myBalance);

        setLanguage(language);
    };

    const InitShop = () => {
        // ? Init Characters
        const activeCharacterId: number = InitDataMock.activeCharacterId;
        const myCharactersId = InitDataMock.myCharactersId;
        const myCharacters = getMyCharacters(myCharactersId);
        const activeCharacter = getActiveCharacter(activeCharacterId);

        // ? Init Backgrounds
        const myBackgroundsId = InitDataMock.myBackgroundsId;
        const activeBackgroundsId = InitDataMock.activeBackgroundsId;
        const myBackgrounds = getMyBackgrounds(myBackgroundsId);
        const activeBackground = getActiveBackground(activeBackgroundsId);

        initShopData(
            myCharacters,
            activeCharacter,
            myBackgrounds,
            activeBackground,
        );
    };

    const InitUserData = () => {
        InitPlayer();
        InitShop();
    };

    const InitGameData = async () => {
        setIsLoading(true);

        InitSettings();
        if (InitDataMock.ready) {
            InitUserData();
        }

        setIsLoading(false);
    };

    useEffect(() => {
        InitGameData();
        document
            .getElementById('root')
            ?.addEventListener('click', initSounds, { once: true });

        startCoinsPerSecond();
        return () => {
            resetCoinsPerClick();
        };
    }, []);

    if (isLoading) {
        return null;
    }

    return <>{children}</>;
};
