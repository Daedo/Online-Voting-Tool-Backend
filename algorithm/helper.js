/**
* Helper Function
* Removes an entry from a staircase (row & column)
*/
exports.stairSplice = function(stair, index) {
  let size = stair[0].length+1;
  for (var i = 0; i < size; i++) {
    if(i < index) {
      stair[i].splice(index-(i+1),1);
    }
    if(i==index) {
      stair.splice(i,1);
      break;
    }
  }
  return stair;
}

/**
* Transforms a staircase back to the full majority matrix
*/
exports.getFullMargins = function(stair) {
  size = stair[0].length+1;

  let out = []
  for (var i = 0; i < size; i++) {
    let temp = []
    for (var j = 0; j < size; j++) {
      if(i<j) {
        temp.push(stair[i][j-(i+1)]);
      } else if(i>j) {
        temp.push(-stair[j][i-(j+1)]);
      } else {
        temp.push(0);
      }
    }
    out.push(temp);
  }
  return out;
}

/**
* Transfomrs a set of winning candidates into a list of degenerated lotteries
*/
exports.getWinnerLotteries = function getWinnerLotteries(winners,size) {
  if(typeof winners == "number") {
    return getWinnerLotteries([winners],size)
  }
  return winners.map(i => Array.from(new Array(size), (x,index) => index==i?1:0));
}
