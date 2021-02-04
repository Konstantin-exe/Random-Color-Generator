const randomColor = require('randomcolor');
const chalk = require('chalk');

const hueColor = process.argv[2];
const luminosityColor = process.argv[3];

const selectedColor = randomColor({
  hue: hueColor,
  luminosity: luminosityColor,
});

if (process.argv[2] === 'ask') {
  console.log('gimme color and luminosity');
} else {
  const amountColumn = 31;
  const amountRow = 9;
  let square = '';
  for (let row = 1; row <= amountRow; row++) {
    for (let column = 1; column <= amountColumn; column++) {
      if (column === 14 && row === 5) {
        square += selectedColor;
        column += 6;
      } else if (column > 3 && column < 29 && row > 3 && row < 7) {
        square += ' ';
      } else {
        square += '#';
      }
    }
    square += '\n';
  }
  console.log(chalk.hex(selectedColor)(square.replace(/\n+$/, '')));
}
