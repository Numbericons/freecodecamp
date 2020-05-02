function compArrs(arr1, arr2) {
  let cnt = {};
  let retArr = [];
  const len = arr1.length > arr2.length ? arr1.length : arr2.length;

  for (let z = 0; z < len; z++) {
    if (arr1[z]) {
      if (!arr2.includes(arr1[z]) && !retArr.includes(arr1[z])) retArr.push(arr1[z]);
      if (!retArr.includes(arr1[z]) && !arr2.includes(arr1[z])) retArr.push(arr1[z]);
      if (arr2[z] && !retArr.includes(arr2[z]) && !arr1.includes(arr2[z])) retArr.push(arr2[z]);
    } else {
      if (!retArr.includes(arr2[z]) && !arr1.includes(arr2[z])) retArr.push(arr2[z]);
    }
  }
  return retArr.sort((a, b) => a - b);
}

function sym(args) {
  let retArr = arguments[0];
  for (let z=1; z < arguments.length; z++) {
    retArr = compArrs(retArr, arguments[z]);
  }
  return retArr;
}

// sym([1, 2, 3], [5, 2, 1, 4]);
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) //1,4
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);