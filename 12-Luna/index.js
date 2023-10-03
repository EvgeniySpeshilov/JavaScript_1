// написать функцию проверки номера карты алгоритмом Луна.
// В функцию передаётся карта: 4561-2612-12-34-5464, а функция
// возвращает true, если карта проходит алгоритм и false, если нет.

// В git создать папку: 12-luna

const cardBank = '4561-2612-1234-5464'; // не пройдет проверку
const cardBank1 = '4561-2612-1234-5467'; // должна пройти провекру
const arr = [];

function checkingCard(num) {
	num.trim(' ');
	num = num.replaceAll('-', '');
		for (let i = 0; i < num.length; i++) {
			if (i % 2 == 0) {
      			if (num[i]*2 < 9) {
       				arr.push(num[i]*2);
      			} else {
        			arr.push(num[i]*2-9);
        		}
    		} else {
      			arr.push(num[i]);                   
    		}
  		}
  		return arr.reduce( (accumulator, currentValue) => (accumulator + currentValue) % 10 == 0);
		
}
console.log(cardBank);
console.log(checkingCard(cardBank))
console.log(cardBank1);
console.log(checkingCard(cardBank1))

