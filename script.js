// // Задан массив целых чисел. Написать функцию нахождения максимального элемента в массиве.//

// const arr = [1,5,14,44,19,25,64,31]

// //  простое решение  
// // let max = Math.max(...arr)
// // console.log(max)


// // Функция

// let max = maxNum(arr)

// function maxNum(arr){
//    let max = arr[0]; 
//    for (let i = 0; i < arr.length; i++) {
      
//        if (max < arr[i]) max = arr[i]; 
//    }
//    return max;
// }

// console.log(max);



// // Реализовать функцию сортировки пузырьком


// const arr = [1,5,14,44,19,25,64,31]

// function sort(arr) {
//    let result = [...arr]
//    for (i = 0; i < result.length; i++) {
//       for(j = 0; j < result.length; j++) {
//          if(result[j] > result [j + 1]) {
//             let temp = result[j]
//             result[j] = result [j +1]
//             result[j + 1] = temp
//          }
//       }
//    }
//    return result
// }

// console.log(sort(arr));
   


// Определить, является ли введенная строка палиндромом.

// Примеры палиндромов:
// Лёша на полке клопа нашёл 
// А роза упала на лапу Азора
// Аргентина манит негра

// let str = prompt('Введите строку:');

// function palindrome(str) {
//     str = str.toLowerCase().replace(/\s/g,'');
//     return str === str.split('').reverse().join('');
// }

 
// // function palindrome2(str) {
// //     const len = Math.floor(str.length / 2);
// //     for (let i = 0; i < len; i++)
// //       if (str[i] !== str[str.length - i - 1]) {
// //         return false;
// //       }
// //     return true;
// //   }
 
// console.log(palindrome(str));



// Задан упорядоченный по возрастанию массив. Реализовать алгоритм бинарного поиска для нахождения значения в массиве. 
// Вернуть номер элемента или уведомить что такого элемента нет. 

// const arr = [1,2,3,4,5,6,7,8,9];


// function searchNumber(arr, el) {
//    for(let i = 0; i < arr.length; i++) {
//       if(arr[i] === el) {
//          return i
//       }
//    }
//    return -1
// }
// console.log(searchNumber(arr, 7))



//  Это задача на знание БД и SQL.
// В качестве решения, нарисуйте необходимую структуру БД и напишите SQL запрос в текстовом виде.
 
// Даны таблицы:
// products (id, name, price) - продукты в магазине электроники
// tags (id, name) - категории товаров к которым может относиться тот или иной продукт
// Как должна выглядеть связь между продуктами и тэгами?
// Напишите запрос который найдет продукты с более чем 10-ю тегами.


// products

// id	         name	                     	      price
// 1	         Телевизор	             	         43200.00
// 2	         Печь	                           	3200.00
// 3	         Холодильник	                      	12000.00
// 4	         Роутер	                         	1340.00
// 5	         Компьютер	                       	26150.00

// Tags

// id                   name
// 1                    телефоны
// 2                    телевизоры
// 3                    холодильники
// 4                    клавиатуры
// 5                    стиральные машинки



// SELECT products.id, products.name
// FROM products
// FULL OUTER JOIN Tags ON products.productsID=tags.tagsID
// ORDER by products.productsName;