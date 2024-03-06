// ! utils

import { usePlayerStore, useShopStore } from '@/stores';
import {
    clicksForNextUpgradeMax,
    clicksForNextUpgradeMin,
    secondsForNextUpgradeCoinsPerSecondMax,
    secondsForNextUpgradeCoinsPerSecondMin,
    upgradeClickDamageMax,
    upgradeClickDamageMin,
    upgradeCoinsPerSecondMax,
    upgradeCoinsPerSecondMin,
} from '@settings/gameBalance';

//? generate random number in range
const generateRandomNumber = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
};
const ciel = (number: number) => Math.ceil(number);
const floor = (number: number) => Math.floor(number);
const testIndexes = (minIndex: number, maxIndex: number) => {
    // ? Тест коэффициентов
    let temp = 1;
    for (let i = 0; i < 10; i++) {
        temp = ciel(generateRandomNumber(temp * minIndex, temp * maxIndex));
        console.log(temp);
    }
    console.log('------------------------');
};
const addSpace = (number: string): string => {
    if (number.length === 7) {
        return number[0] + ' ' + number.slice(1);
    }
    return number;
};

export const shortNumber = (number: number): string => {
    if (number < 1e3 * 10) return addSpace(number.toString());

    if (number >= 1e3 * 10 && number < 1e6 * 10)
        return addSpace(+(number / 1e3).toFixed(1) + 'K');

    if (number >= 1e6 * 10 && number < 1e9 * 10)
        return addSpace(+(number / 1e6).toFixed(1) + 'M');

    if (number >= 1e9 * 10 && number < 1e12 * 10)
        return addSpace(+(number / 1e9).toFixed(1) + 'B');

    if (number >= 1e12 * 10) return addSpace(+(number / 1e12).toFixed(1) + 'T');

    return addSpace(number.toString());
};

// ?

export const delaySeconds = (second: number) =>
    new Promise((resolve) => setTimeout(resolve, second * 1000));

export const getCoinsClickWithBonus = (
    coinsPerClick: number,
    damageBonus: number,
    isComplex: boolean = false,
): number => {
    const coinsWithBonus = floor(coinsPerClick * damageBonus);

    if (isComplex) {
        if (coinsPerClick + coinsWithBonus > 5) {
            return coinsPerClick + coinsWithBonus;
        } else {
            return coinsPerClick;
        }
    } else {
        return coinsWithBonus;
    }
};

export const clickCalc = (): [number, boolean] => {
    //! returns: [totalClick, isBonuced]
    const characterDamageBonus =
        useShopStore.getState().activeCharacter.damageBonus;
    const characterLuckyBonus =
        useShopStore.getState().activeCharacter.luckyBonusX5;
    const backgroundDamageBonus =
        useShopStore.getState().activeBackground.damageBonus;
    const backgroundLuckyBonus =
        useShopStore.getState().activeBackground.luckyBonusX5;
    const coinsPerClick = usePlayerStore.getState().coinsPerClick;
    const isDoubled = usePlayerStore.getState().isDoubledClick;

    const isBonucedCharacter = generateRandomNumber(0, 1) < characterLuckyBonus; // ? Выпал ли нам шанс Х5 к клику
    const clickCoinsCharacter =
        getCoinsClickWithBonus(coinsPerClick, characterDamageBonus, true) *
        (isBonucedCharacter ? 5 : 1);

    const isBonucedBackground =
        generateRandomNumber(0, 1) < backgroundLuckyBonus;
    const clickCoinsBackground =
        getCoinsClickWithBonus(coinsPerClick, backgroundDamageBonus) *
        (isBonucedBackground ? 5 : 1);

    const logoutData = true;
    logoutData &&
        console.log(
            'click:',
            coinsPerClick,
            '\ncharacter:',
            clickCoinsCharacter,
            isBonucedCharacter,
            '\nbackground:',
            clickCoinsBackground,
            isBonucedBackground,
        );
    return [
        (clickCoinsBackground + clickCoinsCharacter) * (isDoubled ? 2 : 1),
        isBonucedCharacter || isBonucedBackground,
    ];
};

export const upgradeCoinsPerClickCalc = (current: number): [number, number] => {
    //! returns: [newPrice, newCoinsPerClick]

    const logoutData = false;
    logoutData && testIndexes(upgradeClickDamageMin, upgradeClickDamageMax);

    const newCoinsPerClick = ciel(
        generateRandomNumber(
            current * upgradeClickDamageMin,
            current * upgradeClickDamageMax,
        ),
    );
    const newPrice = ciel(
        generateRandomNumber(
            newCoinsPerClick * clicksForNextUpgradeMin,
            newCoinsPerClick * clicksForNextUpgradeMax,
        ),
    );

    return [newPrice, newCoinsPerClick];
};

export const perSecondCalc = (): number => {
    const characterCoinsPerSecondBonus =
        useShopStore.getState().activeCharacter.coinsPerSecondBonus;
    const backgroundCoinsPerSecondBonus =
        useShopStore.getState().activeBackground.coinsPerSecondBonus;
    const coinsPerSecond = usePlayerStore.getState().coinsPerSecond;
    const isDoubled = usePlayerStore.getState().isDoubledPerSecond;

    const coinsWithBonus = floor(
        coinsPerSecond *
            characterCoinsPerSecondBonus *
            backgroundCoinsPerSecondBonus,
    );

    const logoutData = false;

    logoutData &&
        console.log(
            'perSecondData:',
            coinsPerSecond,
            characterCoinsPerSecondBonus,
            backgroundCoinsPerSecondBonus,
            '\nperSecondWithBonus:',
            coinsWithBonus,
            '\nisDoubled:',
            isDoubled,
        );

    return coinsWithBonus * (isDoubled ? 2 : 1);
};

export const upgradeCoinsPerSecondCalc = (
    current: number,
): [number, number] => {
    //! returns: [newPrice, newCoinsPerSecond]

    const logoutData = false;
    logoutData &&
        testIndexes(upgradeCoinsPerSecondMin, upgradeCoinsPerSecondMax);

    const newCoinsPerSecond = ciel(
        generateRandomNumber(
            current * upgradeCoinsPerSecondMin,
            current * upgradeCoinsPerSecondMax,
        ),
    );
    const newPrice = ciel(
        generateRandomNumber(
            newCoinsPerSecond * secondsForNextUpgradeCoinsPerSecondMin,
            newCoinsPerSecond * secondsForNextUpgradeCoinsPerSecondMax,
        ),
    );
    return [newPrice, newCoinsPerSecond];
};
