//positive exponential numbers only
function exponential(base, exponent) {
    if (exponent == 0)
      return 1;
    else
      return base * exponential(base, exponent - 1);
  }
console.log(exponential(9,3));

