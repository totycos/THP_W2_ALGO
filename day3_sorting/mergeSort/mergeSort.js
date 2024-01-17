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



    // ##### MERGE SORT #####
    // #######################

    const mergeSort = (array) => {
        let comparisons = 0; 
    
        const merge = (left, right) => {
            let result = [];
            let leftIndex = 0;
            let rightIndex = 0;
    
            while (leftIndex < left.length && rightIndex < right.length) {
                comparisons++; 
    
                if (left[leftIndex] < right[rightIndex]) {
                    result.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    result.push(right[rightIndex]);
                    rightIndex++;
                }
            }
    
            return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
        };
    
        const recursiveSort = (arr) => {
            if (arr.length <= 1) {
                return arr;
            }
    
            const middle = Math.floor(arr.length / 2);
            const left = arr.slice(0, middle);
            const right = arr.slice(middle);
    
            return merge(recursiveSort(left), recursiveSort(right));
        };
    
        const sortedArray = recursiveSort(array);
    
        return `Tri fusion: ${comparisons} comparaisons - [${sortedArray.join(', ')}]`;
    };

    console.log(mergeSort(parsedData2.slice())) 

  



});


