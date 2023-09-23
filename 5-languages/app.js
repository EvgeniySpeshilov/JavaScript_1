// Задаём переменную  окна ввода языка. Используем prompt
const greetingLanguage = prompt('Выберите язык для общения: ru, en или de');

//основной код, для перебора вариантов используем switch

  switch(greetingLanguage) {
	case 'en':
    case 'En':
	case 'EN':
		console.log('Hello my friend!');
break;
    case 'ru':
    case 'Ru':
	case 'RU':
		console.log('Привет, мой друг!');
break;
    case 'de':
    case 'De':
	case 'DE':
		console.log('hallo, mein Freund!');
break;
    default:
		console.log('Я вас не понял, проверьте раскладку и повторите попытку.')	
}
