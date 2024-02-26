import { useEffect } from 'react';
import InitSettings from '@settings/_init';
import InitDataMock from '@settings/initDataMock.json';
import { usePlayerStore } from '@/shared/stores/player';
import { useCharacterStore } from '@/shared/stores/character';
import { CharacterType } from '@settings/characters';
interface IProps {
    children: React.ReactNode;
    setIsLoading: (value: boolean) => void;
    isLoading: boolean;
}

export const Process = ({ children, setIsLoading, isLoading }: IProps) => {
    const { setBalance, setLanguage } = usePlayerStore();
    const { initCharacterData, characters, myCharacters } = useCharacterStore();

    const getMyCharacters = (myCharactersId: number[]): CharacterType[] => {
        return characters
            ? characters.filter((character) =>
                  myCharactersId.includes(character.id),
              )
            : [];
    };
    const getActiveCharacter = (activeCharacterId: number): CharacterType => {
        return myCharacters
            ? (myCharacters.find(
                  (c) => c.id === activeCharacterId,
              ) as CharacterType)
            : myCharacters[0];
    };
    const InitPlayer = (balance: number, language: number) => {
        setBalance(balance);

        setLanguage(language);
    };
    const InitCharacters = () => {
        const activeCharacterId: number = InitDataMock.activeCharacterId;
        const myCharactersId = InitDataMock.myCharactersId;

        const myCharacters = getMyCharacters(myCharactersId);
        const activeCharacter = getActiveCharacter(activeCharacterId);
        initCharacterData(myCharacters, activeCharacter);
    };

    const InitUserData = () => {
        const { myBalance, language } = InitDataMock;
        InitPlayer(myBalance, language);
        InitCharacters();
    };

    const init = async () => {
        setIsLoading(true);

        InitSettings();
        if (InitDataMock) {
            InitUserData();
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsLoading(false);
    };
    useEffect(() => {
        init();
    }, []);

    if (isLoading) return null;

    return <>{children}</>;
};
