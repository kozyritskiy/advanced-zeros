module.exports = function getZerosCount(number, base) {

  let j = 1,
      i = 2,
      a = [],
      copyNumber = number;

  do {
    if (base % i === 0) {
      a[j] = i;
      j++;
      base = base / i;
    } else {
      i++;
    }
  } while (i < base);
  a[j] = i;
  let res = {};
  a.forEach(function (e) {
    res[e] = 1 + ~~res[e];
  });

  function sortObject(obj) {
    let arr = [];
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        arr.push({
          'base': prop,
          'degree': obj[prop]
        });
      }
    }
    return arr; 
  }
  let arr = sortObject(res),
      degreeOf = arr[arr.length - 1],
      zerosCount = 0,
      power = 1,
      denominator = 0;
  while (copyNumber > denominator) {
    denominator = Math.pow(+degreeOf.base, power);
    zerosCount += Math.floor(number / denominator);
    power++;
  }
  zerosCount /= degreeOf.degree;
  return Math.trunc(zerosCount);
}