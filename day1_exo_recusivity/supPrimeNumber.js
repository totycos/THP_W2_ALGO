// SUPERIOR PRIME NUMBER 
const findSupPrime = (n) => {
    const primeRecursive = (divisor) => {
        if (divisor === 1){
            return n
        }

        if (n % (divisor) === 0){
            return findSupPrime(n+1)
        }

        if (n % (divisor) !== 0) {
            return primeRecursive(divisor-1)
        }
    }

    if (n < 2) return false
    return primeRecursive(n-1)
}

console.log(findSupPrime(90))