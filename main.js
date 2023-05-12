class FazanButton {
  #buttonWidth = 100;
  #buttonHeigth = 50;
  constructor(x, y, text, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.text = text;
  }
  display() {
    fill(this.color);
    rect(this.x, this.y, this.#buttonWidth, this.#buttonHeigth);
    textSize(25);
    fill("black");
    text(this.text, this.x + 10, this.y + 35);
  }
  actionClick() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.#buttonWidth &&
      mouseY > this.y &&
      mouseY < this.y + this.#buttonHeigth
    )
      return true;
    return false;
  }
}
class FazanLetter {
  isRunning = false;
  #letterIndex = 0;
  #alphabet = "AĂÂBCDEFGHIÎJKLMNOPQRSȘTȚUVWXYZ".split("");

  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.letter = this.#alphabet[this.#letterIndex];
  }

  display() {
    fill(this.color);
    textSize(40);
    text(this.letter, this.x, this.y);
  }

  running() {
    if (this.isRunning) {
      this.letter = this.#alphabet[this.#letterIndex++];
      if (this.#letterIndex > 30) this.#letterIndex = 0;
    }
  }
}

const startFazan = new FazanButton(200, 50, "START", "green");
const stopFazan = new FazanButton(200, 120, "STOP", "red");
const letterFazan = new FazanLetter(50, 120, "orange");

setInterval(function repeat() {
  letterFazan.running();
}, 100);

function setup() {
  const cnv = createCanvas(700, 700);
  cnv.mousePressed(fazanPressButtons);
}

function draw() {
  clear();
  startFazan.display();
  stopFazan.display();
  letterFazan.display();
}

function fazanPressButtons() {
  if (startFazan.actionClick()) letterFazan.isRunning = true;
  if (stopFazan.actionClick()) letterFazan.isRunning = false;
}
