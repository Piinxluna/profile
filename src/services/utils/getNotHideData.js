export default function getNotHideData(datas) {
  const isNotHide = (value) => value.isHide === false;

  const filteredData = datas.filter(isNotHide);
  // console.log(filteredData);
  return filteredData;
}
