let Array = [];
const  resultArray = [];

// Функция удаления из массива отрицательных значений
function filteredValue(Array) {
    for(let i = 0; i < Array.length; i++) {         //  запуск цикла перебора элементов массива
       if (Array[i] >= 0) 
	   {
	     resultArray.push(Array[i]);                  // усли выполняется условие, тогда отправляем значение в новый массив
	     console.log(Array[i],'false');                 // выводи на эран статус false 
	   } 
	   else 
	   {
		 console.log(Array[i],'true');                   // выводи на эран статус true если не выполнено условие
	   }
	}
	return resultArray;
}

// функция высшего порядка. Выводит отфильтрованный массив с положительными числами

function filtArray(Array, fn) {       
	
    const resultFn = fn(Array);
	
	return resultFn;
			
}
//запускаем функцию и выводим результат

const resultFn = filtArray([-1, 2, 34,-5, 23, 78, -7, -3, 0], filteredValue);
console.log(filteredValue.name)               // Имя функции которая используется в функции высшего порядка
console.log(resultFn)	