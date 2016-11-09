var colout = require('colout');
var readline = require('readline');
var fs = require('fs');

var pathFile = process.argv.slice(2)[0] || 'log.txt';

// buffer of asks for write to file
var bufferString = '';
function addToBuffer(element) {
    bufferString += element;
}

// config readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'OHAI> '
});

// switcher for choose from user
colout.cyan("Input 'close' for exit").endl();
colout.cyan("Input '1' or '0' for GAME").endl();

rl.prompt();
rl.on('line', (line) => {
    switch (line.trim()) {
        case '1': {
            if (randomInteger(0, 1) == 1) {
                colout.green('You winner').endl();
                addToBuffer(1);
            } else {
                colout.red('You lose').endl();
                addToBuffer(0);
            }
            break;
        }

        case '0': {
            if (randomInteger(0, 1) == 0) {
                addToBuffer(1);
                colout.green('You winner').endl();
            } else {
                colout.red('You lose').endl();
                addToBuffer(0);
            }
            break;
        }
        case 'close':
            rl.close();
            break;
        default:
            colout.yellow(`Please input only '1' or '0'. Bad input - '${line.trim()}'`).endl();
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log('GOOD BYE');
    appendBufferToFile(pathFile, bufferString);
    process.exit(0);
});

// return random number from min to max
function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;
}

// write data to file
function appendBufferToFile(pathFile, data) {
    fs.appendFileSync(pathFile, data);
}