function questionMarks(str) {
    let regularExpression = new RegExp("[0-9?]", "g");

    const array = str.match(regularExpression);

    let numbers = [];

    for (let i = 0; i < array.length; i++) {

        let num = parseInt(array[i]);

        for (let index = i + 1; index < array.length; index++) {

            let number = parseInt(array[index]);

            if (num + number === 10) {
                numbers.push([num, number]);
                break;
            }
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        
        let numersAndQuestionMarks = `${numbers[i][0]}???${numbers[i][1]}`;

        if (array.join("").indexOf(numersAndQuestionMarks) !== -1) {

            return "true"
        }
    }

    return "false"
}
