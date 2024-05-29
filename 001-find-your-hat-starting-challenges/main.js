const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(value) {
    this._field = value;
    this._rowLength = value.length;
    this._columnLength = value[0].length;
    this._historyPosition = [[0, 0]];
    this._lastPosition = [0, 0];
    this._isGameOver = false;
  }

  set lastPosition(position) {
    this._lastPosition = position;
  }

  isOutField(way, newMove) {
    const checkRow = this._lastPosition[0] + newMove[0];
    const checkColumn = this._lastPosition[1] + newMove[1];

    // check out of field condition
    if (
      checkRow >= 0 &&
      checkRow < this._rowLength &&
      checkColumn >= 0 &&
      checkColumn < this._columnLength
    ) {
      return;
    }
    throw Error("Out of field");
  }

  isThisHolePosition(newPosition) {
    if (this._field[newPosition[0]][newPosition[1]] === hole)
      throw Error("Holes");
    return;
  }

  isHaveWinner(newPosition) {
    return this._field[newPosition[0]][newPosition[1]] === hat;
  }

  addHistoryPosition(newPosition) {
    this._historyPosition.push(newPosition);
  }

  get isGameOver() {
    return this._isGameOver;
  }

  checkGameOverStatus(message) {
    this._isGameOver = true;
    process.stdout.write(message);
  }

  move(way) {
    let coordinat = [0, 0];
    if (way === "u" || way === "up") {
      coordinat[0] = -1;
    } else if (way === "d" || way === "down") {
      coordinat[0] = 1;
    } else if (way === "l" || way === "left") {
      coordinat[1] = -1;
    } else if (way === "r" || way === "right") {
      coordinat[1] = 1;
    }

    try {
      this.isOutField(way, coordinat);

      const newPosition = [
        this._lastPosition[0] + coordinat[0],
        this._lastPosition[1] + coordinat[1],
      ];

      this.isThisHolePosition(newPosition);
      const isHaveWinner = this.isHaveWinner(newPosition);
      if (isHaveWinner) {
        this.checkGameOverStatus("You win");
      }
      this.lastPosition = newPosition;
      this.addHistoryPosition(newPosition);
    } catch (error) {
      this.checkGameOverStatus(error.message);
    }
  }

  beenThereCheck(position) {
    return this._historyPosition.find(
      (element) => element[0] === position[0] && element[1] === position[1]
    );
  }

  print() {
    const [row, column] = this._lastPosition;

    for (let i = 0; i < this._rowLength; i++) {
      for (let j = 0; j < this._columnLength; j++) {
        const history = this.beenThereCheck([i, j]);
        if (history) process.stdout.write(pathCharacter);
        else process.stdout.write(this._field[i][j]);
      }
      process.stdout.write("\n");
    }
  }

  static generateField(width, height, percentage) {
    const newField = [];
    const positionRandomHat = [0, 0];

    // make hat to be not same position with start position
    do {
      (positionRandomHat[0] = Math.floor(Math.random() * height)),
        (positionRandomHat[1] = Math.floor(Math.random() * width));
    } while (positionRandomHat[0] === 0 && positionRandomHat[1] === 0);

    for (let i = 0; i < height; i++) {
      const arrayInARow = [];
      for (let j = 0; j < width; j++) {
        const random = Math.floor(Math.random() * 100) + 1;
        if (i === 0 && j === 0) {
          arrayInARow.push(pathCharacter);
        } else if (i === positionRandomHat[0] && j === positionRandomHat[1]) {
          arrayInARow.push(hat);
        } else if (random <= percentage) {
          arrayInARow.push(hole);
        } else {
          arrayInARow.push(fieldCharacter);
        }
      }
      newField.push(arrayInARow);
    }
    return newField;
  }
}

const randomField = Field.generateField(5, 5, 20);

const myField = new Field(randomField);

do {
  process.stdout.write("\x1Bc");
  myField.print();
  const way = prompt("Which way? ");
  myField.move(way);
} while (!myField.isGameOver);
