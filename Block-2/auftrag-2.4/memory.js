document.addEventListener('DOMContentLoaded',() => {
 let tries = 0;
  const canton = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];

  const board = document.getElementById('board');
  const tiles = board.getElementsByClassName("tile")
  const revealdTiles = board.getElementsByClassName('Tile revealed');

  const checkWin= () => {
    if(Array.from(tiles).every(tile => tile.classList.contains("revealed"))){
      alert(`You won! in ${tries} turns`)
      tries = 0
    }
  }

  const checkTurn = (event) => {

    let tile = event.currentTarget;

    if (revealdTiles.length < 2) {
      Array.from(revealdTiles).forEach(otherTile => otherTtile.classList.remove("revealed"));
    }

    Array.from(revealdTiles).forEach(otherTile => {
      if (tile != otherTile && tile.children[0].src === otherTile.children[0].src) {

        tile.classList.add("found");
        otherTile.classList.add("found");
      } 
    });
    tile.classList.add("revealed");
    tries++;

    checkWin()
  }

  const createTile = (canton) => {

    const tileImage = document.createElement('img');
    tileImage.setAttribute('src', `../img/${canton}.png`);

    const tile = document.createElement('button');
    tile.append(tileImage);
    tile.className="tile";
    tile.onclick = checkTurn;

    return tile;
  }

  const initilizeBoard = () => {
    board.innerHTML = "";
    
    const shuffeld = canton.sort(() => 0.5 - Math.random()).slice(0, 10);

    for(let i = 2; i; i--){
      for(let conton of shuffeld.sort(() => 0.5 - Math.random())){
        board.appendChild(createTile(canton));
    };
  }
  }
  initializeBoard()
});


/* Path: Block-2/auftrag-2.4/memory.js
const cantons = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];

const getFlagPath = function (canton) {
  return `../template/img/${canton}.png`;
}


document.addEventListener('DOMContentLoaded', function () {
  const playground = document.getElementById('playground');
  cantons.forEach(function (value) {
    const tile = document.createElement('div');
    const tileImage = document.createElement('img');
    tileImage.setAttribute('src', getFlagPath(value));
    tile.appendChild(tileImage);
    playground.appendChild(tile);
  });
});*/
