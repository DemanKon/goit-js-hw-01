//?---------------------------------TASK------------------------------------//

// Написати функцію для знаходження суми двох чисел.
// Функція отримує два числа в якості аргументів,
// рахує їх сумму і виводить в консль рядок: 'Сума чисел: sum '.
// function summary(a, b) {
//     const sum = a + b;
//     return `сума чисел ${sum}`;
// }

// console.log(summary(5, 5));

//?---------------------------------TASK------------------------------------//

// Функція для визначення типу змінної:
// Написати функцію для визначення типу змінної.
// Функція отримує будь-яке значення в якості аргументу
// і визначає тип цієї змінної. Виводить в консоль
// повідомлення `Тип змінної: type`

// function whatType(value) {
//     return `Type of argument: ${typeof value}`
// }

// console.log(whatType(2));
// console.log(whatType(true));
// console.log(whatType('text'));

//?---------------------------------TASK------------------------------------//

// Написати функцію, котра отримує число і ступінь до якого
// треба піднести це число. Вивесит в консоль рядок:
// "Результат обчислення number"

// let a = 3;
// let b = 2;
// function sum(a, b) {
//     const result = Math.pow(a, b);
//     // return `Result a**b: ${result}`;
//     return result;
// }

// const c = sum(a, b);
// console.log(c);

//?---------------------------------TASK------------------------------------//

// Написати функція для обчислення довжини рядка.
// Функція отримує рядок в якості аргументу і
// виводить в консоль повідомлення "Довжина рядка length"

// function calcLenght(string) {
//     return `Lenght "${string}": ${string.length}`;
// }

// console.log(calcLenght("test"));

//?---------------------------------TASK------------------------------------//

// Написати функцію для знаходження максимального числа серед трьох.
// Функція отримує в якості аргументів числа і знаходить найбільше.
// Виводить в консоль рядок "Найбільше число "number"

// function maxNumber(a, b, c) {
//     const max = Math.max(a, b, c);
//     return `Max number ${max}`;
// }

// console.log(maxNumber(7, 3, 5));

//?---------------------------------TASK------------------------------------//

// Написати функці для конвертації валюти, вона отримує в якості аргументів
// два значення сумму в $ і курс валюти.І рахує скільки це буде в гривні.
// Функція виводить в консоль повідомлення:
// "amount USD дорівнює convertedAmount гривням за обмінним курсом exchangeRate"

// function exchange(exchangeRate, value) {
//     const convertedAmount = exchangeRate * value;
//     return `amount USD дорівнює ${convertedAmount} гривням за обмінним курсом ${exchangeRate}`
// }

// console.log(exchange(40, 11));

//?---------------------------------TASK------------------------------------//

// За допомогою prompt потрібно ввести два числа, порахувати їх суму
// і вивести її за допомогою alert.

// const number1 = prompt("enter number 1:");
// console.log(`number 1 is ${number1}`);
// const number2 = prompt("enter number 2:");
// console.log(`number 2 is ${number2}`);

// const sumNumber = Number(number1) + Number(number2);
// console.log(`summary: ${sumNumber}`);
// alert(`summary number: ${sumNumber}`);

//?---------------------------------TASK------------------------------------//

// Напишіть функцію formatMinutesToTime(minutes), котра
// отримає від користувача число(кількість хвилин) і виведе
// в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
// вказав число 70, в консолі отримаємо "01:10"

// function formatMinutesToTime(minutes) {
//     const hours = Math.floor(minutes / 60); //ділення з округленням до найменшого
//     console.log(`Hours: ${hours}`);
//     const modHours = String(hours).padStart(2, "0") //кількість символів, чим заповнити
//     console.log(`modHours: ${modHours}`);
//     const modMinutes = String(minutes % 60).padStart(2, "0"); //залишок від ділення
//     console.log(`modMinutes: ${modMinutes}`);
//     return `${minutes} it's time: ${modHours} : ${modMinutes}`;
// }

// console.log(formatMinutesToTime(115));

//?---------------------------------TASK------------------------------------//

// За допомогою prompt ввести число і вивести за допомогою alert повідомлення
// парне це число, чи непарне.

// const number = prompt("enter number:"); //введіть число
// const typeNumber = parseInt(number); //спроба привести до числа
// console.log(typeNumber); //якщо не число виведе NaN
// if (!isNaN(typeNumber)) { //конвертація ! true/false
//     if (number % 2 === 0) {
//         alert(`число ${number} парне`)
//     }
//         else {
//             alert(`число ${number} не парне`)
//         }
//     }
// else {
//     alert(`це не число, введіть число`)
// }

//?---------------------------------TASK------------------------------------//

// Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевір, що другим символом цього рядка є літера 'b'.
// Якщо так - виведи 'Так' у консоль, в противному випадку виведи 'Ні'.

// const string = "abcd";
// if (string[1] === "b") {
//     console.log("yes");
// }
//     else {
//     console.log("no");
//     }

//?---------------------------------TASK------------------------------------//

// Оголоси функцію checkString(value), яка перевіряє
// чи отримане значення є рядком.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.

// function checkString(value) {
//     if (typeof value === "string") {
//         console.log(`Довжина рядка ${value.length}`);
//      }
//     else {
//         console.log("not a String");
//     }
// }

// checkString("12"); //якщо не має return то можна викликати просто функцію
// checkString(12);
// checkString(false);

//?---------------------------------TASK------------------------------------//