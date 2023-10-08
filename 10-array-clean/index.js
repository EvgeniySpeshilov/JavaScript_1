const  array = [-1, 2, 34,-5, 23, 78, -7, -3];
// Функция проверки отрицательности чисел
function checkingPositiveNumbers(num) {
    if (num > 0) 
		return false                  
		else return true; 
}

// Функция запуска проверки чисел массива и филтрации
function filteredArray(array, checkingPositiveNumbers) {       
	for (let i = 0; i < array.length + 1; i++) { 
		console.log(i)        
       if (checkingPositiveNumbers([i]) == false )
		return  array.pop([i])
	} console.log(array)
}
console.log(filteredArray(array, checkingPositiveNumbers))

// функция высшего порядка. Выводит отфильтрованный массив с положительными числами

