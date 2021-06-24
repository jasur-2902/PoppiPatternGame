const deck = [
  {
    cardName: "redSquare",
  },
  {
    cardName: "greenSquare",
  },
  {
    cardName: "blueSquare",
  },
  {
    cardName: "yellowSquare",
  },
];

const levelOne = [
  {
    cardName: "redSquare",
  },
  {
    cardName: "greenSquare",
  },
  {
    cardName: "blueSquare",
  },
  {
    cardName: "yellowSquare",
  },
];



const getRandomCard = (levelOne) => levelOne[Math.floor(Math.random() * levelOne.length)];


let randomPattern = []; 
let createPattern = () => {
  let random = []; 

  let element; 

  for(let i = 0; i<2; i++){
    element = levelOne[Math.floor(Math.random() * levelOne.length)]; 
    if(!hasDuplicate(random, element))
      random.push(element); 
  }

  return random;
}


let hasDuplicate = (array, element) => {

  for(let i in array){
    if (i == element)
      return true;
  }

  return false; 
}

randomPattern = createPattern(); 

console.log("Pattern", randomPattern);


module.exports = { 
  getRandomCard,
  randomPattern, 
  levelOne,
};
