export default function getDataByCategory(datas, cateName) {
  const isCate = (value) => value.categories === cateName;

  const categorizedData = datas.filter(isCate);
  // console.log(categorizedData);
  return categorizedData;
}
