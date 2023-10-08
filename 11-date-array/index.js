let arr = ['01-12-2022', '12/июня/2023', 'text', '01/09/2021', '51/12/2023', '11/06/2021'];

function transformDateStringToArray(dateString) {
    let [month, day, year] = dateString.split('/');

    if (!year) {
        [day, month, year] = dateString.split('-');
    }

    if (!year || isNaN(day) || isNaN(month) || isNaN(year)) {
        return null
    }
    if ( day <= 0  || month <= 0  || day > 31 || month > 12) {
    	return null
	}
    return [day, month, year];
}

let dateArrayFilter = arr
.filter((dateArray) => transformDateStringToArray(dateArray))
console.log(dateArrayFilter)
