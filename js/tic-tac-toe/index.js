let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);
  // proponowane rozwiązanie
  if (idx < 0) return;
  //
  console.log("idx:", idx)
  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  checkWin();
});

// ZNALEZIONE BUGI

// BTW, w pliku README.md jest błąd "Pewnie nie raz grałeś" zamiast "Pewnie nie raze grałeś" :)
// I jeszcze trzeba dodać sprawdzanie wartości idx czy jest >= 0, przy przeciąganiu gratki na kratkę kontener kafelek jest wybierany zwracajac idx = -1 


// 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
function displayTurn(turn) {
  let h1 = document.querySelector('h1.turn')
  h1.innerHTML = turn.toUpperCase() + ' turn'
}

// 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
let moves = 0
function checkWin() {
  moves++
  // vertical
  for (let v = 0; v < symbols.length; v++) {
    if (symbols[v][0] != '' && (symbols[v][0] == symbols[v][1] && symbols[v][0] == symbols[v][2])) {
      alert(`Wygrał ${symbols[v][0]}`)
      return
    }
  }
  // horizontal
  for (let h = 0; h < symbols[0].length; h++) {
    if (symbols[0][h] && (symbols[0][h] == symbols[1][h] && symbols[0][h] == symbols[2][h])) {
      alert(`Wygrał ${symbols[0][h]}`)
      return
    }
  }
  // diagonal
  if (symbols[1][1] != '' && ((symbols[1][1] == symbols[0][0] && symbols[1][1] == symbols[2][2]) || (symbols[1][1] == symbols[2][0] && symbols[1][1] == symbols[0][2]))) {
    alert(`Wygrał ${symbols[1][1]}`)
    return
  }
  // tie
  if (moves >= 9) {
    alert(`Remis`)
    return
  }
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
document.querySelector('button.reset').addEventListener('click', reset)
// 4. zresetuj stan gry
function reset() {
  tiles.forEach(tile => { tile.className = 'tile' })
  turn = 'x'
  symbols = [["", "", ""], ["", "", ""], ["", "", ""]]
  moves = 0
  displayTurn(turn)
}
