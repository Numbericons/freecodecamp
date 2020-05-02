function sym(args) {
  let cnt = {};
  for (let z=0; z < arguments.length; z++) {
    let curArg = arguments[z].sort((a,b) => a - b);
    for (let k=0; k < curArg.length; k++) {
      if (curArg.indexOf(curArg[z]) !== k) continue;
      cnt[curArg[k]] ? cnt[curArg[k]] +=1 : cnt[curArg[k]] = 1; 
    }
  }
  return Object.keys(cnt).filter(key=> cnt[key] === 1).sort((a,b) => a - b).map(el => parseInt(el));
}

sym([1, 2, 3], [5, 2, 1, 4]);
