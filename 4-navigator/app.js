// присвоим  для переменных координаты точки назначения
let addressLat =  50;
let addressLong = 50;

// зададим для переменных  координаты текущего положения пользователя
let positionLat = 12;
let positionLong = 7;

// назначим переменную для расчёта расстояния по формуле
const distance = Math. sqrt (((addressLat - positionLat) ** 2) + ((addressLong - positionLong) ** 2));

// расчет и вывод полученного растояния в консоль
console.log('Расчётное расстояние равно ' + distance + ' км');
