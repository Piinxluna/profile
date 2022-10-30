export default function getDataByYear(data, year) {
  const checkYear = (value) => value.startDate.slice(-4) === year.toString();

  const filteredData = data.filter(checkYear);
  // console.log(filteredData);
  return filteredData;
}
