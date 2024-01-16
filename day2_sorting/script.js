const fs = require('fs');

const fileName = process.argv[2];


// ERROR MANAGMENT : Check if existing file
try {
    if (!fileName) {
        throw new Error('Veuillez spécifier le nom du fichier en argument.');
    }

    if (!fs.existsSync(fileName)) {
        throw new Error(`Le fichier "${fileName}" n'existe pas.`);
    }
} catch (conversionError) {
    console.error(conversionError.message);
}


// READIND file
fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return;
    }

    // ERROR MANAGMENT : Check file presence
    try {
        if (typeof data == 'undefined') {
            throw new Error(`Le fichier est vide.`);
        }

    } catch (conversionError) {
        console.error(conversionError.message);
    }


    // PARSE DATA TO AN ARRAY
    const parsedData = data.split(' ')


    // ERRORS MANAGMENT : Check if value is an integer
    parsedData.forEach((element) => {
        try {
            const integerValue = parseInt(element);

            if (isNaN(integerValue)) {
                throw new Error(`L'element '${element}' du fichier n'est pas un nombre entier valide.`);
            }

        } catch (conversionError) {
            console.error(conversionError.message);
        }

    })


    // CONVERT STRING NUMBERS TO REAL NUMBERS
    parsedData2 = parsedData.map(element => parseInt(element, 10))
    console.log(parsedData2)
    
        // SORTING FUNCTIONS
        // ### Bubble sort ###
        const bubbleSort = (data, dataLength) => {
            let complexity = 0
    
            if (dataLength === 1) return result
    
            const recursive = (data, dataLength) => {
                if (dataLength === 1) {
                    const result = `Tri à bulle: ${complexity} comparaisons - [${data.join(', ')}]`
                    return result
                }
    
                for (let i = 0; i < dataLength - 1; i++) {
                    if (data[i] > data[i + 1]) {
                        let toMoveBefore = data[i + 1]
                        data[i + 1] = data[i]
                        data[i] = toMoveBefore
                    }
                    complexity++
                }
                return recursive(data, dataLength - 1)
            }
    
            return recursive(data, dataLength)
        }
    
        console.log(bubbleSort(parsedData2.slice(), dataLength = parsedData2.length))

    // ### Insertion sort ###
    const insertionSort = (data) => {
        const length = data.length;
        let complexity = []

        for (let i = 1; i < length; i++) {
            let currentElement = data[i];
            let j = i - 1;

            while (j >= 0 && data[j] > currentElement) {
                data[j + 1] = data[j];
                j--;
                complexity++
            }

            data[j + 1] = currentElement;
        }

        return `Tri rapide: ${complexity} comparaisons - [${data.join(', ')}]`;
    };

    console.log(insertionSort(parsedData2.slice()))

    
        // ### Selection sort ###
        const selectionSort = (data, dataLength) => {
            let complexity = 0
    
            for (let i = 0; i < dataLength - 1; i++) {
                let currentValue = data[i]
                let min = data[i]
                for (let j = i + 1; j < dataLength; j++) {
                    if (data[j] < min) {
                        min = data[j]
                    }
                    complexity++
                }
                let toMove = min
                data[data.indexOf(min)] = currentValue
                data[data.indexOf(currentValue)] = toMove
            }
            const result = `Tri par selection : ${complexity} comparaisons - [${data.join(', ')}]`
            return result
        }
    
        console.log(selectionSort(parsedData2.slice(), dataLength = parsedData2.length))
    
    
        // ### Quick sort ###
        const quickSort = (data) => {
            let comparisons = 0;
    
            const recursive = (data) => {
                if (data.length <= 1) {
                    return { sortedArray: data, comparisons };
                }
    
                const pivot = data[0];
    
                let smaller = [];
                let bigger = [];
    
                for (let i = 1; i < data.length; i++) {
                    comparisons++; // Incrementing comparisons for each comparison made
    
                    if (data[i] > pivot) {
                        bigger.push(data[i]);
                    } else {
                        smaller.push(data[i]);
                    }
                }
    
                const result = {
                    sortedArray: [...recursive(smaller).sortedArray, pivot, ...recursive(bigger).sortedArray],
                    comparisons
                };
    
                return result;
            };
    
            const result = recursive(data);
    
            return `Tri rapide: ${result.comparisons} comparaisons - [${result.sortedArray.join(', ')}]`;
        };
    
        console.log(quickSort(parsedData2.slice()))
    
});


