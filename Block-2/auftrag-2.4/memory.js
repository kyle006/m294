document.addEventListener('DOMContentLoaded',() => {
 let tries = 0;
  const canton = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];

  const board = document.getElementById('board');
  const tiles = board.getElementById('tile');
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

    
  }
})


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
});
