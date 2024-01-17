/*
Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.
Résous le sujet avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).
*/

const buildings = [3, 7, 8, 3, 6, 1]

const sunset = (array) => {
    let buildingWithSunset = 1
    let highestBuilding = array[array.length-1]
    
    for (let i = array.length-2; i >= 0; i--) {
        const currentBuilding = array[i];
        // console.log(`currentBuilding : ${currentBuilding}`)
        if (currentBuilding > highestBuilding) {
            buildingWithSunset++
            highestBuilding = currentBuilding
        }
    }
    return `Il y a ${buildingWithSunset} batiments avec vue sur le coucher de soleil.`
}

console.log(sunset(buildings))
