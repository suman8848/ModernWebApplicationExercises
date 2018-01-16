String.prototype.filterWords = function (arrayOfStrings) {
    var splittedString = this.split(" ");
    let starString = "";
    let count = 0;
    let lengthCounter = 0;
    for (let x of splittedString) {
        lengthCounter++;
        for (let y of arrayOfStrings) {

            if (x === y) {
                starString += " ***";
                count = 1;
                if (splittedString.length === lengthCounter) {
                    count = 2;
                }
            }

        }

        if (count === 1) {
            count = 0;
            continue;
        } else if (count === 2) {
            starString = starString + " ";
        } else {
            starString = starString + " " + x;
        }

    }
    return starString;
}
console.log(" I Hello am  test Suman ".filterWords(['test', 'Hello']));