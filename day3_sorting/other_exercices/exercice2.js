/*
Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.
Résous le sujet avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.
*/

const buildings = [3, 7, 8, 3, 6, 1]

const sunset = (array) => {
    let buildingWithSunset = 1
    let view = false

    for (let i = 0; i < array.length; i++) {
        if (view === true) {
            buildingWithSunset++
        }

        for (let j = i+1; j < array.length; j++) {
            view = true
            const building1 = array[i];
            const building2 = array[j];
            // console.log(`${building1} > ${building2} ? `)
            if (building1 < building2) {
                view = false
                break
            }
            
        }
    }

    return `Il y a ${buildingWithSunset} batiments avec vue sur le coucher de soleil.`
}

console.log(sunset(buildings))
