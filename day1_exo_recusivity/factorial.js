
// VALEUR FACTORIELLE
// Méthode itérative
const computeFactorialIt = (n) => {
    result = 1
    for (let i = 1; i <= n ; i++) {
        result = result * (i)
    }
    return result
}
console.log(`Methode itérative : ${computeFactorialIt(3)}`)


// Méthode récursive
const computeFactorialRec = (n) => {
    if (n == 1) {
        return 1
    }
    else {
        return n * computeFactorialRec(n-1)
    }
}
console.log(computeFactorialRec(5))




