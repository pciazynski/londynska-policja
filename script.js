let selectedPoint = 2;

const ticketsOfD = {
  taxi: 5,
  bus: 20,
  metro: 10,
};

const ticketsOfX = {
  taxi: 1,
  bus: 1,
  metro: 1,
};

function draw() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgb(200, 0, 0, 0.5)';
  ctx.beginPath();
  ctx.rect(
    rs[selectedPoint][0],
    rs[selectedPoint][1],
    rs[selectedPoint][2] - rs[selectedPoint][0],
    rs[selectedPoint][3] - rs[selectedPoint][1]);
  ctx.fill();

  taxiNeighbours[selectedPoint].forEach(point => {
    ctx.fillStyle = 'rgb(0, 0, 200, 0.3)';
    ctx.beginPath();
    ctx.rect(
      rs[point][0],
      rs[point][1],
      rs[point][2] - rs[point][0],
      rs[point][3] - rs[point][1]);
    ctx.fill();
  });

  document.getElementById('ticketsOfD').innerHTML = JSON.stringify(ticketsOfD.taxi);
  document.getElementById('ticketsOfX').innerHTML = JSON.stringify(ticketsOfX.taxi);
}

function selectPoint(number) {
  if (taxiNeighbours[selectedPoint].includes(number) && ticketsOfD.taxi > 0) {
    selectedPoint = number;
    ticketsOfD.taxi--;
    ticketsOfX.taxi++;
    draw();
  }

}

const taxiNeighbours = {
  2: [20, 10],
  3: [11, 12, 4],
  4: [3],
  9: [45, 76],
  10: [2, 11, 21, 34],
  11: [10, 3, 22],
  12: [3, 23],
  20: [2, 33],
  21: [33, 10],
  22: [11, 34, 23, 35],
  23: [12, 22],
  33: [20, 21, 46],
  34: [10, 47, 22, 48],
  35: [22, 48, 36, 65],
  36: [35, 49],
  45: [60, 46, 9],
  46: [61, 45, 47, 33],
  47: [46, 34, 62],
  48: [34, 62, 35, 63],
  49: [36],
  60: [45, 76, 61],
  61: [46, 76, 62, 78],
  62: [47, 61, 48, 79],
  63: [79, 48, 64, 80],
  64: [63, 65],
  65: [35, 82],
  76: [9, 60, 61, 77],
  77: [76, 78],
  78: [77, 61, 79],
  79: [78, 61, 63],
  80: [63],
  82: [65],
};

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