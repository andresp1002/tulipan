function setup() {
  createCanvas(600, 600);
  background(0);
  noStroke();

  // Tallo
  fill('#00FF00');
  rect(295, 300, 10, 150);

  // Hojas
  fill('#32CD32');
  ellipse(250, 400, 150, 80); // izquierda
  ellipse(350, 400, 150, 80); // derecha

  // Flor
  fill('#d35d56');
  beginShape();
  vertex(295, 300);
  bezierVertex(270, 260, 330, 260, 305, 300);
  vertex(300, 240);
  vertex(295, 300);
  endShape(CLOSE);
}
