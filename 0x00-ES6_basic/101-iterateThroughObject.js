export default function iterateThroughObject(reportWithIterator) {
  /* reportWithIterator is an array of employee names */
  let allNames = '';
  for (const name of reportWithIterator) {
    if (allNames === '') { allNames = name; } else { allNames = allNames.concat(' | ', name); }
  }
  return allNames;
}
