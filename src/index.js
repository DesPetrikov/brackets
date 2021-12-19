module.exports = function check(str, bracketsConfig) {
	const pairsArr = bracketsConfig.map(el => el[0] + el[1]);
	const arrFromStr = str.split('')
	for(let i = 0; i < arrFromStr.length - 1; i += 1) {
		if(pairsArr.includes(arrFromStr[i] + arrFromStr[i + 1])){
			arrFromStr.splice(i, 2);
			i = -1;	
		}
	}
	return !arrFromStr.length
	
}
