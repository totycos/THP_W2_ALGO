/*
Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.
Résous le sujet avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).
*/

const list = [10, 15, 3, 7]
const k = 19 // true
// const k = 19 // false

const isKsumOfpair = (array, number) => {
    let seen = new Set();

    for (let i = 0; i < array.length; i++) {
        const complement = number - array[i];

        if (seen.has(complement)) {
            console.log(`comparisons = ${i}`);
            return true;
        }

        seen.add(array[i]);
    }

    console.log(`comparisons = ${array.length}`);
    return false;
};

console.log(isKsumOfpair(list, k));