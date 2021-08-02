'use strict';

//Task 3

let btn_search = document.querySelector('.btn_search');
let field_input = document.querySelector('.field_input');

btn_search.addEventListener('click', function (event) {
  event.preventDefault();
  alert(field_input.value);
});

//Task 4

/* let btn_search = document.querySelector('.btn_search');
let field_input = document.querySelector('.field_input');

btn_search.addEventListener('click', function (event) {
  event.preventDefault();
  if (field_input.value == 'google') {
    alert('Yandex круче. Но это не точно');
  } else {
    alert(field_input.value);
  }
}); */

//Task 5

/* let arrObj = [
  { name: 'Alex', age: 20 },
  { name: 'Bob', age: 45 },
  { name: 'Ann', age: 33 },
];

let btn_search = document.querySelector('.btn_search');

btn_search.addEventListener('click', function (event) {
  alert(arrObj[0].name);
}); */

//Task 6

/* function superSum(a, b) {
  alert(a + b);
}
superSum(2, 5); */

//Task 7

/* let arr = [2, 5, 7, 1, 11, 0];
let max = findMax(arr);
let min = findMin(arr);
alert(max);
alert(min);

function findMax(array) {
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if (max < array[i]) max = array[i];
  }
  return max;
}

function findMin(array) {
  var min = array[0];
  for (var i = 1; i < array.length; i++) {
    if (min > array[i]) min = array[i];
  }
  return min;
} */

//Другие варианты решения Task 7

/* let arr = [2, 5, 7, 1, 11, 0];
let max = Math.max(...arr);
alert(max);

let arr = [2, 5, 7, 1, 11, 0];
let min = Math.min(...arr);
alert(min); */

// Task 8

/* let a = 'XXX';
let b = 'YYY';
let c = a;
a = b;
b = c;
console.log(a);
console.log(b); */

//Task 9

/* let btn_search = document.querySelector('.btn_search');
let field_input = document.querySelector('.field_input');

btn_search.addEventListener('click', function (event) {
  event.preventDefault();
  if (field_input.value == 'google') {
    sleep(3000).then(() => {
      alert('Yandex круче. Но это не точно');
    });
  } else {
    alert(field_input.value);
  }
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
} */
