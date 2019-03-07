module.exports = function getZerosCount(number, base) {
  let factorization = {}, primeFactors = [], zeros, numberZeros = 0, i, factDegree = 0;
  primeFactors = getPrimes(base);
  for (i = 0; base != 1;) {
    if (base % primeFactors[i] == 0) {
      factorization[primeFactors[i]] = ++factDegree;
      base = base / primeFactors[i];
    }
    else {
      i++;
      factDegree = 0;
    }
  }
  for (var key in factorization) {
    zeros = getZeros(number, key);
    zeros /= factorization[key];
    if (numberZeros > zeros || numberZeros == 0) {
      numberZeros = Math.floor(zeros);
    }
    }
  return numberZeros;
}
  
function getPrimes(max) {
  let sieve = [], i, j, primes = [];
  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}
  
function getZeros(number, primeNumber) {
  let zeros = 0;
  for (i = 1; number > Math.pow(primeNumber, i); i++) {
    zeros += Math.floor(number / Math.pow(primeNumber, i));
  }
  return zeros;
}