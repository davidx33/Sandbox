// function updateRecord(id, prop, value) {
//     if (value === "") {
//         delete collection[id][prop];
//     }
//     // no need for ; after each bracket
//     else if (prop === 'track') {
//         collection[id][prop] = collection[id][prop] || [];
//         collection[id][prop].push()
//     }
//     return collection;
// }

function freezeObj() {
    const MATH_CONSTANTS = {
        PI = 3.14
    };
    // you do not want this to change so use object.freeze

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch ( ex ) {
        console.log(ex)
    }

    return MATH_CONSTANTS.PI

}

// turn a normal function into an arrow function

const myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

const myCat = (arr1, arr2) => {
    return arr1.concat(arr2);
};