export default function hasValuesFromArray(set, array) {
  const arraySet = [...new Set(array)];
  for (const item of arraySet) {
    if (![...set].includes(item)) return false;
  }
  return true;
}
