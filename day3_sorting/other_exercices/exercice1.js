/*
Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.
Résous le sujet avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.
*/

const list = [10, 15, 3, 7]
const k = 17 // true
// const k = 19 // false

const isKsumOfpair = (array, number) => {
    let comparison = 0

    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            const element1 = array[i];
            const element2 = array[j];
            //console.log(`${element1} + ${element2} = ${element1+element2}`)
            if (element1 + element2 == number) return true
            comparison++
        }  
    }

    console.log(`comparisons = ${comparison}`)
    return false

}

console.log(isKsumOfpair(list, k))