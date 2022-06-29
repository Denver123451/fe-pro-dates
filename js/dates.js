// Функция состоит из двух аргументов и должна вернуть день недели. В первый
// мы передаем объект даты и вторым аргументом язык(доступно либо 'en' либо 'ru')
// и функция должна вернуть день недели словом в зависимости от языка. Очень круто,
// если выйдет сделать это ОДНОЙ строкой.
const getDay = (date, lang) =>
  date
    .toLocaleString(lang, { weekday: 'long' })
    .split('')
    .map((el, id) => (id === 0 ? el.toUpperCase() : el))
    .join('');

// Принимает объект даты, и должно вернуть компоненты даты в виде строки.
// Вид должен быть такой 12:02(часы и минуты), то есть если у вас одно число на одном из
// компонентов, то добавляем 0 перед ним
const formatTime = (date) =>
  date.toLocaleTimeString('ru', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

/*
Напишите функцию getLastDayOfMonth(year, month), 
возвращающую последнее число месяца. Иногда это 30, 31
или даже февральские 28/29.
Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/
function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

module.exports = {
  getDay,
  formatTime,
  getLastDayOfMonth,
};
