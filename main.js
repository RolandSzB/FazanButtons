function setup() {
  createCanvas(700, 700);

  const start = new FazanButton(50, 50, "START", "green");
}
function draw() {}
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
    textSize(16);
    text(this.text, this.x + 5, this.y + 10);
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
