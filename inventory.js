function stringSort(str1,str2) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';

  for (let z=0; z<str1.length; z++) {
    let idx1 = alpha.indexOf(str1[z]);
    let idx2 = alpha.indexOf(str2[z]);
    if (idx1 < idx2) return str1; 
    if (idx1 > idx2) return str2;
  }
  return str1;
}

function sortInv(arr) {
  return arr.sort((a,b) => { stringSort(a,b)
  });
}

function updateInventory(cur, nInv) {
  // All inventory must be accounted for or you're fired!
  return sortInv(cur);
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

//iterate through the new inventory
//  if we find the key (element 1) in the current inventory, update curInv[idx][0] adding the new goods
//  if we dont find the item in the current inventory, add the entire sub array

//sorting
//  helper function that sorts based on string
//    iterate across one of the strings and see if they have same idx in an alphabet variable
//      return the lower indexed char containing string if not
//      otherwise continue
