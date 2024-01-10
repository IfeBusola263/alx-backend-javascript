export default function cleanSet(set, startString = '') {
  let mergedString = '';
  if (startString === '' || !(typeof startString === 'string')) return '';
  for (const item of set) {
    if (item !== undefined && item.startsWith(startString)) {
      const otherPart = item.slice(startString.length);
      mergedString = mergedString.concat('-', otherPart);
    }
  }
  return mergedString.trim().slice(1);
}
