const findTheOldest = function(array) {
    const ages = array.reduce(function(accumulator, currentValue) {

        let ageObject = {}
        let birth = currentValue.yearOfBirth;
        let death = 0;

        if (currentValue.hasOwnProperty("yearOfDeath")) {
            death = currentValue.yearOfDeath;
        }
        else {
            death = new Date().getFullYear();
        }

        ageObject["name"] = currentValue.name;
        ageObject["age"] = death - birth;

        accumulator.push(ageObject);

        return accumulator;
    }, []);

    // const oldest = ages.sort(function(a,b) {
    //     if (a.age > b.age) {
    //         return -1;
    //     }
    //     else {
    //         return 1;
    //     }
    // })

    const oldest = ages.sort((a,b) => a.age > b.age ? -1 : 1);

    return oldest[0];
};

// Provided solution much more efficient

// Do not edit below this line
module.exports = findTheOldest;
