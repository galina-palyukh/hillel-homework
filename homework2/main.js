// УСЛОВНЫЕ И ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// task 1 - В переменную x записывается число, введенное пользователем в диалоговое окно.
// Проверить и вывести на экран, x – отрицательное число, положительное или ноль.
//
// let x = prompt("Введите число");
// if (x.includes("-")) {
//     alert("Отрицательное число");
// } else if (x === "") {
//     alert("Пустая строка");
// } else {
//     alert("Положительное число");
// }
//
//
// let x = +prompt("Введите число");
// if (x < 0) {
//     alert("Отрицательное число");
// } else if (x > 0) {
//     alert("Положительное число");
// } else if (x === 0) {
//     alert("Ноль");
// } else {
//     alert("Не число");
// }

//task 2 - Создайте три переменные с любыми числовыми значениями.
// Используя условный оператор  и не используя логические, найдите минимальное число и отобразите на экране имя переменной и ее значение.
//
// let a = 79;
// let b = 13;
// let c = 15;
//
// if (a < b) {
//     if (a < c) {
//         alert(a);
//     } else {
//         alert(c);
//     }
// } else {
//     if (b < c) {
//         alert(b);
//     } else {
//         alert(c);
//     }
// }

// task 3 - У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt.
// В зависимости от общей суммы ваших сбережений вы можете полететь на Майорку или выпить пива.
// С помощью условного оператора определите ваши возможности и отобразите на экране в alert.
//
// let myMoney = +prompt("Сколько у Вас в кармане денег?");
// let friendMoney = +prompt("Сколько у Вашего друга в кармане денег?");
//
// let summary = myMoney + friendMoney;
//
// if (summary >= 20000) {
//     alert("Майорка ждет Вас");
// } else {
//     alert("Не расстраивайтесь, можно и в пивбаре отдохнуть");
// }

// task 4 - В переменную age запишите возраст человека.
// Если значение больше или равно 20 и меньше 27, в alert выводится “Выслать повестку”.
//
// let age = +prompt("Ваш возраст");
// (age >= 20 && age < 27) ? alert("Выслать повестку") :  alert("Не высылать повестку");

// task 5 - Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255.
// Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете.
//
// let numberBus = +prompt("Номер маршрутки");
// if (numberBus === 7 || numberBus === 225 || numberBus === 255) {
//     alert("Едете домой");
// } else {
//     alert("Ожидайте дальше");
// }

// task 6 - В переменную day записан текущий день недели.
// Если это не суббота и не воскресенье, выведите в alert сообщение о необходимости идти на работу.
//
// let day = prompt("Введите текущий день недели");
//
// if(day !== "Суббота" && day !== "Воскресенье"){
//     alert("Пора работать");
// }else {
//     alert("Отдыхайте")
// }

// task 7 - Запросите из prompt переменные x и y значения от -20 до 20.
// Если переменная x равна или меньше 1, а переменная y больше или равна 3 или меньше 0, то выведите сумму этих переменных, иначе выведите 'Неверно!'.
//
// let x = +prompt("Введите значение от -20 до 20");
// let y = +prompt("Введите значение от -20 до 20");
//
// if (x <= 1 && (y >= 3 || y < 0)) {
//     alert(x + y);
// } else {
//     alert("Неверно!")
// }

//task 8 - Если переменная x больше 2 и меньше 11, или переменная y больше или равна 6 и меньше 14, то увеличьте x на 2, иначе прибавьте к x число 5.
// Выведите новое значение переменной на экран.
//
// x = +prompt("Введите первое значение");
// y = +prompt("Введите второе значение");
// if ((x > 2 && x < 11) || (y >= 6 && y < 14)) {
//     alert(x + 2);
// } else {
//     alert(y + 5);
// }

// task 9 - Получите из prompt значение для имени пользователя.
// Выведите на экран приветствие.
// Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.
//
// let name = prompt("Введите Имя");
// if (name === "" || name === null) {
//     alert("Привет неопознанный енот");
// } else {
//     alert("Привет " + name);
// }

// task 10 - Создайте две переменные: greeting и lang.
// Переменная greeting – пустая строка.
// Переменная lang может принимать три значения: 'ru', 'en', 'de' (например, из prompt).
// Если она имеет значение 'ru', то в переменную greeting запишите приветствие на русском языке,
// если имеет значение 'en' – то на английском, если 'de' – на немецком.
// Выведите на экран приветствие в зависимости от значения переменной lang.
// Решите задачу через if-else и через switch-case.
//
// let greeting = "";
// let lang = prompt("Ваш родной язык (допустимые значения: ru, en, de)");
// if (lang === "ru") {
//     alert(greeting = "Привет");
// } else if (lang === "en") {
//     alert(greeting = "Hello");
// } else if (lang === "de") {
//     alert(greeting = "das Willkomm");
// } else {
//     alert("Недопустимое значение");
// }
//
//
// switch (lang) {
//     case "ru":
//         alert(greeting = "Привет");
//         break;
//     case "en":
//         alert(greeting = "Hello");
//         break;
//
//     case "de":
//         alert(greeting = "das Willkomm");
//         break;
//     default:
//         alert("Недопустимое значение");
// }

// task 11 - В переменной month хранится текущий месяц (new Date()).
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
//
// let date = new Date();
// let month = date.getMonth();
// if (month === 11 || month === 0 || month === 1) {
//     alert("Зима");
// } else if (month === 2 || month === 3 || month === 4) {
//     alert("Весна");
// } else if (month === 5 || month === 6 || month === 7) {
//     alert("Лето");
// } else {
//     alert("Осень");
// }

// task 12 - Переменная lang может принимать два значения: 'ru' и 'en'.
// Переменная day принимает значение от 0 до 6-ти.
// Если lang имеет значение 'ru', то в переменную result запишите название дня недели на русском языке в соответствии со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.).
// Если же lang имеет значение 'en' – то аналогично, но день недели будет на английском.
//
// let lang = prompt("Введите доступные значения 'ru' или 'en' ");
// let day = +prompt("Введите число от 0 до 6 ");
// let result = "";
// if (lang === "ru") {
//     if (day === 0) {
//         (result = "Воскресенье");
//     } else if (day === 1) {
//         (result = "Понедельник");
//     } else if (day === 2) {
//         (result = "Вторник");
//     } else if (day === 3) {
//         (result = "Среда");
//     } else if (day === 4) {
//         (result = "Четверг");
//     } else if (day === 5) {
//         (result = "Пятница");
//     } else if (day === 6) {
//         (result = "Суббота");
//     } else {
//         (result = "Не верно введено число");
//     }
//
// } else if (lang === "en") {
//     if (day === 0) {
//         (result = "Sunday");
//     } else if (day === 1) {
//         (result = "Monday");
//     } else if (day === 2) {
//         (result = "Tuesday");
//     } else if (day === 3) {
//         (result = "Wednesday");
//     } else if (day === 4) {
//         (result = "Thursday");
//     } else if (day === 5) {
//         (result = "Friday");
//     } else if (day === 6) {
//         (result = "Saturday");
//     } else {
//         (result = "Incorrect number");
//     }
// } else {
//  (result = "Введено недопустимое значение")
// }
// alert(result);


// ЦИКЛЫ

// Task 1 - Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for
//
// let dot = ".";
// let result = "";
//
// for (let i = 0; i < 5; i++) {
//     result = result + ".#"
// }
// alert(result + dot);

// Task 2 - Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного значения счетчика
//
// let result = "";
//
// for (let i = 0; i < 11; i++) {
//
//     if (i % 2 === 0) {
//         result = result + Math.pow(i, 2)+ ", ";
//     }
// }
//
// alert(result);

// Task 3 - Используя любой цикл, напишите программу, которая в консоли выводит текстовое поздравление.
// Программа поздравляет того, чье имя определяется в переменной username:
// Happy birthday to you
// Happy birthday to you
// Happy birthday dear {{username}}
// Happy birthday to you
//
// let username = prompt("Введите Ваше Имя");
// let result = "";
//
// for (let i = 0; i < 4; i++) {
//     if (i === 2) {
//         result = result + "Happy birthday dear " + username + "\n"
//     }else {
//         result = result + "Happy birthday to you\n"
//     }
// }
// alert(result);

// Task 4 - Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok
//
// let result = confirm("Согласен?");
//
// while (result === false){
//     result = confirm("Согласен?");
// }

// Task 5 - В окно prompt вводится число.
// Напишите цикл, в котором суммируются все нечетные числа до диапазона, введенного пользователем.
// Результат отобразите в окне alert.
//
// let range = +prompt("Введите число");
// let result = 0;
// for (let i = 0; i < range; i ++) {
//     if (i % 2 !== 0){
//         result = result + i;
//     }
// }
//
// alert(result);

// Task 6 - Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.9.
// Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла
//
// let counter = 0;
// while (true) {//бесконечный цикл
//     let random = Math.random();
//     counter = counter + 1;
//     if (random > 0.9){
//         alert("Случайное число, прервавшее цикл: "+ random + ", Количество итераций цикла: " + counter);
//         break;
//     }
//
// }

// Task 7 - Используя вложенные циклы, распечатайте в консоли значения таблицы умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4...
//
// for (let firstNumber = 1; firstNumber < 11; firstNumber++) {
//     for (let secondNumber = 1; secondNumber < 11; secondNumber++) {
//         let multiply = firstNumber * secondNumber;
//         console.log( firstNumber + "x" + secondNumber + "=" + multiply);
//     }
//
// }

// Task 8 - С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13...
//
// for (let f0 = 0, f1 = 1, sum = 0; f0 < 100; console.log(sum), sum = f0 + f1 );
//Слишком сложно для меня, увидела ответ, но сама бы нкогда не додумалась =(

// Task 9 - Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена.
// После выхода из цикла распечатайте количество введенных чисел, их общую сумму и среднее арифметическое.
//
// let number = +prompt("Введите число");
// let amount = 0; // кол-во циклов
// let sum = 0;
// let average =  0;
// while (number !== 0 ) {
//
//     amount = amount + 1;
//     sum = sum + number;
//     number = +prompt("Введите число");
//     average =  sum/amount;
// }
//
// alert("Количество введенных чисел: " + amount + ";\nОбщая сумма: " + sum +";\nСреднее арифметическое: " + average+ ";");

// Task 10 - Напишите проверку пароля, введенного пользователем (заведомо определите пароль).
// Если введенный пароль правильный, то программа выдает сообщение “Вы успешно авторизованы”.
// Если пароль неправильный, программа снова выдает запрос пароля – до тех пор, пока пользователь не введет правильный пароль или не нажмет Отмена.
// В случае отмены авторизации, выдать окно подтверждения с текстом: “Вы уверены, что хотите отменить авторизацию?”.
// Если ответ утвердительный, тогда выдать сообщение “Вы отменили авторизацию”, если ответ отрицательный, тогда снова выдать запрос пароля
//
// let password = "";
// let truePassword = "3";
// while (password !== truePassword) {
//     password = prompt("Введите пароль");
//     if (password === truePassword) {
//         alert("Вы успешно авторизованы");
//         break;
//     } else if (password === null) {
//         let cancel = confirm("Вы уверены, что хотите отменить авторизацию?");
//         if (cancel === true) {
//             alert("Вы отменили авторизацию");
//             break;
//         } else {
//             continue;
//         }
//     } else {
//         continue;
//     }
// }

// Task 11 - Напишите цикл от 1 до 50, в котором будет выводиться поочередно числа от 1 до 50, но есть условия:
// - если число делится на 3 без остатка, то выводить не это число, а слово «Fizz»;
// - если число делится на 5 без остатка, то выводить не это число, а слово «Buzz»;
// - если число делится и на 3 и на 5 без остатка, то выводить не это число, а слово «FizzBuzz»;
//
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         alert("FizzBuzz\n" + "Число: " + i);
//     } else if (i % 5 === 0) {
//         alert("Buzz\n" + "Число: " + i);
//     } else if (i % 3 === 0) {
//         alert("Fizz\n" + "Число: " + i);
//     }
// }





































