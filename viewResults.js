var fs = require('fs');

var pathFile = process.argv.slice(2)[0] || 'log.txt';
if (fs.existsSync(pathFile)) {
    fs.readFile(pathFile, (err, data) => {
        if (err) throw err;
        var resultString = data.toString();

        console.log("all parts = " + allParts(resultString));
        console.log("all winParts = " + winParts(resultString));
        console.log("all loseParts = " + loseParst(resultString));
        console.log("Win Together = " + percentWin(resultString));

    });
} else console.log("NO such file");

// all parts
function allParts(resultString) {
    return resultString.length;
}

//all winParts
function winParts(resultString) {
    var winParts = 0;
    for (var value of resultString) {
        if (value == 1)winParts++;
    }
    return winParts;
}

//all loseParts
function loseParst(resultString) {
    var loseParst = 0;
    for (var value of resultString) {
        if (value == 0)loseParst++;
    }
    return loseParst;
}

// win Together
function percentWin(resultString) {
    var arrSymbol = resultString.split("");

    var winTogether = 0;
    if (arrSymbol[0] == 1) {
        winTogether++
    }
    for (var i = 0; i < resultString.length - 1; i++) {
        var start = i + 1;
        if(arrSymbol[start] == arrSymbol[i] && arrSymbol[start] == arrSymbol[0]) {
            winTogether++;
        }
    }
    return winTogether;
}
