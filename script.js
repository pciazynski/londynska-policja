let selectedPoint = 2;

function draw() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgb(200, 0, 0, 0.4)';
  ctx.beginPath();
  ctx.rect(
    rs[selectedPoint][0],
    rs[selectedPoint][1],
    rs[selectedPoint][2] - rs[selectedPoint][0],
    rs[selectedPoint][3] - rs[selectedPoint][1]);
  ctx.fill();
  ctx.stroke();
}

function selectPoint(number) {
  console.log(`previously selected point was: ${selectedPoint}`);
  selectedPoint = number;
  console.log(`currently selected point is: ${selectedPoint}`);
  draw();
}

const rs = {
  2: [314, 18, 354, 41],
  3: [609, 25, 650, 45],
  4: [790, 10, 830, 30],
  9: [20, 607, 0, 631],
  10: [467, 153, 505, 173],
  11: [602, 178, 641, 198],
  12: [717, 155, 752, 176],
  20: [82, 238, 42, 216],
  21: [260, 302, 298, 323],
  22: [611, 337, 648, 357],
  23: [781, 245, 822, 267],
  33: [159, 353, 198, 373],
  34: [477, 385, 516, 408],
  35: [668, 433, 707, 458],
  36: [743, 448, 782, 469],
  45: [33, 507, 73, 530],
  46: [192, 454, 231, 478],
  47: [317, 427, 356, 448],
  48: [518, 509, 557, 532],
  49: [805, 518, 844, 543],
  60: [77, 591, 115, 612],
  61: [239, 610, 277, 633],
  62: [325, 581, 366, 606],
  63: [537, 691, 577, 712],
  64: [664, 666, 704, 690],
  65: [796, 635, 835, 660],
  76: [47, 678, 83, 700],
  77: [153, 757, 191, 777],
  78: [273, 741, 313, 760],
  79: [366, 721, 404, 740],
  80: [574, 760, 611, 777],
  82: [816, 745, 849, 767],
}