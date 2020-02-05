module.exports = function(text) {
    let counter = 1;
    return [...text].reduce((output, char, i) => {
        if (char !== text[i+1]) {
            output += char + counter;
            counter = 0;
        }
        counter++;
        return output;
    }, '');
}