export default function appendToEachArrayValue(array, appendString) {
    for (let idx of array) {
	idx = array.indexOf(idx);
	let value = array[idx];
	array[idx] = appendString + value;
    }

  return array;
}
