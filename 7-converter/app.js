
const amountOffunds = 10000;
const curencyOffunds = 'rub';  // "rub" 
const targetCurency = 'cny';     // вводить можно usd, eur, cny /

function curencyConverter(amountOffunds, curencyOffunds, targetCurency) {
	if (curencyOffunds === 'rub') { 
		switch (targetCurency) {
		case 'usd':                                        // if (targetCurency === 'usd')
			const priseUSD = (amountOffunds / 98);
			return `${priseUSD} ${targetCurency}`;
		case 'eur':
		    const priseEUR = (amountOffunds / 103);
	        return `${priseEUR} ${targetCurency}`;
	    case 'cny':
		    const priseCNY = ((amountOffunds / 132) * 10);
	        return `${priseCNY} ${targetCurency}`;
		
		default:
		    return   'Null';
		} 
	} else {
		console.log('Null');
	}
}  	
console.log(curencyConverter(amountOffunds, curencyOffunds, targetCurency));



