const columns = 25; // because lazy math elsewhere, these *must* be odd
const rows = 19; // because lazy math elsewhere, these *must* be odd
const cells = Array(columns * rows).fill(null);
const center = Math.floor(columns * (rows / 2));
const center2 = Math.floor(columns * (rows / 2)+1);
const center3 = Math.floor(columns * (rows / 2)+2);
const cardWidth = 100;
const cardHeight = 140;
const boardWidth = (cardWidth+2) * columns;
const boardHeight = cardHeight * rows;
 

let numOfCards = -1; 
const getCardLocation = () => Math.floor(columns * (rows / 2) + numOfCards++);

module.exports = {
  columns,
  rows,
  cells,
  center,
  center2,
  center3,
  cardWidth,
  cardHeight,
  boardWidth,
  boardHeight,
  getCardLocation, 
};
