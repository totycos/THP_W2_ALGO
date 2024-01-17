/*
Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.
Résous le sujet en ne faisant qu'un seul passage sur ta liste.
*/

// SIMPLE COPIE DE exercice3 qui répond aussi à cette consigne...

const list = [10, 15, 3, 7]
const k = 17 // true
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