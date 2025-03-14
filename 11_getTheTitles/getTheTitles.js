const getTheTitles = function(array) {

    // const titles = array.map(function(book) {
    //     return book.title;
    // })

    const titles = array.map(book => book.title);

    // const titles = array.reduce(function(accumulator, currentValue) {
    //     accumulator.push(currentValue.title);
    //     return accumulator;
    // }, [])

    return titles;
    
};

// Do not edit below this line
module.exports = getTheTitles;
