export default function getDataById(datas, id) {
  const isFiltered = (value) => value.id === id;

  const filteredData = datas.find(isFiltered);
  // console.log(filteredData);
  return filteredData;
}
