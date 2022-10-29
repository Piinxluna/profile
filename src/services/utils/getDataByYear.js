export default function getDataByYear(data) {
  const is2020 = (value) => value.year === 2020;

  var dataIn2020 = data.filter(filterByYear);
  var dataIn2021 = data.filter(filterByYear);
  var dataIn2022 = data.filter(filterByYear);
  var yearList = [
    {
      year: 2020,
      data: dataIn2020,
    },
    {
      year: 2021,
      data: dataIn2021,
    },
    {
      year: 2022,
      data: dataIn2022,
    },
  ];
  return yearList;
}

function filterByYear(data, year) {
  if (data.year === year) {
    return data;
  }
  return null;
}
