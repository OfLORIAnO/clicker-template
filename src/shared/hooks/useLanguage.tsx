import { usePlayerStore } from '@stores/player';
import { texts } from '@settings/index';

export const useLanguage = (text: keyof typeof texts) => {
    const { language } = usePlayerStore();

    let textReturn = 'Invalid key';
    try {
        textReturn = texts[text.toString() as keyof typeof texts][language];
    } catch (error) {}
    return textReturn;
};
