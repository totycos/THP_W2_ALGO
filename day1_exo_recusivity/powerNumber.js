// PUISSANCE D'UN NOMBRE
//Méthode itérative
const computePowerIt = (n, p) => {
    result = n
    for (let index = 1; index < p; index++) {
        result = result * n
    }
    return result
}
console.log(computePowerIt(2,4))

// Méthode récursive
const computePowerRec = (n, p) => {
    if (p == 0){
        return 1
    }
    else{
        return n * computePowerRec(n,p-1)
    }
}
console.log(computePowerRec(3,5))


