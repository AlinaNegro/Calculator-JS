function getName() {
    const name = prompt('Как тебя зовут?');
    alert (`Привет, ${name}!`)
}

function getNumberOne() {
    const firstNum = prompt('Введите первое число: ');
    return Number(firstNum);
}

function getNumberTwo() {
    const secondNum = prompt('Введите второе число: ')
    return Number(secondNum);
}

function calcSum() {
    const a = getNumberOne(),
        b = getNumberTwo();
    const c = a + b;
    alert(`${a} + ${b} = ${c}`);
}

function calcSubtract() {
    const a = getNumberOne(),
        b = getNumberTwo();
    const c = a - b;
    alert(`${a} - ${b} = ${c}`);
}

function calcDivide() {
    const a = getNumberOne(),
        b = getNumberTwo();
    const c = a / b;
    alert(`${a} / ${b} = ${c}`);
}

function calcMultiply() {
    const a = getNumberOne(),
        b = getNumberTwo();
    const c = a * b;
    alert(`${a} * ${b} = ${c}`);
}