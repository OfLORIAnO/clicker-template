// ! utils
const generateRandomNumber = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
};
const ciel = (number: number) => Math.ceil(number);
const testIndexes = (minIndex: number, maxIndex: number) => {
    // ? Тест коэффициентов
    let temp = 1;
    for (let i = 0; i < 10; i++) {
        temp = ciel(generateRandomNumber(temp * minIndex, temp * maxIndex));
        console.log(temp);
    }
    console.log('------------------------');
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
    //! returns: [newPrice, newCoinsPerSecond]

    const minIndexClick = 1.2;
    const maxIndexClick = 2.2;

    testIndexes(minIndexClick, maxIndexClick);

    const newCoinsPerClick = ciel(
        generateRandomNumber(current * minIndexClick, current * maxIndexClick),
    );
    const newPrice = ciel(
        generateRandomNumber(newCoinsPerClick * 100, newCoinsPerClick * 150),
    );

    return [newPrice, newCoinsPerClick];
};
