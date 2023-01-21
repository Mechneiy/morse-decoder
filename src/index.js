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
      const Probel = { "**********": " " };
  const Key_morse = Object.keys(MORSE_TABLE);
  for (let i = 0; i < Key_morse.length; i++) {
    Probel[
      (
        "0000000000" + Key_morse[i].replace(/\./g, "10").replace(/\-/g, "11")
      ).slice(-10)
    ] = MORSE_TABLE[Key_morse[i]];
  }
  let text_test = "";
  for (let i = 0; i < expr.length; i = i + 10) {
    text_test = text_test + Probel[expr.substring(i, i + 10)];
  }
  return text_test;
}

module.exports = {
    decode
}
