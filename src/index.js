const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let codedLetters = {};
    let exprArr = expr.split(""); 
    let numberOfLetters = expr.length / 10;
    for(let i = 0; i < numberOfLetters; i++) {
        let from = i*10;
        let until = from + 10;
        codedLetters[i+1] = exprArr.slice(from, until).join("");
    }
    for(let i in codedLetters) {
        if (codedLetters[i].indexOf(1) !== -1) {
            let from = codedLetters[i].indexOf(1);
            codedLetters[i] = codedLetters[i].slice(from);
        }
    }
    for(let i in codedLetters) {
        while(codedLetters[i].includes('10')) {
            codedLetters[i] = codedLetters[i].replace('10', '.');
        }
    }
    for(let i in codedLetters) {
        while(codedLetters[i].includes('11')) {
            codedLetters[i] = codedLetters[i].replace('11', '-');
        }
    }
    for(let i = 1; i <= numberOfLetters; i++) {
        if(codedLetters[i] == '**********') {
            result = result + ' ';
        } else {
            result = result + MORSE_TABLE[codedLetters[i]];
        }
    }
    return result;
}

module.exports = {
    decode
};