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
    this.difficulty = "2p";
    this.turnNum = 1;
    this.winner = false;
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
    this.options = document.querySelector(".player-options");
    this.events();
  }

  events() {
    this.container.addEventListener("click", this.addMove.bind(this));
    this.darkModeContainer.addEventListener(
      "click",
      this.setDarkModeMarker.bind(this)
    );
    this.newGame.addEventListener("click", this.createNewGame.bind(this));
    this.options.addEventListener("click", this.playerOptions.bind(this));
  }

  playerOptions(e) {
    console.log(e.target.value);
    if (e.target.value === "2p") {
      this.difficulty = "2p";
    } else if (e.target.value === "easy") {
      this.difficulty = "easy";
    } else if (e.target.value === "challenge") {
      this.difficulty = "challenge";
    }
  }

  addMove(e) {
    if (this.game === "off") {
      return "";
    } else if (
      this.turn === "X" &&
      e.target.innerHTML === "" &&
      this.difficulty === "2p"
    ) {
      e.target.innerHTML = this.X;
      this.checkEnd();
      if (this.game === "on") {
        this.turn = "O";
        this.turnNum++;
      }
    } else if (
      this.turn === "O" &&
      e.target.innerHTML === "" &&
      this.difficulty === "2p"
    ) {
      e.target.innerHTML = this.O;
      this.checkEnd();
      if (this.game === "on") {
        this.turn = "X";
        this.turnNum++;
      }
    } else if (
      this.turn === "X" &&
      e.target.innerHTML === "" &&
      this.difficulty === "easy"
    ) {
      e.target.innerHTML = this.X;
      this.checkEnd();
      if (this.game === "on") {
        this.turn = "O";
        this.turnNum++;
        this.computerLevel();
      }
    } else if (
      this.turn === "X" &&
      e.target.innerHTML === "" &&
      this.difficulty === "challenge"
    ) {
      e.target.innerHTML = this.X;
      this.checkEnd();
      if (this.game === "on") {
        this.turn = "O";
        this.turnNum++;
        this.computerLevel();
      }
    }
  }

  checkEnd() {
    if (
      this.oneLine.every((el) => el.innerHTML === this.X) ||
      this.oneLine.every((el) => el.innerHTML === this.O)
    ) {
      this.winningMessage.innerHTML = this.championMessage();
      this.winner = true;
      this.game = "off";
    } else if (
      this.twoLine.every((el) => el.innerHTML === this.X) ||
      this.twoLine.every((el) => el.innerHTML === this.O)
    ) {
      this.winningMessage.innerHTML = this.championMessage();
      this.winner = true;
      this.game = "off";
    } else if (
      this.threeLine.every((el) => el.innerHTML === this.X) ||
      this.threeLine.every((el) => el.innerHTML === this.O)
    ) {
      this.winningMessage.innerHTML = this.championMessage();
      this.winner = true;
      this.game = "off";
    } else if (
      this.fourLine.every((el) => el.innerHTML === this.X) ||
      this.fourLine.every((el) => el.innerHTML === this.O)
    ) {
      this.winningMessage.innerHTML = this.championMessage();
      this.winner = true;
      this.game = "off";
    } else if (
      this.fiveLine.every((el) => el.innerHTML === this.X) ||
      this.fiveLine.every((el) => el.innerHTML === this.O)
    ) {
      this.winningMessage.innerHTML = this.championMessage();
      this.winner = true;
      this.game = "off";
    } else if (
      this.sixLine.every((el) => el.innerHTML === this.X) ||
      this.sixLine.every((el) => el.innerHTML === this.O)
    ) {
      this.winningMessage.innerHTML = this.championMessage();
      this.winner = true;
      this.game = "off";
    } else if (
      this.sevenLine.every((el) => el.innerHTML === this.X) ||
      this.sevenLine.every((el) => el.innerHTML === this.O)
    ) {
      this.winningMessage.innerHTML = this.championMessage();
      this.winner = true;
      this.game = "off";
    } else if (
      this.eightLine.every((el) => el.innerHTML === this.X) ||
      this.eightLine.every((el) => el.innerHTML === this.O)
    ) {
      this.winningMessage.innerHTML = this.championMessage();
      this.winner = true;
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
    console.log(e.target);
    if (e.target === this.darkModeOn) {
      this.X = `<div class="X X-dark">X</div>`;
      this.O = `<div class="O O-dark">O</div>`;
      this.darkMode = "on";
      if (this.winner) {
        this.winningMessage.innerHTML = this.championMessage();
      }
    } else if (e.target === this.darkModeOff) {
      this.X = `<div class="X">X</div>`;
      this.O = `<div class="O">O</div>`;
      this.darkMode = "off";
      if (this.winner) {
        this.winningMessage.innerHTML = this.championMessage();
      }
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

  computerEasyMove() {
    let move = Math.floor(Math.random() * 9);
    if (this.catsGame[move].innerHTML === "") {
      this.winningMessage.innerHTML = "";
      this.catsGame[move].innerHTML = this.O;
      this.checkEnd();
      if (this.game === "on") {
        this.turn = "X";
        this.turnNum++;
      }
    } else {
      this.computerEasyMove();
    }
  }

  computerChallengeMove() {
    // Mistake, to give humans a chance at winning
    let mistake = Math.ceil(Math.random() * 100);
    if (mistake > 98) {
      console.log("Brainfart");
      this.computerEasyMove();
    } else {
      // If no mistake for this turn
      console.log(this.turnNum);
      if (this.turnNum === 2) {
        // Challenge computer first move
        if (this.five.innerHTML === "") {
          this.five.innerHTML = this.O;
          this.winningMessage.innerHTML = "";
          this.turn = "X";
          this.turnNum++;
        } else {
          let firstMove = Math.ceil(Math.random() * 4);
          console.log(firstMove);
          if (firstMove === 1) {
            this.one.innerHTML = this.O;
            this.winningMessage.innerHTML = "";
            this.turn = "X";
            this.turnNum++;
          } else if (firstMove === 2) {
            this.three.innerHTML = this.O;
            this.winningMessage.innerHTML = "";
            this.turn = "X";
            this.turnNum++;
          } else if (firstMove === 3) {
            this.seven.innerHTML = this.O;
            this.winningMessage.innerHTML = "";
            this.turn = "X";
            this.turnNum++;
          } else {
            this.nine.innerHTML = this.O;
            this.winningMessage.innerHTML = "";
            this.turn = "X";
            this.turnNum++;
          }
        }
      } else if (this.turnNum === 4) {
        // Challenge computer move two
        const oneLineXCt = this.oneLine.filter((el) => el.innerHTML === this.X);
        const twoLineXCt = this.twoLine.filter((el) => el.innerHTML === this.X);
        const threeLineXCt = this.threeLine.filter(
          (el) => el.innerHTML === this.X
        );
        const fourLineXCt = this.fourLine.filter(
          (el) => el.innerHTML === this.X
        );
        const fiveLineXCt = this.fiveLine.filter(
          (el) => el.innerHTML === this.X
        );
        const sixLineXCt = this.sixLine.filter((el) => el.innerHTML === this.X);
        const sevenLineXCt = this.sevenLine.filter(
          (el) => el.innerHTML === this.X
        );
        const eightLineXCt = this.eightLine.filter(
          (el) => el.innerHTML === this.X
        );
        if (oneLineXCt.length === 2 || oneLineXCt.length === 3) {
          let oneLineMove = this.oneLine.filter((el) => el.innerHTML === "");
          if (oneLineMove.length === 1) {
            oneLineMove[0].innerHTML = this.O;
            this.winningMessage.innerHTML = "";
            this.turn = "X";
            this.turnNum++;
          } else {
            this.five.innerHTML = this.O;
            this.winningMessage.innerHTML = "";
            this.turn = "X";
            this.turnNum++;
          }
        } else if (twoLineXCt.length === 2 || twoLineXCt.length === 3) {
          let twoLineMove = this.twoLine.filter((el) => el.innerHTML === "");
          if (twoLineMove.length === 1) {
            twoLineMove[0].innerHTML = this.O;
            this.winningMessage.innerHTML = "";
            this.turn = "X";
            this.turnNum++;
          } else {
            this.five.innerHTML = this.O;
            this.winningMessage.innerHTML = "";
            this.turn = "X";
            this.turnNum++;
          }
        } else if (threeLineXCt.length === 2 || threeLineXCt.length === 3) {
          let threeLineMove = this.threeLine.filter(
            (el) => el.innerHTML === ""
          );
          if (threeLineMove.length === 1) {
            threeLineMove[0].innerHTML = this.O;
            this.winningMessage.innerHTML = "";
            this.turn = "X";
            this.turnNum++;
          } else {
            if (this.five.innerHTML === this.O) {
              let indifferent = Math.ceil(Math.random() * 4);
              if (indifferent === 1) {
                this.two.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else if (indifferent === 2) {
                this.four.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else if (indifferent === 3) {
                this.six.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else {
                this.eight.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              }
            } else if (
              this.one.innerHTML === this.O ||
              this.nine.innerHTML === this.O
            ) {
              let threeOrSeven = Math.ceil(Math.random() * 2);
              if (threeOrSeven === 1) {
                this.three.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else {
                this.seven.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              }
            }
          }
        } else if (fourLineXCt.length === 2 || fourLineXCt.length === 3) {
          let fourLineMove = this.fourLine.filter((el) => el.innerHTML === "");
          if (fourLineMove.length === 1) {
            if (this.two.innerHTML === "") {
              this.two.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (this.eight.innerHTML === "") {
              this.eight.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else {
              this.five.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            }
          } else {
            if (this.five.innerHTML === this.O) {
              let indifferentWin = Math.ceil(Math.random() * 4);
              if (indifferentWin === 1) {
                this.one.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else if (indifferentWin === 2) {
                this.three.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else if (indifferentWin === 3) {
                this.seven.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else if (indifferentWin === 4) {
                this.nine.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              }
            } else if (this.two.innerHTML === this.O) {
              let sevenOrNine = Math.ceil(Math.random() * 2);
              if (sevenOrNine === 1) {
                this.seven.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else {
                this.nine.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              }
            } else {
              let oneOrThree = Math.ceil(Math.random() * 2);
              if (oneOrThree === 1) {
                this.one.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else {
                this.three.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              }
            }
          }
        } else if (fiveLineXCt.length === 2 || fiveLineXCt.length === 3) {
          let fiveLineMove = this.fiveLine.filter((el) => el.innerHTML === "");
          if (fiveLineMove.length === 1) {
            fiveLineMove[0].innerHTML = this.O;
            this.winningMessage.innerHTML = "";
            this.turn = "X";
            this.turnNum++;
          } else {
            this.five.innerHTML = this.O;
            this.winningMessage.innerHTML = "";
            this.turn = "X";
            this.turnNum++;
          }
        } else if (sixLineXCt.length === 2 || sixLineXCt.length === 3) {
          letsixLineMove = this.sixLine.filter((el) => el.innerHTML === "");
          if (sixLineMove.length === 1) {
            sixLineMove[0].innerHTML = this.O;
            this.winningMessage.innerHTML = "";
            this.turn = "X";
            this.turnNum++;
          } else {
            if (this.five.innerHTML === this.O) {
              let indifferent = Math.ceil(Math.random() * 4);
              if (indifferent === 1) {
                this.two.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else if (indifferent === 2) {
                this.four.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else if (indifferent === 3) {
                this.six.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else {
                this.eight.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              }
            } else if (
              this.three.innerHTML === this.O ||
              this.seven.innerHTML === this.O
            ) {
              let oneOrNine = Math.ceil(Math.random() * 2);
              if (oneOrNine === 1) {
                this.one.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else {
                this.nine.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              }
            }
          }
        } else if (sevenLineXCt.length === 2 || sevenLineXCt.length === 3) {
          let sevenLineMove = this.sevenLine.filter(
            (el) => el.innerHTML === ""
          );
          if (sevenLineMove.length === 1) {
            if (this.four.innerHTML === "") {
              this.four.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (this.six.innerHTML === "") {
              this.six.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else {
              this.five.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            }
          } else {
            if (this.five.innerHTML === this.O) {
              let indifferentWin = Math.ceil(Math.random() * 4);
              if (indifferentWin === 1) {
                this.one.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else if (indifferentWin === 2) {
                this.three.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else if (indifferentWin === 3) {
                this.seven.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else if (indifferentWin === 4) {
                this.nine.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              }
            } else if (this.four.innerHTML === this.O) {
              let threeOrNine = Math.ceil(Math.random() * 2);
              if (threeOrNine === 1) {
                this.three.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else {
                this.nine.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              }
            } else {
              let oneOrSeven = Math.ceil(Math.random() * 2);
              if (oneOrSeven === 1) {
                this.one.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              } else {
                this.seven.innerHTML = this.O;
                this.winningMessage.innerHTML = "";
                this.turn = "X";
                this.turnNum++;
              }
            }
          }
        } else if (eightLineXCt.length === 2 || eightLineXCt.length === 3) {
          let eightLineMove = this.eightLine.filter(
            (el) => el.innerHTML === ""
          );
          if (eightLineMove.length === 1) {
            eightLineMove[0].innerHTML = this.O;
            this.winningMessage.innerHTML = "";
            this.turn = "X";
            this.turnNum++;
          } else {
            this.five.innerHTML = this.O;
            this.winningMessage.innerHTML = "";
            this.turn = "X";
            this.turnNum++;
          }
        } else if (
          this.two.innerHTML === this.X &&
          this.five.innerHTML === this.O
        ) {
          if (this.four.innerHTML === this.X) {
            let indifferent = Math.ceil(Math.random() * 3);
            if (indifferent === 1) {
              this.one.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 2) {
              this.three.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else {
              this.seven.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            }
          } else if (
            this.seven.innerHTML === this.X ||
            this.nine.innerHTML === this.X
          ) {
            let indifferent = Math.ceil(Math.random() * 4);
            if (indifferent === 1) {
              this.one.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 2) {
              this.three.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 3) {
              this.four.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else {
              this.six.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            }
          } else if (this.six.innerHTML === this.X) {
            let indifferent = Math.ceil(Math.random() * 3);
            if (indifferent === 1) {
              this.one.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 2) {
              this.three.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else {
              this.nine.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            }
          }
        } else if (
          this.four.innerHTML === this.X &&
          this.five.innerHTML === this.O
        ) {
          if (this.two.innerHTML === this.X) {
            let indifferent = Math.ceil(Math.random() * 3);
            if (indifferent === 1) {
              this.one.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 2) {
              this.three.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else {
              this.seven.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            }
          } else if (
            this.three.innerHTML === this.X ||
            this.nine.innerHTML === this.X
          ) {
            let indifferent = Math.ceil(Math.random() * 4);
            if (indifferent === 1) {
              this.one.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 2) {
              this.two.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 3) {
              this.seven.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else {
              this.eight.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            }
          } else if (this.eight.innerHTML === this.X) {
            let indifferent = Math.ceil(Math.random() * 3);
            if (indifferent === 1) {
              this.one.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 2) {
              this.seven.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else {
              this.nine.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            }
          }
          /////////// Left off, edge case f
        } else if (
          this.eight.innerHTML === this.X &&
          this.five.innerHTML === this.O
        ) {
          if (this.four.innerHTML === this.X) {
            let indifferent = Math.ceil(Math.random() * 3);
            if (indifferent === 1) {
              this.one.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 2) {
              this.three.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else {
              this.seven.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            }
          } else if (
            this.five.innerHTML === this.X ||
            this.seven.innerHTML === this.X
          ) {
            let indifferent = Math.ceil(Math.random() * 4);
            if (indifferent === 1) {
              this.one.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 2) {
              this.three.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 3) {
              this.four.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else {
              this.six.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            }
          } else if (this.six.innerHTML === this.X) {
            let indifferent = Math.ceil(Math.random() * 3);
            if (indifferent === 1) {
              this.one.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 2) {
              this.three.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else {
              this.nine.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            }
          }
        } else {
          // Weird edge cases where none of the three winning lines have two markers
          if (
            this.two.innerHTML === this.O ||
            this.four.innerHTML === this.O ||
            this.six.innerHTML === this.O ||
            this.eight.innerHTML === this.O
          ) {
            this.five.innerHTML = this.O;
            this.winningMessage.innerHTML = "";
            this.turn = "X";
            this.turnNum++;
          } else if (this.one.innerHTML === this.O) {
            let indifferent = Math.ceil(Math.random() * 4);
            if (indifferent === 1) {
              this.two.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 2) {
              this.three.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 3) {
              this.four.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else {
              this.seven.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            }
          } else if (this.three.innerHTML === this.O) {
            let indifferent = Math.ceil(Math.random() * 4);
            if (indifferent === 1) {
              this.one.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 2) {
              this.two.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 3) {
              this.six.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else {
              this.nine.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            }
          } else if (this.seven.innerHTML === this.O) {
            let indifferent = Math.ceil(Math.random() * 4);
            if (indifferent === 1) {
              this.one.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 2) {
              this.four.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 3) {
              this.eight.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else {
              this.nine.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            }
          } else if (this.nine.innerHTML === this.O) {
            let indifferent = Math.ceil(Math.random() * 4);
            if (indifferent === 1) {
              this.three.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 2) {
              this.six.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else if (indifferent === 3) {
              this.seven.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            } else {
              this.eight.innerHTML = this.O;
              this.winningMessage.innerHTML = "";
              this.turn = "X";
              this.turnNum++;
            }
          }
        }
      }
    }
  }

  computerLevel() {
    if (this.darkMode === "off" && this.turn === "O") {
      this.winningMessage.innerHTML = `<p class='winning-message-light'>Thinking...</p>`;
    } else if (this.darkMode === "on" && this.turn === "O") {
      this.winningMessage.innerHTML = `<p class='winning-message-darkO'>Thinking...</p>`;
    }
    if (this.difficulty === "easy" && this.turn === "O" && this.game === "on") {
      setTimeout(this.computerEasyMove.bind(this), 1000);
    } else if (
      this.difficulty === "challenge" &&
      this.turn === "O" &&
      this.game === "on"
    ) {
      setTimeout(this.computerChallengeMove.bind(this), 1000);
    }
  }

  createNewGame() {
    this.catsGame.forEach((square) => (square.innerHTML = ""));
    this.winningMessage.innerHTML = "";
    this.turn = "X";
    this.game = "on";
    this.turnNum = 1;
    this.winner = false;
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
