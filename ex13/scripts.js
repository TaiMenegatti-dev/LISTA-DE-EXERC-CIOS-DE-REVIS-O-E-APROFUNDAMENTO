// Tainá Moreira Vieira Menegatti
function updateClock() {
  var now = new Date();
  var hour = String(now.getHours()).padStart(2, '0');
  var minute = String(now.getMinutes()).padStart(2, '0');
  var second = String(now.getSeconds()).padStart(2, '0');

  document.getElementById('hour').innerText = hour;
  document.getElementById('minute').innerText = minute;
  document.getElementById('second').innerText = second;
}

// Atualizar o relógio a cada segundo
setInterval(updateClock, 1000);

// Atualizar o relógio imediatamente ao carregar a página
updateClock();
