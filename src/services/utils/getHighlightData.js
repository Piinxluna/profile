export default function getHighlightData(datas) {
  const isHighlight = (value) => value.isHighlight === true;

  const filteredData = datas.filter(isHighlight);
  // console.log(filteredData);
  return filteredData;
}
