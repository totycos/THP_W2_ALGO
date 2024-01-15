// NOMBRE PREMIER ?
const isPrimeNumber = (n) => {
    const isPrimeRecursive = (divisor) => {
        console.log(`dans la boucle isPrimeRecursive : n : ${n}, divisor : ${divisor}`)
        console.log(`n % (divisor - 1) = ${n % (divisor - 1)}`)
        if (divisor === 1){
            return true
        }

        if (n % (divisor) === 0){
            return false
        }

        if (n % (divisor) !== 0) {
            return isPrimeRecursive(divisor-1)
        }
    }
    if (n < 2) return false
    return isPrimeRecursive(n - 1) 
}

console.log(isPrimeNumber(17))