console.log("Let's roll some dice, baby!")
console.log("---------------------------")

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const runFunctionTenTimes = () => {
    for (let i = 0; i < 10; i++) {
        dieFunction(i)
    }
}

const dieFunction = () => {
    const dieOne = getRandomInt(1, 6);
    const dieTwo = getRandomInt(1, 6);

    const addedDieValue = dieOne + dieTwo

    const message = `${dieOne} + ${dieTwo} === ${addedDieValue}`
    if (dieOne === dieTwo) {
        console.log(message + "DOUBLES!")
    }
    else {
        console.log(message)
    }
};

runFunctionTenTimes()