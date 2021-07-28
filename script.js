// alert('Привет! это сложение чисел,') //всплывающее окно
// const a = prompt('Выведиьте число a')
// const b = prompt('Выведиьте число b')
// alert(Number(a) + Number(b)) //Выводит из СТРОКИ Число и СКЛАДЫВАЕТ

// let answer = confirm('Вам есть 18?') // Всплывающем окне задает окно и выдает TRUE или False
// alert(answer)

// Видео 00:17 мин
// console.log(window) // Глобальтный обьект в БРАУЗЕРЕ  видео 00:38. 00:49

// console.dir(document.children[0].children[1].children[0].textContent = 'Hello dear!') //С помощью ключей поменяли содерж-е эелем.
//
// let getAllHeaders = document.getElementsByTagName('h1') //Получили все элементы h1
// console.log(getAllHeaders)
//
// let getAllClasses = document.getElementsByClassName('description') //получает в виде массива
// console.log(getAllClasses)
//
// let getAllId = document.getElementById('subtitle') //для вспомогатель класс найдет единственный тот самы который нужет
// console.log(getAllId)
//
//
// //let getAllBySelector = document.querySelectorAll('h1')
// let getAllBySelector = document.querySelectorAll('.description') // Выводим через СЕЛЕКТОР класс  01:00 минута по назв класса или тега
// console.log(getAllBySelector)


//let getOneItem = document.querySelector('.description') //Обращение с классу
// let getOneItem = document.querySelector('#subtitle') //обращение к id
// console.log(getOneItem) //1 : 4 мин

// способ ИЗМЕНЕНИЕ содержимое элемента
//let getOneItem = document.querySelector('.description')
//1.console.dir(getOneItem) //С помощью находим класс вывести переменную  и в консоль найти класс
// getOneItem.innerText = 'Hello all'

// let getOneItem = document.querySelector('.description')
// getOneItem.innerHtml = '<button>Hello all </button>'


//dir - d dblt j,mtrnf


//18 строка в HTML

// const num1 = document.querySelector('#first')
// const num2 = document.querySelector('#second')
// const resultBtn = document.querySelector('#result')
// const out  = document.querySelector('#out')
// const minus  = document.querySelector('#minus')
// const increase  = document.querySelector('#increase')
// const  division = document.querySelector('#division')
// const  clr = document.querySelector('#clr')
//
// resultBtn.addEventListener('click', () => {
//     let sum = (Number(num1.value) + Number(num2.value))
//     out.textContent =  sum.toString()  // HTML обернули span и дали id(xчтоб не вовторял результат. И перемеенную sum превратили в СТРОКУ)
//     num1.value = ''
//     num2.value = ''
//
// })
// // Минусовая знчения
// minus.addEventListener('click', () => {
//     let sum = (Number(num1.value) - Number(num2.value))
//     out.textContent =  sum.toString()  // HTML обернули span и дали id(xчтоб не вовторял результат. И перемеенную sum превратили в СТРОКУ)
//     num1.value = ''
//     num2.value = ''
// })
// //значение input => value
//
// // Умножение
// increase.addEventListener('click', () => {
//     let sum = (Number(num1.value) * Number(num2.value))
//     out.textContent =  sum.toString()  // HTML обернули span и дали id(xчтоб не вовторял результат. И перемеенную sum превратили в СТРОКУ)
//     num1.value = ''
//     num2.value = ''
// })
//
// //Деление
// division.addEventListener('click', () => {
//     let sum = (Number(num1.value) / Number(num2.value))
//     out.textContent =  sum.toString()  // HTML обернули span и дали id(xчтоб не вовторял результат. И перемеенную sum превратили в СТРОКУ)
//     num1.value = ''
//     num2.value = ''
// })
//
// //clr
// clr.addEventListener('click', () => {
//     let sum = (Number(num1.value = '') , Number(num2.value = ''))
//     out.textContent =  sum.toString()  // HTML обернули span и дали id(xчтоб не вовторял результат. И перемеенную sum превратили в СТРОКУ)
//     num1.value = ''
//     num2.value = ''
// })




//task1 - Напишите функцию, которая вернет текст внутри первого тэга - a.
 //let getOneItem = document.querySelector('a').textContent
// console.log(getOneItem)

//task2 - Напишите функцию, которая вернет массив с текстами внутри тэгов - a.
// let getHeaderAll = document.querySelectorAll("a")
// getHeaderAll.forEach(function (entry) {
//     console.log(Array(entry.textContent))
// })

//task3 - Напишите функцию, которая вернет массив с текстами внутри тэгов элементов
// с классом nav__link__item
const getHeaderAll = Array.from( document.getElementsByClassName('nav__link__item')).map(it => it[getHeaderAll] {
    console.log(getHeaderAll.textContent)
})


//task4 - Напишите функцию, которая вернет массив со значениями атрибута
// class внутри тэгов элементов с классом nav__link__item
// let getClassesA = document.querySelectorAll('nav__link__item')
// console.log(getClassesA)

//task5 - Напишите функцию, которая вернет массив со значениями атрибута
// data-link внутри тэгов элементов с классом nav__link .
// let getClassesA = (document.getElementsByClassName('nav__link')[2])
// console.log(getClassesA)











