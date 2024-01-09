export default function getStudentsByLocation(arr, city) {
  // return an array of objects whose location property is the same as city
  return arr.filter((obj) => obj.location === city);
}
