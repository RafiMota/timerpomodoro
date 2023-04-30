let tempoRestante = 1500

const timer = setInterval(updateTimer, 1000);

function updateTimer() {
    tempoRestante--

    const minutos = Math.floor(tempoRestante / 60)
    const segundos = tempoRestante % 60

    const elementoTempo = document.getElementById('tempo')

    elementoTempo.textContent = `${minutos}:${segundos.toString().padStart(2, "0")}`
    
}


