// Тут мы задаем переменные, которыми м ожем менять изначальные данные.

let age = 18;
let hasLicence = true;  //  Говорит о наличии прав
let isDrunk = false;     //  Показывает что пьян, если true

// Основная строка кода , где проверяем все парамметры и если они выполняются, значит 'может'
const result = age >= 18 && hasLicence && !isDrunk;
console.log(`Человек управлять машиной : ${result ? 'может' : 'не может'}`);

