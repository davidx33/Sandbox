// global declaration of a variable
var count = 0

var myDog = {
    name: "Brady",
    age: 3,
    color: "golden retriever type",                                                                                                                                                                                                   
};

var collection = [
    { 
        band: "U2",
        song: "no line on the horizon"
    },

    {
        band: "taylor swift",
        song: "red"

    }
];

var myStorage = {
    car: {
        inside: {
            glovebox: "hankerchief"
        }
    }
};

var collection = {
    
}
// go myStorage.car.inside.glovebox to get hankerchief

function cc(card) {
    switch(card) {
        case 2:
        case 5:
        case 6:
            count++;
            break
        case 7:
            count--;
            break    
    }
}

