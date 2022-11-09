export default function getDataByYear(datas, year) {
  const checkYear = (value) => value.startDate.slice(-4) === year.toString();

  const filteredData = datas.filter(checkYear);
  // console.log(filteredData);
  return filteredData;
}
