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

  // Event listeners
  events() {
    this.container.addEventListener("click", this.addMove.bind(this));
    this.darkModeContainer.addEventListener(
      "click",
      this.setDarkModeMarker.bind(this)
    );
    this.newGame.addEventListener("click", this.createNewGame.bind(this));
    this.options.addEventListener("click", this.playerOptions.bind(this));
  }

  // Difficulty level
  playerOptions(e) {
    this.createNewGame();
    if (e.target.value === "2p") {
      this.difficulty = "2p";
    } else if (e.target.value === "easy") {
      this.difficulty = "easy";
    } else if (e.target.value === "medium"){
      this.difficulty = "medium";
    } else if (e.target.value === "challenge") {
      this.difficulty = "challenge";
    }
  }

  // Main move mechanic
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
      this.difficulty !== "2p"
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

  // See if the current player has won with their move, or if the game is a tie
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
      this.game = "off";
      this.winningMessage.innerHTML = this.championMessage();
    }
  }

  // Toggles dark mode for all non-static elements
  setDarkModeMarker(e) {
    if (e.target === this.darkModeOn) {
      this.X = `<div class="X X-dark">X</div>`;
      this.O = `<div class="O O-dark">O</div>`;
      this.darkMode = "on";
      if (this.winner || this.tie) {
        this.winningMessage.innerHTML = this.championMessage();
      }
    } else if (e.target === this.darkModeOff) {
      this.X = `<div class="X">X</div>`;
      this.O = `<div class="O">O</div>`;
      this.darkMode = "off";
      if (this.winner || this.tie) {
        this.winningMessage.innerHTML = this.championMessage();
      }
    }
  }

  // Text below board to display the winner, or show the computer is "thinking"
  championMessage() {
    if (this.darkMode === "off" && this.tie) {
      return `<p class="tie-game-light">Game is a tie.</p>`;
    } else if (this.darkMode === "on" && this.tie) {
      return `<p class="tie-game-dark">Game is a tie.</p>`;
    } else if (this.darkMode === "off" && this.difficulty === "2p") {
      return `<p class="winning-message-light">${
        this.turn
      } is the Champion!</p>`;
    } else if (
      this.turn === "X" &&
      this.darkMode === "on" &&
      this.difficulty === "2p"
    ) {
      return `<p class="winning-message-darkX">X is the Champion!</p>`;
    } else if (
      this.turn === "O" &&
      this.darkMode === "on" &&
      this.difficulty === "2p"
    ) {
      return `<p class="winning-message-darkO">O is the Champion!</p>`;
    } else if (
      this.turn === "O" &&
      this.darkMode === "off" &&
      this.difficulty !== "2p"
    ) {
      return `<p class="winning-message-light">The Computer is the Champion!</p>`;
    } else if (
      this.turn === "O" &&
      this.darkMode === "on" &&
      this.difficulty !== "2p"
    ) {
      return `<p class="winning-message-darkO">The Computer is the Champion!</p>`;
    } else if (
      this.turn === "X" &&
      this.darkMode === "off" &&
      this.difficulty !== "2p"
    ) {
      return `<p class="winning-message-light">You beat the computer!</p>`;
    } else if (
      this.turn === "X" &&
      this.darkMode === "on" &&
      this.difficulty !== "2p"
    ) {
      return `<p class="winning-message-darkX">You beat the computer!</p>`;
    }
  }

  // If random number is in range, go to this, which randomly places an O instead of strategically
  computerMistakeMove() {
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
      this.computerMistakeMove();
    }
  }

  // The holy grail, the strategy behind the computer moves
  computerMove() {
    // Mistake, to give humans a chance at winning
    let mistake = Math.ceil(Math.random() * 100);
    if (mistake > 98 && this.difficulty === "challenge") {
      this.computerMistakeMove();
      console.log("Brainfart, take advantage!");
    } else if (mistake > 60 && this.difficulty === "medium"){
      this.computerMistakeMove();
      console.log("Ok, this is getting interesting.")
    } else if (mistake > 20 && this.difficulty === "easy"){
      this.computerMistakeMove();
      console.log("You wanted easy, what did you expect?")
    } else {
      // If no mistake for this turn
      if (this.turnNum === 2) {
        // Challenge computer first move
        if (this.five.innerHTML === "") {
          this.fiveSqCompMove();
        } else {
          let firstMove = Math.ceil(Math.random() * 4);
          if (firstMove === 1) {
            this.oneSqCompMove();
          } else if (firstMove === 2) {
            this.threeSqCompMove();
          } else if (firstMove === 3) {
            this.sevenSqCompMove();
          } else {
            this.nineSqCompMove();
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
            this.compStatusChange();
          } else {
            this.fiveSqCompMove();
          }
        } else if (twoLineXCt.length === 2 || twoLineXCt.length === 3) {
          let twoLineMove = this.twoLine.filter((el) => el.innerHTML === "");
          if (twoLineMove.length === 1) {
            twoLineMove[0].innerHTML = this.O;
            this.compStatusChange();
          } else {
            this.fiveSqCompMove();
          }
        } else if (threeLineXCt.length === 2 || threeLineXCt.length === 3) {
          let threeLineMove = this.threeLine.filter(
            (el) => el.innerHTML === ""
          );
          if (threeLineMove.length === 1) {
            threeLineMove[0].innerHTML = this.O;
            this.compStatusChange();
          } else {
            if (this.five.innerHTML === this.O) {
              let indifferent = Math.ceil(Math.random() * 4);
              if (indifferent === 1) {
                this.twoSqCompMove();
              } else if (indifferent === 2) {
                this.fourSqCompMove();
              } else if (indifferent === 3) {
                this.sixSqCompMove();
              } else {
                this.eightSqCompMove();
              }
            } else if (
              this.one.innerHTML === this.O ||
              this.nine.innerHTML === this.O
            ) {
              let threeOrSeven = Math.ceil(Math.random() * 2);
              if (threeOrSeven === 1) {
                this.threeSqCompMove();
              } else {
                this.sevenSqCompMove();
              }
            }
          }
        } else if (fourLineXCt.length === 2 || fourLineXCt.length === 3) {
          let fourLineMove = this.fourLine.filter((el) => el.innerHTML === "");
          if (fourLineMove.length === 1) {
            if (this.two.innerHTML === "") {
              this.twoSqCompMove();
            } else if (this.eight.innerHTML === "") {
              this.eightSqCompMove();
            } else {
              this.fiveSqCompMove();
            }
          } else {
            if (this.five.innerHTML === this.O) {
              let indifferentWin = Math.ceil(Math.random() * 4);
              if (indifferentWin === 1) {
                this.oneSqCompMove();
              } else if (indifferentWin === 2) {
                this.threeSqCompMove();
              } else if (indifferentWin === 3) {
                this.sevenSqCompMove();
              } else if (indifferentWin === 4) {
                this.nineSqCompMove();
              }
            } else if (this.two.innerHTML === this.O) {
              let sevenOrNine = Math.ceil(Math.random() * 2);
              if (sevenOrNine === 1) {
                this.sevenSqCompMove();
              } else {
                this.nineSqCompMove();
              }
            } else {
              let oneOrThree = Math.ceil(Math.random() * 2);
              if (oneOrThree === 1) {
                this.oneSqCompMove();
              } else {
                this.threeSqCompMove();
              }
            }
          }
        } else if (fiveLineXCt.length === 2 || fiveLineXCt.length === 3) {
          let fiveLineMove = this.fiveLine.filter((el) => el.innerHTML === "");
          if (fiveLineMove.length === 1) {
            fiveLineMove[0].innerHTML = this.O;
            this.compStatusChange();
          } else {
            this.fiveSqCompMove();
          }
        } else if (sixLineXCt.length === 2 || sixLineXCt.length === 3) {
          let sixLineMove = this.sixLine.filter((el) => el.innerHTML === "");
          if (sixLineMove.length === 1) {
            sixLineMove[0].innerHTML = this.O;
            this.compStatusChange();
          } else {
            if (this.five.innerHTML === this.O) {
              let indifferent = Math.ceil(Math.random() * 4);
              if (indifferent === 1) {
                this.twoSqCompMove();
              } else if (indifferent === 2) {
                this.fourSqCompMove();
              } else if (indifferent === 3) {
                this.sixSqCompMove();
              } else {
                this.eightSqCompMove();
              }
            } else if (
              this.three.innerHTML === this.O ||
              this.seven.innerHTML === this.O
            ) {
              let oneOrNine = Math.ceil(Math.random() * 2);
              if (oneOrNine === 1) {
                this.oneSqCompMove();
              } else {
                this.nineSqCompMove();
              }
            }
          }
        } else if (sevenLineXCt.length === 2 || sevenLineXCt.length === 3) {
          let sevenLineMove = this.sevenLine.filter(
            (el) => el.innerHTML === ""
          );
          if (sevenLineMove.length === 1) {
            if (this.four.innerHTML === "") {
              this.fourSqCompMove();
            } else if (this.six.innerHTML === "") {
              this.sixSqCompMove();
            } else {
              this.fiveSqCompMove();
            }
          } else {
            if (this.five.innerHTML === this.O) {
              let indifferentWin = Math.ceil(Math.random() * 4);
              if (indifferentWin === 1) {
                this.oneSqCompMove();
              } else if (indifferentWin === 2) {
                this.threeSqCompMove();
              } else if (indifferentWin === 3) {
                this.sevenSqCompMove();
              } else if (indifferentWin === 4) {
                this.nineSqCompMove();
              }
            } else if (this.four.innerHTML === this.O) {
              let threeOrNine = Math.ceil(Math.random() * 2);
              if (threeOrNine === 1) {
                this.threeSqCompMove();
              } else {
                this.nineSqCompMove();
              }
            } else {
              let oneOrSeven = Math.ceil(Math.random() * 2);
              if (oneOrSeven === 1) {
                this.oneSqCompMove();
              } else {
                this.sevenSqCompMove();
              }
            }
          }
        } else if (eightLineXCt.length === 2 || eightLineXCt.length === 3) {
          let eightLineMove = this.eightLine.filter(
            (el) => el.innerHTML === ""
          );
          if (eightLineMove.length === 1) {
            eightLineMove[0].innerHTML = this.O;
            this.compStatusChange();
          } else {
            this.fiveSqCompMove();
          }
          // Weird edge cases where none of the three winning lines have two of the same markers
        } else if (
          this.two.innerHTML === this.X &&
          this.five.innerHTML === this.O
        ) {
          if (this.four.innerHTML === this.X) {
            let indifferent = Math.ceil(Math.random() * 3);
            if (indifferent === 1) {
              this.oneSqCompMove();
            } else if (indifferent === 2) {
              this.threeSqCompMove();
            } else {
              this.sevenSqCompMove();
            }
          } else if (
            this.seven.innerHTML === this.X ||
            this.nine.innerHTML === this.X
          ) {
            let indifferent = Math.ceil(Math.random() * 4);
            if (indifferent === 1) {
              this.oneSqCompMove();
            } else if (indifferent === 2) {
              this.threeSqCompMove();
            } else if (indifferent === 3) {
              this.fourSqCompMove();
            } else {
              this.sixSqCompMove();
            }
          } else if (this.six.innerHTML === this.X) {
            let indifferent = Math.ceil(Math.random() * 3);
            if (indifferent === 1) {
              this.oneSqCompMove();
            } else if (indifferent === 2) {
              this.threeSqCompMove();
            } else {
              this.nineSqCompMove();
            }
          }
        } else if (
          this.four.innerHTML === this.X &&
          this.five.innerHTML === this.O
        ) {
          if (this.two.innerHTML === this.X) {
            let indifferent = Math.ceil(Math.random() * 3);
            if (indifferent === 1) {
              this.oneSqCompMove();
            } else if (indifferent === 2) {
              this.threeSqCompMove();
            } else {
              this.sevenSqCompMove();
            }
          } else if (
            this.three.innerHTML === this.X ||
            this.nine.innerHTML === this.X
          ) {
            let indifferent = Math.ceil(Math.random() * 4);
            if (indifferent === 1) {
              this.oneSqCompMove();
            } else if (indifferent === 2) {
              this.twoSqCompMove();
            } else if (indifferent === 3) {
              this.sevenSqCompMove();
            } else {
              this.eightSqCompMove();
            }
          } else if (this.eight.innerHTML === this.X) {
            let indifferent = Math.ceil(Math.random() * 3);
            if (indifferent === 1) {
              this.oneSqCompMove();
            } else if (indifferent === 2) {
              this.sevenSqCompMove();
            } else {
              this.nineSqCompMove();
            }
          }
        } else if (
          this.eight.innerHTML === this.X &&
          this.five.innerHTML === this.O
        ) {
          if (this.four.innerHTML === this.X) {
            let indifferent = Math.ceil(Math.random() * 3);
            if (indifferent === 1) {
              this.oneSqCompMove();
            } else if (indifferent === 2) {
              this.sevenSqCompMove();
            } else {
              this.nineSqCompMove();
            }
          } else if (
            this.one.innerHTML === this.X ||
            this.three.innerHTML === this.X
          ) {
            let indifferent = Math.ceil(Math.random() * 4);
            if (indifferent === 1) {
              this.fourSqCompMove();
            } else if (indifferent === 2) {
              this.sixSqCompMove();
            } else if (indifferent === 3) {
              this.sevenSqCompMove();
            } else {
              this.nineSqCompMove();
            }
          } else if (this.six.innerHTML === this.X) {
            let indifferent = Math.ceil(Math.random() * 3);
            if (indifferent === 1) {
              this.threeSqCompMove();
            } else if (indifferent === 2) {
              this.sevenSqCompMove();
            } else {
              this.nineSqCompMove();
            }
          }
        } else if (
          this.six.innerHTML === this.X &&
          this.five.innerHTML === this.O
        ) {
          if (this.two.innerHTML === this.X) {
            let indifferent = Math.ceil(Math.random() * 3);
            if (indifferent === 1) {
              this.oneSqCompMove();
            } else if (indifferent === 2) {
              this.threeSqCompMove();
            } else {
              this.nineSqCompMove();
            }
          } else if (
            this.one.innerHTML === this.X ||
            this.seven.innerHTML === this.X
          ) {
            let indifferent = Math.ceil(Math.random() * 4);
            if (indifferent === 1) {
              this.twoSqCompMove();
            } else if (indifferent === 2) {
              this.threeSqCompMove();
            } else if (indifferent === 3) {
              this.eightSqCompMove();
            } else {
              this.nineSqCompMove();
            }
          } else if (this.eight.innerHTML === this.X) {
            let indifferent = Math.ceil(Math.random() * 3);
            if (indifferent === 1) {
              this.threeSqCompMove();
            } else if (indifferent === 2) {
              this.sevenSqCompMove();
            } else {
              this.nineSqCompMove();
            }
          }
        } else if (
          (this.one.innerHTML === this.X || this.three.innerHTML === this.X) &&
          this.two.innerHTML === this.O
        ) {
          if (this.six.innerHTML === this.X || this.four.innerHTML === this.X) {
            this.fiveSqCompMove();
          } else {
            let indifferent = Math.ceil(Math.random() * 2);
            if (indifferent === 1) {
              this.sevenSqCompMove();
            } else {
              this.nineSqCompMove();
            }
          }
        } else if (
          (this.one.innerHTML === this.X || this.seven.innerHTML === this.X) &&
          this.four.innerHTML === this.O
        ) {
          if (
            this.two.innerHTML === this.X ||
            this.eight.innerHTML === this.X
          ) {
            this.fiveSqCompMove();
          } else {
            let indifferent = Math.ceil(Math.random() * 2);
            if (indifferent === 1) {
              this.threeSqCompMove();
            } else {
              this.nineSqCompMove();
            }
          }
        } else if (
          (this.seven.innerHTML === this.X || this.nine.innerHTML === this.X) &&
          this.eight.innerHTML === this.O
        ) {
          if (this.four.innerHTML === this.X || this.six.innerHTML === this.X) {
            this.fiveSqCompMove();
          } else {
            let indifferent = Math.ceil(Math.random() * 2);
            if (indifferent === 1) {
              this.oneSqCompMove();
            } else {
              this.threeSqCompMove();
            }
          }
        } else if (
          (this.three.innerHTML === this.X || this.nine.innerHTML === this.X) &&
          this.six.innerHTML === this.O
        ) {
          if (
            this.two.innerHTML === this.X ||
            this.eight.innerHTML === this.X
          ) {
            this.fiveSqCompMove();
          } else {
            let indifferent = Math.ceil(Math.random() * 2);
            if (indifferent === 1) {
              this.oneSqCompMove();
            } else {
              this.sevenSqCompMove();
            }
          }
        }
      } else if (this.turnNum === 6) {
        const [oneLineOCt, oneLineXCt] = [
          this.oneLine.filter((el) => el.innerHTML === this.O),
          this.oneLine.filter((el) => el.innerHTML === this.X)
        ];
        const [twoLineOCt, twoLineXCt] = [
          this.twoLine.filter((el) => el.innerHTML === this.O),
          this.twoLine.filter((el) => el.innerHTML === this.X)
        ];
        const [threeLineOCt, threeLineXCt] = [
          this.threeLine.filter((el) => el.innerHTML === this.O),
          this.threeLine.filter((el) => el.innerHTML === this.X)
        ];
        const [fourLineOCt, fourLineXCt] = [
          this.fourLine.filter((el) => el.innerHTML === this.O),
          this.fourLine.filter((el) => el.innerHTML === this.X)
        ];
        const [fiveLineOCt, fiveLineXCt] = [
          this.fiveLine.filter((el) => el.innerHTML === this.O),
          this.fiveLine.filter((el) => el.innerHTML === this.X)
        ];
        const [sixLineOCt, sixLineXCt] = [
          this.sixLine.filter((el) => el.innerHTML === this.O),
          this.sixLine.filter((el) => el.innerHTML === this.X)
        ];
        const [sevenLineOCt, sevenLineXCt] = [
          this.sevenLine.filter((el) => el.innerHTML === this.O),
          this.sevenLine.filter((el) => el.innerHTML === this.X)
        ];
        const [eightLineOCt, eightLineXCt] = [
          this.eightLine.filter((el) => el.innerHTML === this.O),
          this.eightLine.filter((el) => el.innerHTML === this.X)
        ];
        // Computer wins
        if (oneLineOCt.length === 2 && oneLineXCt.length === 0) {
          const winningMove = this.oneLine.filter((el) => el.innerHTML === "");
          winningMove[0].innerHTML = this.O;
          this.checkEnd();
        } else if (twoLineOCt.length === 2 && twoLineXCt.length === 0) {
          const winningMove = this.twoLine.filter((el) => el.innerHTML === "");
          winningMove[0].innerHTML = this.O;
          this.checkEnd();
        } else if (threeLineOCt.length === 2 && threeLineXCt.length === 0) {
          const winningMove = this.threeLine.filter(
            (el) => el.innerHTML === ""
          );
          winningMove[0].innerHTML = this.O;
          this.checkEnd();
        } else if (fourLineOCt.length === 2 && fourLineXCt.length === 0) {
          const winningMove = this.fourLine.filter((el) => el.innerHTML === "");
          winningMove[0].innerHTML = this.O;
          this.checkEnd();
        } else if (fiveLineOCt.length === 2 && fiveLineXCt.length === 0) {
          const winningMove = this.fiveLine.filter((el) => el.innerHTML === "");
          winningMove[0].innerHTML = this.O;
          this.checkEnd();
        } else if (sixLineOCt.length === 2 && sixLineXCt.length === 0) {
          const winningMove = this.sixLine.filter((el) => el.innerHTML === "");
          winningMove[0].innerHTML = this.O;
          this.checkEnd();
        } else if (sevenLineOCt.length === 2 && sevenLineXCt.length === 0) {
          const winningMove = this.sevenLine.filter(
            (el) => el.innerHTML === ""
          );
          winningMove[0].innerHTML = this.O;
          this.checkEnd();
        } else if (eightLineOCt.length === 2 && eightLineXCt.length === 0) {
          const winningMove = this.eightLine.filter(
            (el) => el.innerHTML === ""
          );
          winningMove[0].innerHTML = this.O;
          this.checkEnd();
          // Computer needs to block win
        } else if (oneLineXCt.length === 2 && oneLineOCt.length === 0) {
          const blockingMove = this.oneLine.filter((el) => el.innerHTML === "");
          blockingMove[0].innerHTML = this.O;
          this.compStatusChange();
        } else if (twoLineXCt.length === 2 && twoLineOCt.length === 0) {
          const blockingMove = this.twoLine.filter((el) => el.innerHTML === "");
          blockingMove[0].innerHTML = this.O;
          this.compStatusChange();
        } else if (threeLineXCt.length === 2 && threeLineOCt.length === 0) {
          const blockingMove = this.threeLine.filter(
            (el) => el.innerHTML === ""
          );
          blockingMove[0].innerHTML = this.O;
          this.compStatusChange();
        } else if (fourLineXCt.length === 2 && fourLineOCt.length === 0) {
          const blockingMove = this.fourLine.filter(
            (el) => el.innerHTML === ""
          );
          blockingMove[0].innerHTML = this.O;
          this.compStatusChange();
        } else if (fiveLineXCt.length === 2 && fiveLineOCt.length === 0) {
          const blockingMove = this.fiveLine.filter(
            (el) => el.innerHTML === ""
          );
          blockingMove[0].innerHTML = this.O;
          this.compStatusChange();
        } else if (sixLineXCt.length === 2 && sixLineOCt.length === 0) {
          const blockingMove = this.sixLine.filter((el) => el.innerHTML === "");
          blockingMove[0].innerHTML = this.O;
          this.compStatusChange();
        } else if (sevenLineXCt.length === 2 && sevenLineOCt.length === 0) {
          const blockingMove = this.sevenLine.filter(
            (el) => el.innerHTML === ""
          );
          blockingMove[0].innerHTML = this.O;
          this.compStatusChange();
        } else if (eightLineXCt.length === 2 && eightLineOCt.length === 0) {
          const blockingMove = this.eightLine.filter(
            (el) => el.innerHTML === ""
          );
          blockingMove[0].innerHTML = this.O;
          this.compStatusChange();
          // Start edge cases
        } else if (
          this.two.innerHTML === this.O &&
          this.three.innerHTML === this.X &&
          this.five.innerHTML === this.X &&
          this.seven.innerHTML === this.O &&
          this.eight.innerHTML === this.X
        ) {
          let indifferent = Math.ceil(Math.random() * 2);
          if (indifferent === 1) {
            this.oneSqCompMove();
          } else {
            this.fourSqCompMove();
          }
        } else if (
          this.one.innerHTML === this.X &&
          this.four.innerHTML === this.O &&
          this.five.innerHTML === this.X &&
          this.six.innerHTML === this.X &&
          this.nine.innerHTML === this.O
        ) {
          let indifferent = Math.ceil(Math.random() * 2);
          if (indifferent === 1) {
            this.sevenSqCompMove();
          } else {
            this.eightSqCompMove();
          }
        } else if (
          this.two.innerHTML === this.X &&
          this.three.innerHTML === this.O &&
          this.five.innerHTML === this.X &&
          this.seven.innerHTML == this.X &&
          this.eight.innerHTML === this.O
        ) {
          let indifferent = Math.ceil(Math.random() * 2);
          if (indifferent === 1) {
            this.sixSqCompMove();
          } else {
            this.nineSqCompMove();
          }
        } else if (
          this.one.innerHTML === this.O &&
          this.four.innerHTML === this.X &&
          this.five.innerHTML === this.X &&
          this.six.innerHTML === this.O &&
          this.nine.innerHTML === this.X
        ) {
          let indifferent = Math.ceil(Math.random() * 2);
          if (indifferent === 1) {
            this.twoSqCompMove();
          } else {
            this.threeSqCompMove();
          }
          // Will win for CPU if no brainfart
        } else if (
          this.one.innerHTML === this.X &&
          this.two.innerHTML === this.X &&
          this.three.innerHTML === this.O &&
          this.six.innerHTML === this.X &&
          this.nine.innerHTML === this.O
        ) {
          this.sevenSqCompMove();
        } else if (
          this.one.innerHTML === this.O &&
          this.two.innerHTML === this.X &&
          this.three.innerHTML === this.O &&
          this.four.innerHTML === this.X &&
          this.seven.innerHTML === this.X
        ) {
          this.nineSqCompMove();
        } else if (
          this.one.innerHTML === this.O &&
          this.four.innerHTML === this.X &&
          this.seven.innerHTML === this.O &&
          this.eight.innerHTML === this.X &&
          this.nine.innerHTML === this.X
        ) {
          this.threeSqCompMove();
        } else if (
          this.three.innerHTML === this.X &&
          this.six.innerHTML === this.X &&
          this.seven.innerHTML === this.O &&
          this.eight.innerHTML === this.X &&
          this.nine.innerHTML === this.O
        ) {
          this.oneSqCompMove();
        } else if (
          this.one.innerHTML === this.X &&
          this.two.innerHTML === this.X &&
          this.three.innerHTML === this.O &&
          this.four.innerHTML === this.O &&
          this.seven.innerHTML === this.X
        ) {
          this.sixSqCompMove();
        } else if (
          this.one.innerHTML === this.O &&
          this.four.innerHTML === this.X &&
          this.seven.innerHTML === this.X &&
          this.eight.innerHTML === this.O &&
          this.nine.innerHTML === this.X
        ) {
          this.twoSqCompMove();
        } else if (
          this.three.innerHTML === this.X &&
          this.six.innerHTML === this.O &&
          this.seven.innerHTML === this.O &&
          this.eight.innerHTML === this.X &&
          this.nine.innerHTML === this.X
        ) {
          this.fourSqCompMove();
        } else if (
          this.one.innerHTML === this.X &&
          this.two.innerHTML === this.O &&
          this.three.innerHTML === this.X &&
          this.six.innerHTML === this.X &&
          this.nine.innerHTML === this.O
        ) {
          this.eightSqCompMove();
        } else if (
          this.two.innerHTML === this.X &&
          this.four.innerHTML === this.X &&
          this.five.innerHTML === this.X &&
          this.six.innerHTML === this.O &&
          this.eight.innerHTML === this.O
        ) {
          this.nineSqCompMove();
        } else if (
          this.two.innerHTML === this.X &&
          this.four.innerHTML === this.O &&
          this.five.innerHTML === this.X &&
          this.six.innerHTML === this.X &&
          this.eight.innerHTML === this.O
        ) {
          this.sevenSqCompMove();
        } else if (
          this.two.innerHTML === this.O &&
          this.four.innerHTML === this.O &&
          this.five.innerHTML === this.X &&
          this.six.innerHTML === this.X &&
          this.eight.innerHTML === this.X
        ) {
          this.oneSqCompMove();
        } else if (
          this.two.innerHTML === this.O &&
          this.four.innerHTML === this.X &&
          this.five.innerHTML === this.X &&
          this.six.innerHTML === this.O &&
          this.eight.innerHTML === this.X
        ) {
          this.threeSqCompMove();
        } else if(this.one.innerHTML === this.X && this.two.innerHTML === this.O && this.three.innerHTML === this.X && this.five.innerHTML === this.O && this.eight.innerHTML === this.X){
          let indifferent = Math.ceil(Math.round() * 2);
          if(indifferent === 1){
            this.fourSqCompMove();
          } else {
            this.sixSqCompMove();
          }
        } else if (this.one.innerHTML === this.X && this.four.innerHTML === this.O && this.five.innerHTML === this.O && this.six.innerHTML === this.X && this.seven.innerHTML === this.X){
          let indifferent = Math.ceil(Math.round() * 2);
          if(indifferent === 1){
            this.twoSqCompMove();
          } else {
            this.eightSqCompMove();
          }
        } else if (this.two.innerHTML === this.X && this.five.innerHTML === this.O && this.seven.innerHTML === this.X && this.eight.innerHTML === this.O && this.nine.innerHTML === this.X){
          let indifferent = Math.ceil(Math.round() * 2);
          if(indifferent === 1){
            this.fourSqCompMove();
          } else {
            this.sixSqCompMove();
          }
        } else if (this.three.innerHTML === this.X && this.four.innerHTML === this.X && this.five.innerHTML === this.O && this.six.innerHTML === this.O && this.nine.innerHTML === this.X){
          let indifferent = Math.ceil(Math.round() * 2);
          if(indifferent === 1){
            this.twoSqCompMove();
          } else {
            this.eightSqCompMove();
          }
          // All other scenarios have middle square open, and is the best move
        } else {
          this.fiveSqCompMove();
        }
        // Final Move. If CPU can't win, block. If neither, the move does not matter
        // If human has two potential wins, only first will be caught and blocked. Difficult to calculate
        // Every possible way there could be two ways for human to win, just to lose anyways
      } else if (this.turnNum === 8) {
        const [oneLineOCt, oneLineXCt] = [
          this.oneLine.filter((el) => el.innerHTML === this.O),
          this.oneLine.filter((el) => el.innerHTML === this.X)
        ];
        const [twoLineOCt, twoLineXCt] = [
          this.twoLine.filter((el) => el.innerHTML === this.O),
          this.twoLine.filter((el) => el.innerHTML === this.X)
        ];
        const [threeLineOCt, threeLineXCt] = [
          this.threeLine.filter((el) => el.innerHTML === this.O),
          this.threeLine.filter((el) => el.innerHTML === this.X)
        ];
        const [fourLineOCt, fourLineXCt] = [
          this.fourLine.filter((el) => el.innerHTML === this.O),
          this.fourLine.filter((el) => el.innerHTML === this.X)
        ];
        const [fiveLineOCt, fiveLineXCt] = [
          this.fiveLine.filter((el) => el.innerHTML === this.O),
          this.fiveLine.filter((el) => el.innerHTML === this.X)
        ];
        const [sixLineOCt, sixLineXCt] = [
          this.sixLine.filter((el) => el.innerHTML === this.O),
          this.sixLine.filter((el) => el.innerHTML === this.X)
        ];
        const [sevenLineOCt, sevenLineXCt] = [
          this.sevenLine.filter((el) => el.innerHTML === this.O),
          this.sevenLine.filter((el) => el.innerHTML === this.X)
        ];
        const [eightLineOCt, eightLineXCt] = [
          this.eightLine.filter((el) => el.innerHTML === this.O),
          this.eightLine.filter((el) => el.innerHTML === this.X)
        ];
        // Computer wins
        if (oneLineOCt.length === 2 && oneLineXCt.length === 0) {
          const winningMove = this.oneLine.filter((el) => el.innerHTML === "");
          winningMove[0].innerHTML = this.O;
          this.checkEnd();
        } else if (twoLineOCt.length === 2 && twoLineXCt.length === 0) {
          const winningMove = this.twoLine.filter((el) => el.innerHTML === "");
          winningMove[0].innerHTML = this.O;
          this.checkEnd();
        } else if (threeLineOCt.length === 2 && threeLineXCt.length === 0) {
          const winningMove = this.threeLine.filter(
            (el) => el.innerHTML === ""
          );
          winningMove[0].innerHTML = this.O;
          this.checkEnd();
        } else if (fourLineOCt.length === 2 && fourLineXCt.length === 0) {
          const winningMove = this.fourLine.filter((el) => el.innerHTML === "");
          winningMove[0].innerHTML = this.O;
          this.checkEnd();
        } else if (fiveLineOCt.length === 2 && fiveLineXCt.length === 0) {
          const winningMove = this.fiveLine.filter((el) => el.innerHTML === "");
          winningMove[0].innerHTML = this.O;
          this.checkEnd();
        } else if (sixLineOCt.length === 2 && sixLineXCt.length === 0) {
          const winningMove = this.sixLine.filter((el) => el.innerHTML === "");
          winningMove[0].innerHTML = this.O;
          this.checkEnd();
        } else if (sevenLineOCt.length === 2 && sevenLineXCt.length === 0) {
          const winningMove = this.sevenLine.filter(
            (el) => el.innerHTML === ""
          );
          winningMove[0].innerHTML = this.O;
          this.checkEnd();
        } else if (eightLineOCt.length === 2 && eightLineXCt.length === 0) {
          const winningMove = this.eightLine.filter(
            (el) => el.innerHTML === ""
          );
          winningMove[0].innerHTML = this.O;
          this.checkEnd();
          // Computer needs to block win
        } else if (oneLineXCt.length === 2 && oneLineOCt.length === 0) {
          const blockingMove = this.oneLine.filter((el) => el.innerHTML === "");
          blockingMove[0].innerHTML = this.O;
          this.compStatusChange();
        } else if (twoLineXCt.length === 2 && twoLineOCt.length === 0) {
          const blockingMove = this.twoLine.filter((el) => el.innerHTML === "");
          blockingMove[0].innerHTML = this.O;
          this.compStatusChange();
        } else if (threeLineXCt.length === 2 && threeLineOCt.length === 0) {
          const blockingMove = this.threeLine.filter(
            (el) => el.innerHTML === ""
          );
          blockingMove[0].innerHTML = this.O;
          this.compStatusChange();
        } else if (fourLineXCt.length === 2 && fourLineOCt.length === 0) {
          const blockingMove = this.fourLine.filter(
            (el) => el.innerHTML === ""
          );
          blockingMove[0].innerHTML = this.O;
          this.compStatusChange();
        } else if (fiveLineXCt.length === 2 && fiveLineOCt.length === 0) {
          const blockingMove = this.fiveLine.filter(
            (el) => el.innerHTML === ""
          );
          blockingMove[0].innerHTML = this.O;
          this.compStatusChange();
        } else if (sixLineXCt.length === 2 && sixLineOCt.length === 0) {
          const blockingMove = this.sixLine.filter((el) => el.innerHTML === "");
          blockingMove[0].innerHTML = this.O;
          this.compStatusChange();
        } else if (sevenLineXCt.length === 2 && sevenLineOCt.length === 0) {
          const blockingMove = this.sevenLine.filter(
            (el) => el.innerHTML === ""
          );
          blockingMove[0].innerHTML = this.O;
          this.compStatusChange();
        } else if (eightLineXCt.length === 2 && eightLineOCt.length === 0) {
          const blockingMove = this.eightLine.filter(
            (el) => el.innerHTML === ""
          );
          blockingMove[0].innerHTML = this.O;
          this.compStatusChange();
          // Start cases where neither can win
        } else {
          let openSquares = this.catsGame.filter((el) => el.innerHTML === "");
          let indifferentTie = Math.floor(Math.random() * 2);
          openSquares[indifferentTie].innerHTML = this.O;
          this.compStatusChange();
        }
      }
    }
  }

  // Refactored to shorten code
  oneSqCompMove() {
    this.one.innerHTML = this.O;
    this.compStatusChange();
  }

  twoSqCompMove() {
    this.two.innerHTML = this.O;
    this.compStatusChange();
  }

  threeSqCompMove() {
    this.three.innerHTML = this.O;
    this.compStatusChange();
  }

  fourSqCompMove() {
    this.four.innerHTML = this.O;
    this.compStatusChange();
  }

  fiveSqCompMove() {
    this.five.innerHTML = this.O;
    this.compStatusChange();
  }

  sixSqCompMove() {
    this.six.innerHTML = this.O;
    this.compStatusChange();
  }

  sevenSqCompMove() {
    this.seven.innerHTML = this.O;
    this.compStatusChange();
  }

  eightSqCompMove() {
    this.eight.innerHTML = this.O;
    this.compStatusChange();
  }

  nineSqCompMove() {
    this.nine.innerHTML = this.O;
    this.compStatusChange();
  }

  compStatusChange() {
    this.winningMessage.innerHTML = "";
    this.turn = "X";
    this.turnNum++;
  }

  // Set the "thinking" text for computer, then call the move function
  computerLevel() {
    if (this.darkMode === "off" && this.turn === "O") {
      this.winningMessage.innerHTML = `<p class='winning-message-light'>Thinking...</p>`;
    } else if (this.darkMode === "on" && this.turn === "O") {
      this.winningMessage.innerHTML = `<p class='winning-message-darkO'>Thinking...</p>`;
    }
    if (this.difficulty !== "2p" && this.turn === "O" && this.game === "on") {
      setTimeout(this.computerMove.bind(this), 1000);
    }
  }

  // Creates new game when level is changed or New Game is pressed
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
    this.playerOption = document.querySelectorAll(".player-option-label");
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

  // Changes the static elements to either dark mode or non dark mode
  setDarkMode(e) {
    if (e.target === this.darkModeOn) {
      this.darkModeOff.classList.remove("dark-mode-selector");
      this.darkModeOn.classList.add("dark-mode-selector");
      document.body.classList.add("dark-mode-background");
      this.darkText.classList.add("dark-mode-text");
      this.newGame.classList.add("new-game-dark");
      this.playerOption.forEach(option => {
        option.classList.add("player-option-label-dark");
      })
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
      this.playerOption.forEach(option => {
        option.classList.remove("player-option-label-dark");
      })
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
