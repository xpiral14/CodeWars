var countBits = function (n) {
  var binaryCodeReverse = '';
  var binaryCode = '';
  for (let i = 0; n > 1; i++) {
    binaryCodeReverse += n % 2;
    n = Math.trunc(n / 2)
  }
  if (n !== 0) {
    binaryCodeReverse += 1
  } else {
    binaryCodeReverse += 0
  }
  binaryCode = binaryCodeReverse.split('').reverse(); 
  return binaryCode.filter((bit) => {
    return bit === '1'
  }).length;
}

countBits(25)