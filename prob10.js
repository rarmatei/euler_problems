/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.

prime = a * b

*/

function isPrime(number) {
  if(number < 0) {
    number*=-1;
  } else if(number === 0) {
    return false;
  }
  if(number === 1) {
    return false;
  }
  for(var i = 2; i<=Math.floor(Math.sqrt(number)); i++) {
    if(number%i===0) {
      return false;
    }
  }
  return true;
}

expect(isPrime(25)).toBe(false);
expect(isPrime(13)).toBe(true);
expect(isPrime(1)).toBe(false);
expect(isPrime(0)).toBe(false);
expect(isPrime(2)).toBe(true);
expect(isPrime(3)).toBe(true);
expect(isPrime(4)).toBe(false);
expect(isPrime(-1)).toBe(false);
expect(isPrime(-2)).toBe(true);
expect(isPrime(-25)).toBe(false);

function sumOfSmallerThanNPrimes(n) {
  var sum = 0;
  for(var i = 2; i<n; i++) {
    if(isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfSmallerThanNPrimes(2000000));
