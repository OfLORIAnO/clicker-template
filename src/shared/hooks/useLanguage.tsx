import { usePlayerStore } from '@stores/player';
import { texts } from '@settings/texts';

export const useLanguage = (text: string) => {
    const { getLanguage } = usePlayerStore();
    const language = getLanguage();

    let textReturn = 'Invalid key';
    try {
        textReturn = texts[text.toString() as keyof typeof texts][language];
    } catch (error) {}
    return textReturn;
};
