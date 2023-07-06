//Задание 1
// Выведите числа от 1 до 10 в консоль
console.log('Задание 1');

for (i = 1; i <= 10; i++)
    console.log(i);

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
console.log('Задание 2');

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
console.log(i);
    }
}
    

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
console.log('Задание 3');

for (i = 10; i >= 1; i--)
    console.log(i);
//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
console.log('Задание 4');

for (i = 1; i <= 10; i++) {
    const num = i * 5;
    console.log(i + " * 5 = " + num);
}
    
//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
console.log('Задание 5');

let sum5 = 0;
for (i = 1; i <= 100; i++) {
    sum5 += i;
}
    console.log('сумма чисел от 1 до 100 равна ' + sum5);
//Задание 6
// Выведите все элементы массива в консоль используя цикл for
console.log('Задание 6');

const array = [1, 2, 3, 4, 5];
for (i = 0; i < array.length; i++)
    console.log(array[i]);

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
console.log('Задание 7'); 


const numbers = [1, 2, 3, 4, 5];
let sum7 = 0;
for (i = 0; i < array.length; i++) {
    sum7 += numbers[i];
}
    console.log(sum7);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
console.log('Задание 8'); 

let animals = ["Кот", "Рыба", "Лемур"];
for (i = 0; i < animals.length; i++) {
    animals[i] += " - прекрасное животное";
}
console.log(animals);
//Задание 9
// Выведите символы в строке в консоль
console.log('Задание 9'); 

const str = 'Hello';
for (i = 0; i < str.length; i++)
console.log(str[i]);
//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
console.log('Задание 10'); 

for (let mas of array)
console.log(mas);

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
console.log('Задание 11');

const sentences = ['Hello, world!', 'How are you?'];
for (let i = 0; i < sentences.length; i++) {
const sentences = ['Hello, world!', 'How are you?'];
    const wordsSentences = sentences[i].split(' ');
    for (let j = 0; j < wordsSentences.length; j++) {
        console.log(wordsSentences[j]);
    }
}
//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
console.log('Задание 12');

let sumSeven = 0;
for (let number of numbers) {
    sumSeven += number;
}
console.log(sumSeven);
//Задание 13
// Выведите длину каждого слова из массива строк в консоль
console.log('Задание 13');

const list = ['apple', 'banana', 'cherry'];
for (let fruit of list)
console.log(fruit.length);
//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
console.log('Задание 14');

const words = ['Hello', 'world', '!'];
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase();
}
console.log(words);

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
console.log('Задание 15');

const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for (let char of greeting.toLowerCase()) {
    if (vowels.includes(char)) {
        vowelCount++;
    }
}
console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
//const words = ['Hello', 'world', '!'];
console.log('Задание 16');

const strWords = words.join(' ');

console.log(strWords);
//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
console.log('Задание 17');

let number17 = 1;
while (number17 <= 10) {
    console.log(number17);
    number17++;
}
//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
console.log('Задание 18');

let number18 = 10;
while (number18 > 0) {
    console.log(number18);
    number18--;
}
//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
console.log('Задание 19');

const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
let index = 0;

while (index < allNumbers.length) {
    if (allNumbers[index] <= 0) {
        allPositive = false;
        break;
        
    }
    index++;
}
console.log(allPositive);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
console.log('Задание 20');

const random = [2, 4, 6, -3, 8, 10];
let index20 = 0;
do {
    console.log(random[index20]);
    index20++;
} while (index20 < random.length && random[index20] >= 0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
console.log('Задание 21');

let number21 = 1;
do {
    if (number21 % 3 !== 0) {
        console.log(number21);
    }
    number21++
} while (number21 <= 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100


let sum22 = 0;

do {
    let input = prompt(`Задание 22
   Запросить у пользователя числа, 
   пока сумма введенных чисел не станет больше 100
   Введите число:`);
  let number22 = parseInt(input);
  sum22 += number22;
} while (sum22 <= 100);
//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
function changeH4BackgroundColor() {
    const h4Elements = document.getElementsByTagName('h4');
    
    for (let i = 0; i < h4Elements.length; i++) {
      h4Elements[i].style.backgroundColor = 'blue';
    }
  }
  
  changeH4BackgroundColor();

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
console.log('Задание 24');

let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';

for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet.charAt(randomIndex);
  }
  
  console.log(randomString);
