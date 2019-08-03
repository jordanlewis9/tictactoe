class Gameplay {
  constructor() {
    this.container = document.querySelector(".container");
    this.darkModeContainer = document.querySelector(".dark-mode-container");
    this.darkModeOff = document.querySelector(".dark-mode-off");
    this.darkModeOn = document.querySelector(".dark-mode-on");
    this.newGame = document.querySelector(".new-game");
    this.winningMessage = document.querySelector(".winning-message");
    this.X = `<div class="X">X</div>`;
    this.O = `<div class="O">O</div>`;
    this.turn = "X";
    this.game = "on";
    this.darkMode = "off";
    this.tie = false;
    this.one = document.querySelector("#one");
    this.two = document.querySelector("#two");
    this.three = document.querySelector("#three");
    this.four = document.querySelector("#four");
    this.five = document.querySelector("#five");
    this.six = document.querySelector("#six");
    this.seven = document.querySelector("#seven");
    this.eight = document.querySelector("#eight");
    this.nine = document.querySelector("#nine");
    this.oneLine = [this.one, this.two, this.three];
    this.twoLine = [this.one, this.four, this.seven];
    this.threeLine = [this.one, this.five, this.nine];
    this.fourLine = [this.two, this.five, this.eight];
    this.fiveLine = [this.three, this.six, this.nine];
    this.sixLine = [this.three, this.five, this.seven];
    this.sevenLine = [this.four, this.five, this.six];
    this.eightLine = [this.seven, this.eight, this.nine];
    this.catsGame = [...this.oneLine, ...this.sevenLine, ...this.eightLine];
    this.events();
  }

  events() {
    this.container.addEventListener("click", this.addMove.bind(this));
    this.darkModeContainer.addEventListener(
      "click",
      this.setDarkModeMarker.bind(this)
    );
    this.newGame.addEventListener("click", this.createNewGame.bind(this));
  }

  addMove(e) {
    if (this.game === "off") {
      return "";
    } else if (this.turn === "X" && e.target.innerHTML === "") {
      e.target.innerHTML = this.X;
      this.checkEnd();
      this.turn = "O";
    } else if (this.turn === "O" && e.target.innerHTML === "") {
      e.target.innerHTML = this.O;
      this.checkEnd();
      this.turn = "X";
    }
  }

  checkEnd() {
    if (
      this.oneLine.every((el) => el.innerHTML === this.X) ||
      this.oneLine.every((el) => el.innerHTML === this.O)
    ) {
      this.winningMessage.innerHTML = this.championMessage();
      this.game = "off";
    } else if (
      this.twoLine.every((el) => el.innerHTML === this.X) ||
      this.twoLine.every((el) => el.innerHTML === this.O)
    ) {
      this.winningMessage.innerHTML = this.championMessage();
      this.game = "off";
    } else if (
      this.threeLine.every((el) => el.innerHTML === this.X) ||
      this.threeLine.every((el) => el.innerHTML === this.O)
    ) {
      this.winningMessage.innerHTML = this.championMessage();
      this.game = "off";
    } else if (
      this.fourLine.every((el) => el.innerHTML === this.X) ||
      this.fourLine.every((el) => el.innerHTML === this.O)
    ) {
      this.winningMessage.innerHTML = this.championMessage();
      this.game = "off";
    } else if (
      this.fiveLine.every((el) => el.innerHTML === this.X) ||
      this.fiveLine.every((el) => el.innerHTML === this.O)
    ) {
      this.winningMessage.innerHTML = this.championMessage();
      this.game = "off";
    } else if (
      this.sixLine.every((el) => el.innerHTML === this.X) ||
      this.sixLine.every((el) => el.innerHTML === this.O)
    ) {
      this.winningMessage.innerHTML = this.championMessage();
      this.game = "off";
    } else if (
      this.sevenLine.every((el) => el.innerHTML === this.X) ||
      this.sevenLine.every((el) => el.innerHTML === this.O)
    ) {
      this.winningMessage.innerHTML = this.championMessage();
      this.game = "off";
    } else if (
      this.eightLine.every((el) => el.innerHTML === this.X) ||
      this.eightLine.every((el) => el.innerHTML === this.O)
    ) {
      this.winningMessage.innerHTML = this.championMessage();
      this.game = "off";
    } else if (
      this.catsGame.every(
        (el) => el.innerHTML === this.X || el.innerHTML === this.O
      )
    ) {
      this.tie = true;
      this.winningMessage.innerHTML = this.championMessage();
    }
  }

  setDarkModeMarker(e) {
    if (e.target === this.darkModeOn) {
      this.X = `<div class="X X-dark">X</div>`;
      this.O = `<div class="O O-dark">O</div>`;
      this.darkMode = "on";
    } else if (e.target === this.darkModeOff) {
      this.X = `<div class="X">X</div>`;
      this.O = `<div class="O">O</div>`;
      this.darkMode = "off";
    }
  }

  championMessage() {
    if (this.darkMode === "off" && this.tie) {
      return `<p class="tie-game-light">Game is a tie.</p>`;
    } else if (this.darkMode === "on" && this.tie) {
      return `<p class="tie-game-dark">Game is a tie.</p>`;
    } else if (this.darkMode === "off") {
      return `<p class="winning-message-light">${
        this.turn
      } is the Champion!</p>`;
    } else if (this.turn === "X" && this.darkMode === "on") {
      return `<p class="winning-message-darkX">X is the Champion!</p>`;
    } else if (this.turn === "O" && this.darkMode === "on") {
      return `<p class="winning-message-darkO">O is the Champion!</p>`;
    }
  }

  createNewGame() {
    this.catsGame.forEach((square) => (square.innerHTML = ""));
    this.winningMessage.innerHTML = "";
    this.turn = "X";
    this.game = "on";
    this.tie = false;
  }
}

class DarkMode {
  constructor() {
    this.darkModeContainer = document.querySelector(".dark-mode-container");
    this.darkModeOff = document.querySelector(".dark-mode-off");
    this.darkModeOn = document.querySelector(".dark-mode-on");
    this.one = document.querySelector("#one");
    this.two = document.querySelector("#two");
    this.three = document.querySelector("#three");
    this.four = document.querySelector("#four");
    this.five = document.querySelector("#five");
    this.six = document.querySelector("#six");
    this.seven = document.querySelector("#seven");
    this.eight = document.querySelector("#eight");
    this.nine = document.querySelector("#nine");
    this.boardArray = [this.two, this.four, this.five, this.six, this.eight];
    this.fullBoardArray = [
      ...this.boardArray,
      this.one,
      this.three,
      this.seven,
      this.nine
    ];
    this.X = document.querySelectorAll(".X");
    this.O = document.querySelectorAll(".O");
    this.darkText = document.querySelector(".dark-text");
    this.newGame = document.querySelector(".new-game");
    this.events();
  }

  events() {
    this.darkModeContainer.addEventListener(
      "click",
      this.setDarkMode.bind(this)
    );
  }

  setDarkMode(e) {
    if (e.target === this.darkModeOn) {
      this.darkModeOff.classList.remove("dark-mode-selector");
      this.darkModeOn.classList.add("dark-mode-selector");
      document.body.classList.add("dark-mode-background");
      this.darkText.classList.add("dark-mode-text");
      this.newGame.classList.add("new-game-dark");
      this.boardArray.forEach((square) => {
        square.classList.add(`${square.id}-dark`);
      });
      this.fullBoardArray.forEach((square) => {
        if (!square.childNodes[0]) {
          return "";
        }
        let content = square.childNodes[0].textContent;
        square.childNodes[0].classList.add(`${content}-dark`);
      });
    } else if (e.target === this.darkModeOff) {
      this.darkModeOff.classList.add("dark-mode-selector");
      this.darkModeOn.classList.remove("dark-mode-selector");
      document.body.classList.remove("dark-mode-background");
      this.darkText.classList.remove("dark-mode-text");
      this.newGame.classList.remove("new-game-dark");
      this.boardArray.forEach((square) => {
        square.classList.remove(`${square.id}-dark`);
      });
      this.fullBoardArray.forEach((square) => {
        if (!square.childNodes[0]) {
          return "";
        }
        let content = square.childNodes[0].textContent;
        square.childNodes[0].classList.remove(`${content}-dark`);
      });
    }
  }
}

let play = new Gameplay();
let darkMode = new DarkMode();
