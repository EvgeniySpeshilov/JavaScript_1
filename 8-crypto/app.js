
// функция шифрования пароля

const Array = [];
let variable = {};                    // Создаём обект, куда будем помещать значения элементов из масива, которые будем удалять при шифровании


function  encryptor(password) {
    
	if (password.length > 7) {                      // Задаём длину пароля. Так как алгоритм работает на длину пароля от 7 символов
		encryptorPassword = password.split("");
   
		encryptorPassword.reverse("");
		
		const cell1 = encryptorPassword[2];         // Запоминаем символ или букву из пароля с адресом 2
			variable.encryptorCell1 = cell1;        // Помещаем в объект variable запомненые символы. Из этого объекта будем доставать эти значения в другой функции - decoder
			encryptorPassword[2] = '$';             // Заменяет элемент на с адресом 2 на"$" 
    	const cell2 = encryptorPassword[4];         // Запоминаем символ или букву из пароля с адресом 4
			variable.encryptorCell2 = cell2;        // Помещаем в объект variable запомненые символы. Из этого объекта будем доставать эти значения в другой функции - decoder
			encryptorPassword[4] = '&';             // Заменяет элемент массива с адресом 4 на "&"
		const cell3 = encryptorPassword[5];         // запоминаем символы , которые будут удалены из массива командой splice
		const cell4 = encryptorPassword[6];         // запоминаем символы , которые будут удалены из массива командой splice
	         
			variable.encryptorCell3 = cell3;        // Помещаем в объект variable запомненые символы. Из этого объекта будем доставать эти значения в другой функции - decoder
			variable.encryptorCell4 = cell4;        // Помещаем в объект variable запомненые символы. Из этого объекта будем доставать эти значения в другой функции - decoder
		encryptorPassword.splice(5,2);              // убирает из массива элементы с 4ый и 5ый
		encryptorPassword.unshift('@');             // добавляет в начало массиваадресом в масиве 5 и 6  "@"
		encryptorPassword.push('*');                //Добавляет  элемент массива 
	
		return console.log(`Зашифрованый пароль: ${encryptorPassword}`); // вывод зашифрованного пароля
      
	}else {	
		console.log('Короткий пароль, нужно больше 7 символов');  // Выводит сообщение если пароль меньше 7 символов
		} 
} 
 
//Запуск функции шифрования пароля

encryptor('Push47uer');  // Вводим от 7 символов

// Функция дешифрования 

function decoder(encryptorPassword, depassword) {           // Функция сверки пароля зашифрованнго  и правильного
    // Дешифруем пароль
	decryptedPassword = encryptorPassword.split("");
	decryptedPassword.splice(-1);                           // Удаление крайнего символа из массива зашифрованного пароля
	decryptedPassword.shift(); 	                            // Удаление первого символа из массива зашифрованого пароля
    decryptedPassword.splice(5, 0, variable.encryptorCell3);  //Модифицируем массив, и ранее удаленные элементы из пароля возвращаем на свои места [5].
	decryptedPassword.splice(6, 0, variable.encryptorCell4); //Модифицируем массив, и ранее удаленные элементы из пароля возвращаем на свои места. [6]
	decryptedPassword[2] = variable.encryptorCell1;         // Заменяет элемент на с адресом 2 на"$" 
	decryptedPassword[4] = variable.encryptorCell2;         // Заменяет элемент на с адресом 4 на"&" 
	decryptedPassword.reverse("");                          // Реверс символов масива, что бы получить правильные пароль
	
	    // Сверяем полученные элементы массивов
		passwordVerification = (decryptedPassword.length == depassword.length)   //Сверка паролей по длине массива
		&& decryptedPassword.every(function(element, index) {                    //Сверка поэлементно массивов
    	return element === depassword[index]; 
		})  
	
	return console.log('Сверка паролей: ' + passwordVerification);  // Вывод  результата сверки паролей	    
	      
	}

decoder('@re$7&uP*', 'Push47uer');