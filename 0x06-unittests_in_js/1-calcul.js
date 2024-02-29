function calculateNumber(type, a, b) {

    if (type === 'SUM')
	return Math.round(a) + Math.round(b);
    else if  (type === 'SUBTRACT')
	return Math.round(a) - Math.round(b);
    else if  (type === 'DIVIDE') {
	num = Math.round(a)
	denom = Math.round(b);
	if (denom !== 0)
	    return num / denom;
	return 'Error';
    }
};

module.exports = calculateNumber;
