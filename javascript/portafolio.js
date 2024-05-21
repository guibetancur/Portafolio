let copyright = document.getElementById('copyright')
let year = new Date()
copyright.innerHTML = copyright.innerHTML + year.getFullYear()

const myCanvas = document.getElementById('myCanvas');
const gbCanvas = document.getElementsByClassName('gbCanvas')
for (let i = 0; i < gbCanvas.length; i++) {
  const iterator = gbCanvas[i];
  iterator.width = 50
  iterator.height = 50
  // Colores aleatorios para las tortas
  let color = "#"
  let simbolos = "0123456789ABCDEF"
  for (var col = 0; col < 6; col++) {
    color = color + simbolos[Math.floor(Math.random() * 16)]
  }
  // El quinto y sexto parámetros, dibujan la línea desde el cero del eje x hasta 2PI
  // La circunferencia completa es 2PI, por eso se divide por 10 (o 100) y se multiplica por i (%) 
  // Entonces, cuando se requiera el 70%, i debe ser 7, para el 67%, i debe ser 6.7
  // drawPie(iterator.getContext('2d'), 50, 50, 47, 0, Math.PI*2/10*(i+1), color)
  drawPie(iterator.getContext('2d'), 25, 25, 23, 0, Math.PI * 2 / 10 * iterator.firstChild.data, color, iterator.firstChild.data)
}

function drawPie(ctx, centerX, centerY, radius, startAngle, endAngle, color, valor) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.fillStyle = color
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.font = "bold 8px arial, sans-serif"
  ctx.fillText(valor*10 + "%", 0, 7);
  ctx.closePath();
  ctx.fill();
}