// ! utils
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

export const clickCalc = (
    damageBonus: number,
    luckyBonus: number,
    coinsPerClick: number,
): [number, boolean] => {
    //! returns: [clickCoins, isBonuced]

    const isBonuced = generateRandomNumber(0, 1) < luckyBonus; // ? Выпал ли нам шанс Х5 к клику
    const coinsWithBonus =
        coinsPerClick * damageBonus > 5 ? coinsPerClick * damageBonus : 0;
    const clickCoins = ciel(
        (coinsPerClick + coinsWithBonus) * (isBonuced ? 5 : 1),
    );

    return [clickCoins, isBonuced];
};

//? generate random number in range

export const upgradeCoinsPerClickCalc = (current: number): [number, number] => {
    //! returns: [newPrice, newCoinsPerClick]

    const minIndexClick = 1.2;
    const maxIndexClick = 1.8;

    testIndexes(minIndexClick, maxIndexClick);

    const newCoinsPerClick = ciel(
        generateRandomNumber(current * minIndexClick, current * maxIndexClick),
    );
    const newPrice = ciel(
        generateRandomNumber(newCoinsPerClick * 60, newCoinsPerClick * 90),
    );

    return [newPrice, newCoinsPerClick];
};

export const perSecondCalc = (
    coinsPerSecondBonus: number,
    coinsPerClick: number,
): number => {
    const coinsWithBonus = floor(coinsPerSecondBonus * coinsPerClick);

    return coinsWithBonus;
};

export const upgradeCoinsPerSecondCalc = (
    current: number,
): [number, number] => {
    //! returns: [newPrice, newCoinsPerSecond]

    const minIndexClick = 1.2;
    const maxIndexClick = 1.6;

    testIndexes(minIndexClick, maxIndexClick);

    const newCoinsPerSecond = floor(
        generateRandomNumber(current * minIndexClick, current * maxIndexClick),
    );
    const newPrice = ciel(
        generateRandomNumber(newCoinsPerSecond * 120, newCoinsPerSecond * 180),
    );
    return [newPrice, newCoinsPerSecond];
};
