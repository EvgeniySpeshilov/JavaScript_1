const arr = [1, 40, -5, 10, 0, 7, 27, -10];

function boobleSort(arr) {                  // Задаем  функцию.

for (let i = 0; i < arr.length; i++) {      // Вызываем цикл сравнения столько раз, сколько элементов массива
for (let j = i; j < arr.length; j++) {      // Проходим по всем элементам массива
	if (arr[i] < arr[j]) { 
		                                    // сравниваем 2 соседних элимента
		let temp = arr[i];                  // после сравнения 2х элементов, 
		arr[i] = arr[j];                    // меняем их местами.
        arr[j] = temp; 
	   }   
    } 
 }
    return arr; 
}	

console.log(boobleSort(arr));
